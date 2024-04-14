'use client';
import './style.css'
import { Image } from '@nextui-org/react';

import { motion } from "framer-motion"

export default function ProductBar() {
    return (
        <motion.div
            initial={{ opacity: 0, x: '100vw' }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.75 }}
        >
            <div className="flex justify-center h-full bg-gray-50">
                <div className="pl-6 pr-6 pt-6 pb-6 flex items-center">
                    <div className="grid grid-cols-11 gap-4">
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/macbookair_light_large.svg"
                                    alt="MacBook Air"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                MacBook Air
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/macbook_pro_light_large.svg"
                                    alt="MacBook Pro"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                MacBook Pro
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/imac_light_large.svg"
                                    alt="iMac"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                iMac
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/mac_mini_light_large.svg"
                                    alt="Mac Mini"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                Mac mini
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/mac_studio_light_large.svg"
                                    alt="Mac Studio"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                Mac Studio
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/mac_pro_light_large.svg"
                                    alt="Mac Pro"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                Mac Pro
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/mac_compare_light_large.svg"
                                    alt="Compare"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>So Sánh</p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/displays_light_large.svg"
                                    alt="Displays"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                Màn hình
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/mac_accessories_light_large.svg"
                                    alt="Accessories"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                Phụ kiện
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/mac_os_light_large.svg"
                                    alt="Sonoma"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                Sonoma
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/mac/mac_shop_light_large.svg"
                                    alt="Macs"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p>
                                Mua sắm Mac
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}