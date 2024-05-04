import { Image } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function ProductIphoneTypes() {
    return (
        <Carousel className="w-full ">
            <CarouselContent>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/iphone/iphone_15_pro_light_large.svg"
                                alt="iPhone 15 Pro"
                                className='object-cover'
                                radius='none'
                            />
                        </div>
                        <p>iPhone 15 Pro</p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/iphone/iphone_15_light_large.svg"
                                alt="iPhone 15"
                                className='object-cover'
                                radius='none'
                            />
                        </div>
                        <p>iPhone 15</p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/iphone/iphone_15_light_large.svg"
                                alt="iPhone 14"
                                className='object-cover'
                                radius='none'
                            />
                        </div>
                        <p>iPhone 14</p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/iphone/iphone_13_light_large.svg"
                                alt="iPhone 13"
                                className='object-cover'
                                radius='none'
                            />
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center text-center gap-y-2" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/iphone/iphone_se_light_large.svg"
                                alt="iPhone SE"
                                className='object-contain w-12 h-14'
                                radius='none'
                            />
                        </div>
                        <p>iPhone SE</p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center" href="/airpod">
                        <div className='flex justify-center h-14 w-14'>
                            <Image
                                src="/img/iphone/airpods_light_large.svg"
                                alt="Airpods"
                                className='object-contain'
                                radius='none'
                            />
                        </div>
                        <p>Airpods</p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center" href="/accessories">
                        <div className='flex justify-center h-14 w-14'>
                            <Image
                                src="/img/iphone/airtag_light_large.svg"
                                alt="Airtag"
                                className='object-contain w-12 h-14'
                                radius='none'
                            />
                        </div>
                        <p>AirTag</p>
                    </a>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}