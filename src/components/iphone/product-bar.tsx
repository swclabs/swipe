'use client';
import './style.css'

export default function ProductBar() {
    return (
        <div className="flex justify-center h-full bg-gray-50">
            <div className="pl-6 pr-6 pt-6 pb-6 flex items-center">
                <div className="grid grid-cols-11">
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/iphone_15_pro_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>iPhone 15 Pro</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/iphone_15_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>iPhone 15</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/iphone_15_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>iPhone 14</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/iphone_13_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>iPhone 13</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/iphone_se_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>iPhone SE</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/iphone_compare_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>So Sánh</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/airpods_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>Airpods</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/airtag_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>AirTag</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/accessories_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>Phụ Kiện</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/iphone_ios_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>iOS 17</p>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="">
                        <img src="/img/iphone/shop_iphone_light_large.svg" alt="iphone 15 pro" className="w-12 h-12" />
                        <p>Mua sắm iPhone</p>
                    </a>
                </div>
            </div>
        </div>
    )
}