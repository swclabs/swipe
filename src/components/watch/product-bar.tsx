'use client';
import './style.css'

export default function ProductBar() {
    return (
        <div className="flex justify-center h-full bg-black">
            <div className="pt-6 pb-6 flex items-center">
                <div className="grid grid-cols-11 gap-4">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_series_8_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            Apple Watch
                            <br />
                            Series 9
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_ultra_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            Apple Watch
                            <br />
                            Ultra 2
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_se_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>Apple Watch <br />SE
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_nike_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            Apple Watch
                            <br />
                            Nike
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_studio_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>
                            Apple Watch
                            <br />
                            Studio
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_compare_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>So Sánh</p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_bands_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>Dây Đeo</p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_airpods_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>AirPods</p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_accessories_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>Phụ Kiện</p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_watch_os_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>watchOS 10</p>
                    </a>
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <img src="/img/watch/watch_nav_shop_watch_dark_large.svg" alt="iphone 15 pro" className="w-12 h-12 pb-2" />
                        <p className='text-white'>Mua Watch</p>
                    </a>
                </div>
            </div>
        </div>
    )
}