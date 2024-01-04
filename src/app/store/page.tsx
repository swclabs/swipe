import Banner from "@/components/banner"
import Image from "next/image"
import React from "react"

export default function Store() {
    return (
        <>
            <Banner />
            <div className=" w-full bg-gray-50">
                <div className="flex justify-center">
                    <div className=" w-4/5 p-12">
                        <span className=" text-5xl font-medium">Cửa hàng.</span>
                        <span className=" text-5xl font-medium text-gray-500">Cách tốt nhất để</span>
                        <p className=" text-5xl font-medium text-gray-500">Mua sản phẩm mà bạn thích</p>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className=" w-4/5 p-12 flex justify-between">
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/mac.png"
                                alt="mac"
                                width={100}
                                height={100}
                                priority
                            />
                            <p className=" text-sm font-semibold text-center pt-4">Mac</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/iphone.png"
                                alt="iphone"
                                width={100}
                                height={100}
                                priority
                            />
                            <p className=" text-sm font-semibold text-center pt-4">iPhone</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/ipad.png"
                                alt="mac"
                                width={100}
                                height={100}
                                priority
                            />
                            <p className=" text-sm font-semibold text-center pt-4">iPad</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/watch.png"
                                alt="watch"
                                width={100}
                                height={50}
                                priority
                            />
                            <p className=" text-sm font-semibold text-center pt-4">Apple Watch</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/airpods.png"
                                alt="airpods"
                                width={100}
                                height={50}
                                priority
                            />
                            <p className=" text-sm font-semibold text-center pt-4">AirPods</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/phukien.png"
                                alt="phukien"
                                width={100}
                                height={50}
                                priority
                            />
                            <p className=" text-sm font-semibold text-center pt-4">Phụ kiện</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-4/5 p-12">
                        <h1 className=" text-2xl font-semibold">
                            <span>Thế hệ mới nhất.</span>
                            <span className=" text-gray-500"> Xem ngay có gì mới</span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}