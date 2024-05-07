'use client';
import { Image } from "@nextui-org/react";
import { iPhoneAccessories } from "@/faker/iphone-accessory";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";


export default function AccessoryIphone() {
    return (
        <div className="2xl:w-3/5 w-full m-auto">
            <Carousel className="w-full">
                <CarouselContent>
                    {iPhoneAccessories.map((value, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <div className="bg-slate-100 w-full h-[50vh] text-black rounded-xl flex flex-col justify-center items-center" key={index}>
                                <div className="w-full h-[50%] flex justify-center items-center">
                                    <Image
                                        alt=""
                                        className="h-full object-contain"
                                        src={value.img}
                                        removeWrapper={true}
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
                                    <p className="2xl:text-sm text-xs text-red-500 h-[3vh]">{value.tag}</p>
                                    <p className="text-center 2xl:text-base xl:text-sm text-xs font-semibold h-[8vh]">{value.name}</p>
                                    <p className="2xl:text-sm text-xs font-light">{value.price}</p>
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