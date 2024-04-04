'use client';
import { Card, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import productNews from "@/faker/product-news";
import iphone from "@/faker/iphone";

export default function Product() {
    return (
        <div className="w-full pb-[10px] hover:pb-0 scrollbar hover:overflow-x-auto overflow-hidden">
            <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">

                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
                <div className="grid grid-cols-5">
                    {iphone.map((value) => (

                        <div className="container mx-auto h-full w-full border bg-white">
                            <div className="flex flex-col justify-center items-center text-center gap-y-4">
                                <div className="h-72 gap-y-4">
                                    <a href="#">
                                        <Image
                                            removeWrapper
                                            alt="Card background"
                                            className="z-0 bject-cover"
                                            // width={172}
                                            // height={228}
                                            src={value.img}
                                        />
                                    </a>
                                    <h1 className="text-center font-semibold text-2xl pt-4">{value.title}</h1>
                                </div>

                                <div className="h-28">
                                    <p className="text-center"> {value.desc}</p>
                                    <h4 className="font-semibold text-lg py-2">{value.price}</h4>
                                </div>

                                <div className="h-full pb-4">
                                    <a className=" text-blue-600" href="/shop/goto/buy_iphone/iphone_15_pro">
                                        <span className="buy"> Mua </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
            </div>
        </div>
    )
}