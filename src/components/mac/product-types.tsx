import { Image } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function ProductMacTypes() {
    return (
        <Carousel className="w-full ">
            <CarouselContent>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center" href="#laptop">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/mac/macbookair_light_large.svg"
                                alt="MacBook Air"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            MacBook Air
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center" href="#laptop">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/mac/macbook_pro_light_large.svg"
                                alt="MacBook Pro"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            MacBook Pro
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center" href="#desktop">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/mac/imac_light_large.svg"
                                alt="iMac"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            iMac
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center" href="#desktop">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/mac/mac_mini_light_large.svg"
                                alt="Mac Mini"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            Mac mini
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center" href="#desktop">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/mac/mac_studio_light_large.svg"
                                alt="Mac Studio"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            Mac Studio
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center" href="#desktop">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/mac/mac_pro_light_large.svg"
                                alt="Mac Pro"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            Mac Pro
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center" href="#display">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/mac/displays_light_large.svg"
                                alt="Displays"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            Màn hình
                        </p>
                    </a>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}