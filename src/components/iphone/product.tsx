'use client';
import { Image } from "@nextui-org/react";
import './style.css'
import iphone from "@/faker/iphone";

export default function Product() {
    return (
        <div className="w-full pb-[10px] hover:pb-0 scrollbar hover:overflow-x-auto overflow-hidden">
            <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">

                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {iphone.map((value) => (

                        <div className="container mx-auto h-full w-full border bg-white">
                            <div className="flex flex-col justify-center items-center text-center gap-y-4">
                                <div className="h-full pt-4">
                                    <div className="h-full content-end">
                                        <a href="#">
                                            <Image
                                                alt="Card background"
                                                className="z-0 object-cover"
                                                src={value.img}
                                            />
                                        </a>
                                    </div>

                                    <div className="h-full py-4">
                                        <h1 className="font-semibold text-2xl pt-4">{value.title}</h1>
                                    </div>
                                </div>

                                <div className="h-full">
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