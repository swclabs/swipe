"use client"
import React, { useEffect } from 'react';
import Banner from "@/components/banner"
import { useRef, useState } from 'react';
import VideoPlayerControls from '@/components/control/VideoPlayerControls';
import Product from '@/components/store/product';
import TabsComponent from '@/components/tab';

function ProductPage() {
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoDuration, setVideoDuration] = useState<number>();
    const [videoProgress, setVideoProgress] = useState<number>(0);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            setVideoDuration(video.duration);
        }
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const currentTime = videoRef.current?.currentTime;
        if (videoDuration != null && currentTime != null) {
            let loadingTimeout = setTimeout(() => {
                if (videoProgress == currentTime / videoDuration) {
                    setVideoProgress((prev) => prev + 0.00001);
                }
                else {
                    setVideoProgress(currentTime / videoDuration);
                }

                setVideoProgress(currentTime / videoDuration);
            }, 10);

            return () => {
                clearTimeout(loadingTimeout);
            };
        }
    }, [videoProgress, videoDuration, isPaused]);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            setIsPaused(!video.paused);
            video.paused ? video.play() : video.pause();
        }
    };

    return (
        <>
            <Banner />
            <div className=" w-ful">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5 flex justify-between">
                        <span className=" text-xl sm:text-6xl font-semibold">MAC</span>
                        <div className=' font-semibold text-2xl'>
                            <p>If you can dream it</p>
                            <p>Mac can do it </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[90%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                    <VideoPlayerControls
                        progress={videoProgress}
                        isPaused={isPaused}
                        onPlayPause={togglePlayPause}
                    />
                </div>
                <video className="w-full" ref={videoRef} loop muted autoPlay >
                    <source src="/video.mp4" />
                </video>
            </div>

            <div className=" w-full pb-10 pt-10">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Tìm hiểu về Mac</span>
                    </div>
                </div>
            </div>

            <Product />

            <div className=" w-full bg-gray-50 pb-10 pt-10">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá các mẫu Mac</span>
                    </div>
                </div>
            </div>

            <TabsComponent />
        </>
    )
}

export default ProductPage;