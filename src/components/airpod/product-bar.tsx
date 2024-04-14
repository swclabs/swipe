'use client';
import './style.css'
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion"

export default function ProductBar() {
    return (
        <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
        >
            <div className="flex justify-center h-full bg-gray-50">
                <div className="pl-6 pr-6 flex items-center">
                    <div className="grid grid-cols-6 gap-6">

                        <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                            <div className='h-12'>
                                <Image
                                    removeWrapper
                                    src="/img/airpod/airpods_2gen_light_large.svg"
                                    alt="Airpods"
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <p className='h-12 font-normal text-sm'>
                                AirPods <br />
                                Thế hệ thứ 2
                            </p>
                        </a>

                        <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                            <div className='h-12'>
                                <Image
                                    src="/img/airpod/airpods_3gen_light_large.svg"
                                    alt="Airpod 3th generation"
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <p className='h-12 font-normal text-sm'>
                                AirPods<br />
                                Thế hệ thứ 3
                            </p>
                        </a>

                        <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                            <div className='h-12'>
                                <Image
                                    src="/img/airpod/airpods_pro_light_large.svg"
                                    alt="Airpod Pro 2th generation"
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <p className='h-12 font-normal text-sm'>
                                AirPods Pro<br />
                                Thế hệ thứ 2
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                            <div className='h-12'>
                                <Image
                                    src="/img/airpod/airpods_max_light_large.svg"
                                    alt="Airpod Max"
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <p className='h-12 font-normal text-sm'>
                                AirPods Max
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                            <div className='h-12'>
                                <Image
                                    removeWrapper
                                    src="/img/airpod/airpods_compare_light_large.svg"
                                    alt="Compare"
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <p className='h-12 font-normal text-sm'>
                                So Sánh
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                            <div className='h-12'>
                                <Image
                                    removeWrapper
                                    src="/img/airpod/apple_music_light_large.svg"
                                    alt="Airpods"
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <p className='h-12 font-normal text-sm'>
                                Airpods
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}