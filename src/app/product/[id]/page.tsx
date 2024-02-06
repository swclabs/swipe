"use client";

import React, { useEffect } from 'react';
import Banner from "@/components/banner"
import { useRef, useState } from 'react';
import VideoPlayerControls from '@/components/control/VideoPlayerControls';
import Product from '@/components/store/product';


export default function ProductPage() {
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
            <div className=" w-full bg-gray-50">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">MAC</span>
                        <p>
                            "If you can dream it,"
                            "Mac can do it"
                        </p>
                    </div>
                </div>
            </div>

            {/* <button onClick={togglePlayPause}>Play/Pause</button> */}
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

            <div className=" w-full bg-gray-50">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Tìm hiểu về Mac</span>
                    </div>
                </div>
            </div>
            <Product />

            <div className=" w-full bg-gray-50">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá các mẫu Mac</span>
                    </div>
                </div>
            </div>
        </>
    )
}