'use client';
import { Image } from "@nextui-org/react";
import { iPhoneAccessories } from "@/faker/iphone-accessory";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";


export default function AccessoryIphone() {
    return (
        <div className="w-1/2 m-auto">
            <Carousel className="w-full">
                <CarouselContent>
                    {iPhoneAccessories.map((value, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <div className="bg-slate-100 h-[450px] text-black rounded-xl" key={index}>
                                <div className="flex justify-center items-center content-center">
                                    <Image
                                        alt=""
                                        className=" w-[266px] h-[291px] object-cover"
                                        src={value.img}
                                    />
                                </div>
                                <div className="h-3 flex justify-center items-center content-center gap-x-2">
                                    {value.color?.map((color, index) => (
                                        <Image
                                            alt=""
                                            className=" h-3 w-3 object-cover"
                                            src={color.img}
                                            key={index}
                                        />
                                    ))}
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4 p-4">
                                    <p className="text-sm text-red-500 h-6">{value.tag}</p>
                                    <h2 className="text-center text-base font-semibold w-[267px] h-12">{value.name}</h2>
                                    <p className="text-sm font-light">{value.price}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}