'use client';
import './style.css'
import { Image } from "@nextui-org/react";

export default function ProductBar() {
    return (
        <div className="flex justify-center h-full bg-black">
            <div className="pt-6 pb-6 flex items-center">
                <div className="grid grid-cols-11 gap-4">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_series_8_dark_large.svg"
                                alt="Apple Watch Series 9"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                Apple Watch
                                <br />
                                Series 9
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_ultra_dark_large.svg"
                                alt="Apple Watch Ultra 2"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                Apple Watch
                                <br />
                                Ultra 2
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_se_dark_large.svg"
                                alt="Apple Watch SE"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                Apple Watch
                                <br />
                                SE
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_nike_dark_large.svg"
                                alt="Apple Watch Nike"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                Apple Watch
                                <br />
                                Nike
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_studio_dark_large.svg"
                                alt="Apple Watch Studio"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                Apple Watch
                                <br />
                                Studio
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_compare_dark_large.svg"
                                alt="Compare"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                So Sánh
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_bands_dark_large.svg"
                                alt="Bands"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                Dây Đeo
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_airpods_dark_large.svg"
                                alt="AirPods"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                AirPods
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_accessories_dark_large.svg"
                                alt="Accessories"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                Phụ Kiện
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_watch_os_dark_large.svg"
                                alt="watchOS 10"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                watchOS 10
                            </p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/watch/watch_nav_shop_watch_dark_large.svg"
                                alt="Buy Watches"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <div className='h-12'>
                            <p className='text-white text-sm'>
                                Mua Watch
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}