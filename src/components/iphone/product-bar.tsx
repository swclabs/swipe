'use client';
import './style.css'
import {motion} from "framer-motion"
import { Image } from "@nextui-org/react";

export default function ProductBar() {
    return (
        <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
        >
            <div className="flex justify-center h-full bg-gray-50">
                <div className="pl-6 pr-6 pt-6 pb-6 flex items-center">
                    <div className="grid grid-cols-11">
                        <a className="flex flex-col items-center text-center gap-y-2" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/iphone/iphone_15_pro_light_large.svg"
                                    alt="iPhone 15 Pro"
                                    className='object-cover'
                                    radius='none'
                                />
                            </div>
                            <p>iPhone 15 Pro</p>
                        </a>
                        <a className="flex flex-col items-center text-center gap-y-2" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/iphone/iphone_15_light_large.svg"
                                    alt="iPhone 15"
                                    className='object-cover'
                                    radius='none'
                                />
                            </div>
                            <p>iPhone 15</p>
                        </a>
                        <a className="flex flex-col items-center text-center gap-y-2" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/iphone/iphone_15_light_large.svg"
                                    alt="iPhone 14"
                                    className='object-cover'
                                    radius='none'
                                />
                            </div>
                            <p>iPhone 14</p>
                        </a>
                        <a className="flex flex-col items-center text-center gap-y-2" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/iphone/iphone_13_light_large.svg"
                                    alt="iPhone 13"
                                    className='object-cover'
                                    radius='none'
                                />
                            </div>
                            <p>iPhone 13</p>
                        </a>
                        <a className="flex flex-col items-center text-center gap-y-2" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/iphone/iphone_se_light_large.svg"
                                    alt="iPhone SE"
                                    className='object-contain w-12 h-14'
                                    radius='none'
                                />
                            </div>
                            <p>iPhone SE</p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-14 w-14'>
                                <Image
                                    src="/img/iphone/iphone_compare_light_large.svg"
                                    alt="Compare"
                                    className='object-contain'
                                    radius='none'
                                />
                            </div>
                            <p>So Sánh</p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-14 w-14'>
                                <Image
                                    src="/img/iphone/airpods_light_large.svg"
                                    alt="Airpods"
                                    className='object-contain'
                                    radius='none'
                                />
                            </div>
                            <p>Airpods</p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-14 w-14'>
                                <Image
                                    src="/img/iphone/airtag_light_large.svg"
                                    alt="Airtag"
                                    className='object-contain w-12 h-14'
                                    radius='none'
                                />
                            </div>
                            <p>AirTag</p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-14 w-14'>
                                <Image
                                    src="/img/iphone/accessories_light_large.svg"
                                    alt="Accessories"
                                    className='object-contain'
                                    radius='none'
                                />
                            </div>
                            <p>Phụ Kiện</p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-14 w-14'>
                                <Image
                                    src="/img/iphone/iphone_ios_light_large.svg"
                                    alt="iOS 17"
                                    className='object-contain w-12 h-14'
                                    radius='none'
                                />
                            </div>
                            <p>iOS 17</p>
                        </a>
                        <a className="flex flex-col items-center justify-center" href="">
                            <div className='flex justify-center h-14 w-14'>
                                <Image
                                    src="/img/iphone/shop_iphone_light_large.svg"
                                    alt="iPhones"
                                    className='object-contain'
                                    radius='none'
                                />
                            </div>
                            <p>Mua sắm iPhone</p>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}