'use client';
import { Image } from "@nextui-org/react";
import './style.css'
import watch from "@/faker/watch";

export default function Product() {
    return (
        <div className="flex justify-center">
            <div className=" sm:w-4/5 sm:pl-12">

                <div className="flex flex-row">
                    {watch.map((value, index) => (
                        <div className="container h-full w-[30%] bg-white" key={index}>
                            <div className="flex flex-col justify-center items-center text-center gap-y-4">

                                <div className="h-full pt-4">
                                    <div className="flex justify-center items-center h-full">
                                        <a href="#">
                                            <Image
                                                alt="Card background"
                                                className="z-0 w-full h-full object-cover"
                                                src={value.img}
                                            />
                                        </a>
                                    </div>

                                    <div className="h-full">
                                        <h1 className="font-semibold text-2xl pt-4">{value.title}</h1>
                                    </div>

                                </div>

                                <div className="h-full">
                                    <div className="h-16 pl-16 pr-16">
                                        <p className="text-center"> {value.desc}</p>
                                    </div>
                                    <div className="h-12">
                                        <h4 className="font-semibold text-lg py-2">{value.price}</h4>
                                    </div>
                                </div>

                                <div className="h-full pb-4">
                                    <a className=" text-blue-600" href="/shop/goto/buy-iphone/iphone-15-pro">
                                        <span className="buy"> Mua </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}