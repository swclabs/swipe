'use client';
import { Card, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import productNews from "@/faker/product-news";

export default function Product() {
    return (
        <div className="w-full pb-[10px] hover:pb-0 scrollbar hover:overflow-x-auto overflow-hidden">
            <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">
                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
                {productNews.map((value, index) => (
                    <div className="flex snap-center" key={index}>
                        <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <div className={value.text_color}>
                                    <p className="text-tiny uppercase font-bold">
                                        {value.title}
                                    </p>
                                    <h4 className="font-semibold text-xl pt-2 pb-2">{value.sub_title}</h4>
                                    <h4 className="font-normal text-sm text-left">{value.desc}</h4>
                                </div>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src={value.img}
                            />
                        </Card>
                    </div>
                ))}
                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
            </div>
        </div>
    )
}