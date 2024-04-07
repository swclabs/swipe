'use client';
import { Button, Chip, Image } from "@nextui-org/react";
import './style.css'
import iphone from "@/faker/iphone";
import Link from "next/link";

export default function Product() {
    return (
        <div className="w-full pb-[10px] hover:pb-0 scrollbar hover:overflow-x-auto overflow-hidden">
            <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">

                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {iphone.map((value, index) => (
                        <div className="container mx-auto h-[700px] w-full bg-gray-100 rounded-2xl relative" key={index}>
                            <div className=" p-5 flex flex-col justify-center items-center text-center gap-y-4">
                                <div className="h-full pt-4">
                                    <div className="content-end">
                                        <a href="#">
                                            <Image
                                                alt="Card background"
                                                className="z-0 w-full max-h-[400px] object-cover"
                                                src={value.img}
                                            />
                                        </a>
                                    </div>

                                </div>

                                <div className=" w-full">
                                    <div className=" flex">
                                        <Chip radius="sm" className="text-xs m-1">{value.specifications.screen}</Chip>
                                        <Chip radius="sm" className="text-xs m-1">{value.specifications.display}</Chip>
                                    </div>
                                    <div className=" flex">
                                        {value.specifications.SSD.map((item, idx) => (
                                            <Chip radius="sm" className="text-xs m-1" key={idx}>{item}</Chip>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-full">
                                    <div className="h-full">
                                        <p className="text-left"> {value.desc}</p>
                                    </div>
                                    <div className="h-full">
                                        <h4 className="font-semibold text-lg py-2 text-left">{value.price}</h4>
                                    </div>
                                </div>

                                <div className="w-full p-5 absolute bottom-0">
                                    <Link href={value.src}>
                                        <Button color="primary" className=" w-full">Mua</Button>
                                    </Link>
                                    <p className=" text-left pt-4 text-xs">Đặt hàng hôm nay, giao hàng đến Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                        // <div className="container mx-auto h-full w-full border bg-white" key={index}>
                        //     <div className="flex flex-col justify-center items-center text-center gap-y-4">
                        //         <div className="h-full pt-4">
                        //             <div className="h-full content-end">
                        //                 <a href="#">
                        //                     <Image
                        //                         alt="Card background"
                        //                         className="z-0 object-cover"
                        //                         src={value.img}
                        //                     />
                        //                 </a>
                        //             </div>

                        //             <div className="h-full py-4">
                        //                 <h1 className="font-semibold text-2xl pt-4">{value.title}</h1>
                        //             </div>
                        //         </div>

                        //         <div className="h-full">
                        //             <p className="text-center"> {value.desc}</p>
                        //             <h4 className="font-semibold text-lg py-2">{value.price}</h4>
                        //         </div>

                        //         <div className="h-full pb-4">
                        //             <a className=" text-blue-600" href="/shop/goto/buy_iphone/iphone_15_pro">
                        //                 <span className="buy"> Mua </span>
                        //             </a>
                        //         </div>
                        //     </div>
                        // </div>

                    ))}
                </div>

                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
            </div>
        </div>
    )
}