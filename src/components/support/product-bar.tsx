'use client';
import Link from 'next/link';
import { Image } from '@nextui-org/react';
import './style.css';

export default function ProductBar() {

    return (
        <div className='w-full bg-white'>
            <div className='w-1/2 m-auto flex flex-row'>
                <Link href="" className='flex flex-col justify-center items-center w-[140px] h-[109px]'>
                    <div>
                        <Image
                            alt="iPhone"
                            src="/img/support/image-grid-iphone_2x.png"
                            className='h-[68px] w-full object-cover'
                            radius='none'
                        />
                    </div>
                    <div className='mt-2'>
                        <p className=''>iPhone</p>
                    </div>
                </Link>
                <Link href="" className='flex flex-col justify-center items-center w-[140px] h-[109px]'>
                    <div>
                        <Image
                            alt="iPhone"
                            src="/img/support/image-grid-mac_2x.png"
                            className='h-[68px] w-full object-cover'
                            radius='none'
                        />
                    </div>
                    <div className='m-2'>
                        <p className=''>Mac</p>
                    </div>
                </Link>
                <Link href="" className='flex flex-col justify-center items-center w-[140px] h-[109px]'>
                    <div>
                        <Image
                            alt="iPad"
                            src="/img/support/image-grid-ipad_2x.png"
                            className='h-[68px] w-full object-cover'
                            radius='none'
                        />
                    </div>
                    <div className='m-2'>
                        <p className=''>iPad</p>
                    </div>
                </Link>
                <Link href="" className='flex flex-col justify-center items-center w-[140px] h-[109px]'>
                    <div>
                        <Image
                            alt="Watch"
                            src="/img/support/image-grid-watch-_2x.png"
                            className='h-[68px] w-full object-cover'
                            radius='none'
                        />
                    </div>
                    <div className='m-2'>
                        <p className=''>Watch</p>
                    </div>
                </Link>
                <Link href="" className='flex flex-col justify-center items-center w-[140px] h-[109px]'>
                    <div>
                        <Image
                            alt="AirPods"
                            src="/img/support/image-grid-airpods_2x.png"
                            className='h-[68px] w-full object-cover'
                            radius='none'
                        />
                    </div>
                    <div className='m-2'>
                        <p className=''>AirPods</p>
                    </div>
                </Link>
                <Link href="" className='flex flex-col justify-center items-center w-[140px] h-[109px]'>
                    <div>
                        <Image
                            alt="Music"
                            src="/img/support/image-grid-music_2x.png"
                            className='h-[68px] w-full object-cover'
                            radius='none'
                        />
                    </div>
                    <div className='m-2'>
                        <p className=''>Nhạc</p>
                    </div>
                </Link>
                <Link href="" className='flex flex-col justify-center items-center w-[140px] h-[109px]'>
                    <div>
                        <Image
                            alt="TV"
                            src="/img/support/image-grid-tv_2x.png"
                            className='h-[68px] w-full object-cover'
                            radius='none'
                        />
                    </div>
                    <div className='m-2'>
                        <p className=''>TV</p>
                    </div>
                </Link>
            </div>
            <div className='w-1/2 m-auto mt-12 flex flex-row gap-x-6'>
                <div className='flex justify-center items-center'>
                    <Link
                        href=""
                        className='
                        title-wrapper bg-gray-100 rounded-lg 
                        flex flex-col justify-center items-center 
                        h-[180px]  aspect-[5/3] duration-500
                    '>
                        <div className='flex flex-col justify-center items-center rounded'>
                            <div className='w-[60px] h-[60px] mb-4'>
                                <Image
                                    alt=""
                                    src="/img/support/tile-topic-password_2x.svg"
                                    className='h-full w-full object-cover'
                                    radius='none'
                                />
                            </div>
                            <div className='m-2'>
                                <p className='text-center text-blue-500'>
                                    Quên mật khẩu ID Apple
                                </p>
                            </div>
                        </div>
                    </Link >
                </div>
                <div className='flex justify-center items-center'>
                    <Link
                        href=""
                        className='
                        title-wrapper bg-gray-100 rounded-lg 
                        flex flex-col justify-center items-center 
                        h-[180px]  aspect-[5/3] duration-500
                    '>
                        <div className='flex flex-col justify-center items-center rounded'>
                            <div className='w-[60px] h-[60px] mb-4'>
                                <Image
                                    alt=""
                                    src="/img/support/tile-topic-repair_2x.svg"
                                    className='h-full w-full object-cover'
                                    radius='none'
                                />
                            </div>
                            <div className='m-2'>
                                <p className='text-center text-blue-500'>
                                    Dịch vụ sửa chữa của Apple
                                </p>
                            </div>
                        </div>
                    </Link >
                </div>
                <div className='flex justify-center items-center'>
                    <Link
                        href=""
                        className='
                        title-wrapper bg-gray-100 rounded-lg 
                        flex flex-col justify-center items-center 
                        h-[180px]  aspect-[5/3] duration-500
                    '>
                        <div className='flex flex-col justify-center items-center rounded'>
                            <div className='w-[60px] h-[60px] mb-4'>
                                <Image
                                    alt=""
                                    src="/img/support/tile-topic-billing_2x.svg"
                                    className='h-full w-full object-cover'
                                    radius='none'
                                />
                            </div>
                            <div className='m-2'>
                                <p className='text-center text-blue-500'>
                                    Thanh toán và đăng ký
                                </p>
                            </div>
                        </div>
                    </Link >
                </div>
            </div >
        </div >

    )
}