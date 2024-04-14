'use client';
import './style.css'
import {motion} from "framer-motion"
import { Image } from "@nextui-org/react";

export default function ProductBar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
        >
            <div className="flex justify-center h-full bg-black">
                <div className="pt-6 pb-6 flex items-center">
                    <div className="grid grid-cols-10 gap-4">
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/ipadpro_dark_large.svg"
                                    alt="iPad Pro"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                Ipad Pro
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/ipadair_dark_large.svg"
                                    alt="iPad Air"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                iPad Air
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/ipad_dark_large.svg"
                                    alt="iPad"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                iPad
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/ipadmini_dark_large.svg"
                                    alt="iPad mini"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                iPad mini
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/ipad_compare_dark_large.svg"
                                    alt="Compare"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                So Sánh
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/apple_pencil_dark_large.svg"
                                    alt="Apple Pencil"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                Apple Pencil
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/keyboard_dark_large.svg"
                                    alt="Keyboard"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                Bàn Phím
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/ipad_acc_dark_large.svg"
                                    alt="Accessories"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                Phụ Kiện
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/ipados_dark_large.svg"
                                    alt="iPadOS 17"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                iPadOS 17
                            </p>
                        </a>
                        <a className="flex flex-col items-center justify-center text-center" href="">
                            <div className='flex justify-center h-12 w-12'>
                                <Image
                                    src="/img/ipad/shop_ipad_dark_large.svg"
                                    alt="Buy iPads"
                                    className='object-contain h-[100%]'
                                    radius='none'
                                />
                            </div>
                            <p className='text-white'>
                                Mua iPad
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}