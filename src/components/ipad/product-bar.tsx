'use client';
import './style.css'

export default function ProductBar() {
    return (
        <div className="flex justify-center h-full bg-black">
            <div className="pt-6 pb-6 flex items-center">
                <div className="grid grid-cols-10 gap-4">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/ipadpro_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            Ipad Pro
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/ipadair_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            iPad Air
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/ipad_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            iPad
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/ipadmini_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            iPad mini
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/ipad_compare_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            So Sánh
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/apple_pencil_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            Apple Pencil
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/keyboard_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            Bàn Phím
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/ipad_acc_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            Phụ Kiện
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/ipados_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            iPadOS 17
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/ipad/shop_ipad_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            Mua iPad
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}