'use client';
import { Image } from "@nextui-org/react";
import React from "react";
import './style.css'

export default function SelectProduct({ slug }: { slug: string }) {

    const handleClick = (item: string) => {
        const priceTitle = document.getElementById('price-title');
        if (priceTitle) {
            if (item === "iPhone_15_Pro") {
                priceTitle.innerHTML = "Tổng cộng 31.999.000đhoặc1.303.000đ/tháng cho 24 tháng";
            }
            if (item === "iPhone_15_Pro_Max") {
                priceTitle.innerHTML = "Tổng cộng 34.999.000đhoặc1.425.000đ/tháng cho 24 tháng";
            }
        }
    }

    return (

        <div className="w-full pb-[10px] hover:pb-0 scrollbar hover:overflow-x-auto overflow-hidden">
            <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">
                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>

                {slug === "iphone_15_pro" ? (
                    <div className="flex flex-row">
                        {/* Carousel */}
                        <div className="h-[592px] w-[1052px] pr-16">
                            <Image
                                alt="iPhone 15 Pro"
                                src="/img/shop/iphone-15-pro-model-unselect-gallery-1-202309.jpg"
                                className="object-cover w-full h-full"
                            ></Image>
                        </div>
                        {/* Product Info */}
                        <div className="flex flex-col object-end gap-y-4 w-80"> {/* 2-row buttons */}
                            <p className=" text-xl sm:text-2xl font-semibold">
                                Phiên bản.
                                <span className=" text-xl sm:text-2xl font-normal text-gray-400">Mẫu nào phù hợp nhất với bạn?</span>
                            </p>

                            <button className="bg-white border rounded-lg h-24" onClick={() => handleClick("iPhone_15_Pro")}>
                                <div className="flex flex-row px-2">
                                    <div className="items-center text-left w-full">
                                        <h2 className="font-semibold text-lg">iPhone 15 Pro</h2>
                                        <p className="text-xs">Màn hình 6.1 inch</p>
                                    </div>
                                    <div className="items-end text-right w-32">
                                        <p className="text-xs">
                                            Từ 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button className="bg-white border rounded-lg h-24" onClick={() => handleClick("iPhone_15_Pro_Max")}>
                                <div className="flex flex-row px-2">
                                    <div className="items-center text-left w-full">
                                        <h2 className="font-semibold text-lg">iPhone 15 Pro Max</h2>
                                        <p className="text-xs">Màn hình 6.7 inch</p>
                                    </div>
                                    <div className="items-end text-right w-32">
                                        <p className="text-xs">
                                            Từ 34.999.000đ hoặc 1.425.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <p className="text-xs"> Trả góp theo tháng với phí dịch vụ thực 1.67%, sau khi thanh toán lần đầu 20%. Có thêm tùy chọn thanh toán khi hoàn tất giao dịch. </p>

                            <p className=" text-xl sm:text-2xl font-semibold">
                                Màu.
                                <span className=" text-xl sm:text-2xl font-normal text-gray-400">Chọn màu bạn yêu thích.</span>
                            </p>

                            <div className="flex flex-row">
                                <button className="swatch-button flex items-center justify-center rounded-full h-10 w-10">
                                    {/* <img src="/img/shop/iphone-pro-finish-naturaltitanium-202309.jpg" className="h-8 w-8 rounded-full" /> */}
                                    <Image
                                        alt="nature-titanium"
                                        src="/img/shop/iphone-pro-finish-naturaltitanium-202309.jpg"
                                        className="h-8 w-8 rounded-full"
                                    ></Image>
                                </button>
                                <button className="swatch-button flex items-center justify-center rounded-full h-10 w-10">
                                    {/* <img src="/img/shop/iphone-pro-finish-bluetitanium-202309.jpg" className="h-8 w-8 rounded-full" /> */}
                                    <Image
                                        alt="blue-titanium"
                                        src="/img/shop/iphone-pro-finish-bluetitanium-202309.jpg"
                                        className="h-8 w-8 rounded-full"
                                    ></Image>
                                </button>
                                <button className="swatch-button flex items-center justify-center rounded-full h-10 w-10">
                                    {/* <img src="/img/shop/iphone-pro-finish-whitetitanium-202309.jpg" className="h-8 w-8 rounded-full" /> */}
                                    <Image
                                        alt="white-titanium"
                                        src="/img/shop/iphone-pro-finish-whitetitanium-202309.jpg"
                                        className="h-8 w-8 rounded-full"
                                    ></Image>
                                </button>
                                <button className="swatch-button flex items-center justify-center rounded-full h-10 w-10">
                                    {/* <img src="/img/shop/iphone-pro-finish-blacktitanium-202309.jpg" className="h-8 w-8 rounded-full" /> */}
                                    <Image
                                        alt="black-titanium"
                                        src="/img/shop/iphone-pro-finish-blacktitanium-202309.jpg"
                                        className="h-8 w-8 rounded-full"
                                    ></Image>
                                </button>
                            </div>


                            <p className=" text-xl sm:text-2xl font-semibold">
                                Dung lượng lưu trữ.
                                <span className=" text-xl sm:text-2xl font-normal text-gray-400">Bạn cần bao nhiêu dung lượng?</span>
                            </p>

                            <button className="bg-white border rounded-lg h-24">
                                <div className="flex flex-row px-2">
                                    <div className="flex items-center text-left w-full px-2">
                                        <h2 className="font-semibold text-lg">128GB</h2>
                                    </div>
                                    <div className="text-right w-32">
                                        <p className="text-xs">
                                            28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <button className="bg-white border rounded-lg h-24">
                                <div className="flex flex-row px-2">
                                    <div className="flex items-center text-left w-full px-2">
                                        <h2 className="font-semibold text-lg">256GB</h2>
                                    </div>
                                    <div className="text-right w-32">
                                        <p className="text-xs">
                                            31.999.000đ hoặc 1.303.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <button className="bg-white border rounded-lg h-24">
                                <div className="flex flex-row px-2">
                                    <div className="flex items-center text-left w-full px-2">
                                        <h2 className="font-semibold text-lg">512GB</h2>
                                    </div>
                                    <div className="text-right w-32">
                                        <p className="text-xs">
                                            37.999.000đ hoặc 1.547.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <button className="bg-white border rounded-lg h-24">
                                <div className="flex flex-row px-2">
                                    <div className="flex items-center text-left w-full px-2">
                                        <h2 className="font-semibold text-lg">1TB</h2>
                                    </div>
                                    <div className="text-right w-32">
                                        <p className="text-xs">
                                            43.999.000đ hoặc 1.791.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>

                        </div>
                    </div>
                ) : slug === "iphone_15" ? (
                    <div className="flex flex-row">
                        {/* Carousel */}
                        <div className="h-[592px] w-[1052px] pr-16">
                            <Image
                                alt="iPhone 15 Pro"
                                src="/img/shop/iphone-15-pro-model-unselect-gallery-1-202309.jpg"
                                className="object-cover w-full h-full"
                            ></Image>
                        </div>
                        {/* Product Info */}
                        <div className="flex flex-col object-end gap-y-4 w-80"> {/* 2-row buttons */}
                            <p className=" text-xl sm:text-2xl font-semibold">
                                Phiên bản.
                                <span className=" text-xl sm:text-2xl font-normal text-gray-400">Mẫu nào phù hợp nhất với bạn?</span>
                            </p>

                            <button className="bg-white border rounded-lg h-24">
                                <div className="flex flex-row px-2">
                                    <div className="items-center text-left w-full">
                                        <h2 className="font-semibold text-lg">iPhone 15</h2>
                                        <p className="text-xs">Màn hình 6.1 inch</p>
                                    </div>
                                    <div className="items-end text-right w-32">
                                        <p className="text-xs">
                                            Từ 22.999.000đ hoặc 936.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button className="bg-white border rounded-lg h-24">
                                <div className="flex flex-row px-2">
                                    <div className="items-center text-left w-full">
                                        <h2 className="font-semibold text-lg">iPhone 15 Pro</h2>
                                        <p className="text-xs">Màn hình 6.7 inch</p>
                                    </div>
                                    <div className="items-end text-right w-32">
                                        <p className="text-xs">
                                            Từ 25.999.000đ hoặc 1.059.000đ/thángmỗi tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                ) : slug === "iphone_14" ? (
                    <div className="flex flex-row">
                        {/* Carousel */}
                        <div className="h-[592px] w-[1052px] pr-16">
                            <Image
                                alt="iPhone 15 Pro"
                                src="/img/shop/iphone-15-pro-model-unselect-gallery-1-202309.jpg"
                                className="object-cover w-full h-full"
                            ></Image>
                        </div>
                        {/* Product Info */}
                        <div className="flex flex-col object-end gap-y-4 w-80"> {/* 2-row buttons */}
                            <p className=" text-xl sm:text-2xl font-semibold">
                                Phiên bản.
                                <span className=" text-xl sm:text-2xl font-normal text-gray-400">Mẫu nào phù hợp nhất với bạn?</span>
                            </p>

                            <button className="bg-white border rounded-lg h-24">
                                <div className="flex flex-row px-2">
                                    <div className="items-center text-left w-full">
                                        <h2 className="font-semibold text-lg">iPhone 14</h2>
                                        <p className="text-xs">Màn hình 6.1 inch</p>
                                    </div>
                                    <div className="items-end text-right w-32">
                                        <p className="text-xs">
                                            Từ 19.999.000đ hoặc 814.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button className="bg-white border rounded-lg h-24">
                                <div className="flex flex-row px-2">
                                    <div className="items-center text-left w-full">
                                        <h2 className="font-semibold text-lg">iPhone 15 Pro</h2>
                                        <p className="text-xs">Màn hình 6.7 inch</p>
                                    </div>
                                    <div className="items-end text-right w-32">
                                        <p className="text-xs">
                                            Từ 22.999.000đ hoặc 936.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                ) : slug === "iphone_13" ? (
                    <h2>Không có sản phẩm</h2>
                ) : (
                    <h2>Không có sản phẩm</h2>
                )}
                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
            </div>
        </div >

    )
}