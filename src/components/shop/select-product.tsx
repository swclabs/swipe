'use client';
import { Image } from "@nextui-org/react";
import React from "react";
import './style.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from 'react';

export default function SelectProduct({ slug, getData }: { slug: string, getData: (value: string) => void }) {

    const [selectedProduct, setSelectedProduct] = useState<string>();
    const [color, setColor] = useState<string>("Default");
    const [storage, setStorage] = useState<string>("Default");
    const [combination, setCombination] = useState<string>("Unselected");

    useEffect(() => {
        getData(selectedProduct + "-" + color + "-" + storage);

        if (selectedProduct && color) {
            setCombination(`${selectedProduct}-${color}`);
        }
    }, [selectedProduct, color, storage]);

    const handleColorClick = (color: string) => {
        setColor(color);
    }

    const handleStorageClick = (storage: string) => {
        setStorage(storage);
        console.log(storage)

        const activeStorageButton = document.getElementsByClassName('storage-button');

        if (activeStorageButton) {
            for (let i = 0; i < activeStorageButton.length; i++) {
                activeStorageButton[i].classList.remove('active');
            }
            document.getElementById(storage)?.classList.add('active');
        }
    }

    const handleProductClick = (item: string) => {
        const activeButton = document.getElementsByClassName('product-button');

        if (activeButton) {
            for (let i = 0; i < activeButton.length; i++) {
                activeButton[i].classList.remove('active');
            }
            document.getElementById(item)?.classList.add('active');
        }

        // event when press button => priceTitle change
        setSelectedProduct(item);

        const priceStorage_128 = document.getElementById('priceStorage_128');
        const priceStorage_256 = document.getElementById('priceStorage_256');
        const priceStorage_512 = document.getElementById('priceStorage_512');
        const priceStorage_1TB = document.getElementById('priceStorage_1TB');

        if (priceStorage_128 && priceStorage_256 && priceStorage_512 && priceStorage_1TB) {
            if (item === "iPhone_15_Pro") {
                priceStorage_128.innerHTML = "Từ 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng";
                priceStorage_256.innerHTML = "Từ 31.999.000đ hoặc 1.303.000đ/tháng trong 24 tháng";
                priceStorage_512.innerHTML = "Từ 37.999.000đ hoặc 1.547.000đ/tháng trong 24 tháng";
                priceStorage_1TB.innerHTML = "Từ 43.999.000đ hoặc 1.791.000đ/tháng trong 24 tháng";
            }
            if (item === "iPhone_15_Pro_Max") {
                priceStorage_128.innerHTML = "Từ 34.999.000đ hoặc 1.425.000đ/tháng trong 24 tháng";
                priceStorage_256.innerHTML = "Từ 37.999.000đ hoặc 1.547.000đ/tháng trong 24 tháng";
                priceStorage_512.innerHTML = "Từ 43.999.000đ hoặc 1.791.000đ/tháng trong 24 tháng";
                priceStorage_1TB.innerHTML = "Từ 49.999.000đ hoặc 2.037.000đ/tháng trong 24 tháng";
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
                            {combination === "iPhone_15_Pro-Default" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    >
                                    </Image>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    >
                                    </Image>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch_AV4.jpg"
                                        className="object-cover w-full h-full"
                                    >
                                    </Image>
                                </Carousel>
                            ) : combination === "iPhone_15_Pro_Max-Default" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch_AV4.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            ) : combination === "iPhone_15_Pro-Nature-Titanium" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro - Nature Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Nature Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Nature Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Nature Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            ) : combination === "iPhone_15_Pro-Blue-Titanium" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro - Blue Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Blue Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Blue Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Blue Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            ) : combination === "iPhone_15_Pro-White-Titanium" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro - White Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - White Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - White Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - White Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            ) : combination === "iPhone_15_Pro-Black-Titanium" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            ) : combination === "iPhone_15_Pro_Max-Nature-Titanium" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            ) : combination === "iPhone_15_Pro_Max-Blue-Titanium" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            ) : combination === "iPhone_15_Pro_Max-White-Titanium" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            ) : combination === "iPhone_15_Pro_Max-Black-Titanium" ? (
                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV1.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV2.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro - Black Titanium"
                                        src="/img/shop/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV3.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            ) : (

                                <Carousel>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-model-unselect-gallery-1-202309.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                    <Image
                                        alt="iPhone 15 Pro"
                                        src="/img/shop/iphone-15-pro-model-unselect-gallery-2-202309.jpg"
                                        className="object-cover w-full h-full"
                                    ></Image>
                                </Carousel>
                            )}

                        </div>


                        {/* Product Info */}
                        <div className="flex flex-col object-end gap-y-4 w-80"> {/* 2-row buttons */}
                            <p className=" text-xl sm:text-2xl font-semibold">
                                Phiên bản.
                                <span className=" text-xl sm:text-2xl font-normal text-gray-400">Mẫu nào phù hợp nhất với bạn?</span>
                            </p>

                            <button id="iPhone_15_Pro" className="product-button bg-white  border rounded-lg h-24" onClick={() => handleProductClick("iPhone_15_Pro")}>
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
                            <button id="iPhone_15_Pro_Max" className="product-button bg-white border rounded-lg h-24" onClick={() => handleProductClick("iPhone_15_Pro_Max")}>
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

                            {/* Color */}
                            <p className=" text-xl sm:text-2xl font-semibold">
                                Màu.
                                <span className=" text-xl sm:text-2xl font-normal text-gray-400">Chọn màu bạn yêu thích.</span>
                            </p>

                            <div className="flex flex-row gap-x-2">
                                <button className="swatch-button flex items-center justify-center rounded-full h-10 w-10" onClick={() => handleColorClick("Nature-Titanium")}>
                                    {/* <img src="/img/shop/iphone-pro-finish-naturaltitanium-202309.jpg" className="h-8 w-8 rounded-full" /> */}
                                    <Image
                                        alt="nature-titanium"
                                        src="/img/shop/iphone-pro-finish-naturaltitanium-202309.jpg"
                                        className="h-8 w-8 rounded-full"
                                    ></Image>
                                </button>
                                <button className="swatch-button flex items-center justify-center rounded-full h-10 w-10" onClick={() => handleColorClick("Blue-Titanium")}>
                                    {/* <img src="/img/shop/iphone-pro-finish-bluetitanium-202309.jpg" className="h-8 w-8 rounded-full" /> */}
                                    <Image
                                        alt="blue-titanium"
                                        src="/img/shop/iphone-pro-finish-bluetitanium-202309.jpg"
                                        className="h-8 w-8 rounded-full"
                                    ></Image>
                                </button>
                                <button className="swatch-button flex items-center justify-center rounded-full h-10 w-10" onClick={() => handleColorClick("White-Titanium")}>
                                    {/* <img src="/img/shop/iphone-pro-finish-whitetitanium-202309.jpg" className="h-8 w-8 rounded-full" /> */}
                                    <Image
                                        alt="white-titanium"
                                        src="/img/shop/iphone-pro-finish-whitetitanium-202309.jpg"
                                        className="h-8 w-8 rounded-full"
                                    ></Image>
                                </button>
                                <button className="swatch-button flex items-center justify-center rounded-full h-10 w-10" onClick={() => handleColorClick("Black-Titanium")}>
                                    {/* <img src="/img/shop/iphone-pro-finish-blacktitanium-202309.jpg" className="h-8 w-8 rounded-full" /> */}
                                    <Image
                                        alt="black-titanium"
                                        src="/img/shop/iphone-pro-finish-blacktitanium-202309.jpg"
                                        className="h-8 w-8 rounded-full"
                                    ></Image>
                                </button>
                            </div>

                            {/* Storage */}
                            <p className=" text-xl sm:text-2xl font-semibold">
                                Dung lượng lưu trữ.
                                <span className=" text-xl sm:text-2xl font-normal text-gray-400">Bạn cần bao nhiêu dung lượng?</span>
                            </p>

                            {
                                selectedProduct !== "iPhone_15_Pro_Max" &&
                                <button id="128GB" className="storage-button bg-white border rounded-lg h-24" onClick={() => handleStorageClick("128GB")}>
                                    <div className="flex flex-row px-2">
                                        <div className="flex items-center text-left w-full px-2">
                                            <h2 className="font-semibold text-lg">128GB</h2>
                                        </div>
                                        <div className="text-right w-32">
                                            <p className="text-xs" id="priceStorage_128">
                                                28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            }

                            <button id="256GB" className="storage-button bg-white border rounded-lg h-24" onClick={() => handleStorageClick("256GB")}>
                                <div className="flex flex-row px-2">
                                    <div className="flex items-center text-left w-full px-2">
                                        <h2 className="font-semibold text-lg">256GB</h2>
                                    </div>
                                    <div className="text-right w-32">
                                        <p className="text-xs" id="priceStorage_256">
                                            31.999.000đ hoặc 1.303.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <button id="512GB" className="storage-button bg-white border rounded-lg h-24" onClick={() => handleStorageClick("512GB")}>
                                <div className="flex flex-row px-2">
                                    <div className="flex items-center text-left w-full px-2">
                                        <h2 className="font-semibold text-lg">512GB</h2>
                                    </div>
                                    <div className="text-right w-32">
                                        <p className="text-xs" id="priceStorage_512">
                                            37.999.000đ hoặc 1.547.000đ/tháng trong 24 tháng
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <button id="1TB" className="storage-button bg-white border rounded-lg h-24" onClick={() => handleStorageClick("1TB")}>
                                <div className="flex flex-row px-2">
                                    <div className="flex items-center text-left w-full px-2">
                                        <h2 className="font-semibold text-lg">1TB</h2>
                                    </div>
                                    <div className="text-right w-32">
                                        <p className="text-xs" id="priceStorage_1TB">
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