'use client';
import './style.css'

export default function ProductBar() {
    return (
        <div className="flex justify-center h-full bg-gray-50">
            <div className="pl-6 pr-6 pt-6 pb-6 flex items-center">
                <div className="grid grid-cols-11">
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/macbookair_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            MacBook Air
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/macbook_pro_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            MacBook Pro
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/imac_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            iMac
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/mac_mini_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            Mac mini
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/mac_studio_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            Mac Studio
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/mac_pro_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            Mac Pro
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/mac_compare_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>So Sánh</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/displays_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            Màn hình
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/mac_accessories_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            Phụ kiện
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/mac_os_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            Sonoma
                        </p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/mac/mac_shop_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>
                            Mua sắm Mac
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}