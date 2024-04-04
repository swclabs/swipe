'use client';
import { Image } from "@nextui-org/react";
import './style.css'
import airpod from "@/faker/airpod";

export default function Product() {
    return (
        <div className="w-full pb-[10px] hover:pb-0 scrollbar hover:overflow-x-auto overflow-hidden">
            <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">

                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>

                <div className="grid grid-cols-4 gap-6">
                    {airpod.map((value, index) => (
                        <div className="container mx-auto h-full w-full border bg-white" key={index}>
                            <div className="flex flex-col justify-center items-center text-center gap-y-4">

                                <div className="h-60 pt-4">
                                    <div className="h-full content-end">
                                        <a href="#">
                                            <Image
                                                alt="Card background"
                                                className="z-0 w-full h-full object-cover"
                                                src={value.img}
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className="h-full pt-4">
                                    <div className="h-20">
                                        <h1 className="font-semibold text-2xl pt-4">{value.title}</h1>
                                        <p>{value.subtitle}</p>
                                        <p>{value.subtitle2}</p>
                                    </div>

                                    <div className="h-full pt-4">
                                        <div className="h-full">
                                            <h4 className="font-semibold text-lg py-2">{value.price}</h4>
                                        </div>
                                    </div>

                                    <div className="h-full pb-4">
                                        <a className=" text-blue-600" href="/shop/goto/buy_iphone/iphone_15_pro">
                                            <span className="buy"> Mua </span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>

                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className=" pt-12 pb-12">
                    <a className="text-center text-blue-600 text-xl font-semibold" href="#">
                        <span className="buy"> So sánh tất cả các phiên bản Airpods </span>
                    </a>
                </div>
            </div>
        </div>
    )
}