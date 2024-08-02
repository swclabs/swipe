import { Image } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function ProductWatchTypes() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                removeWrapper
                                src="/img/watch/watch_nav_series_8_light__f0gx30xkqhui_large.svg"
                                alt="Airpods"
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            Apple Watch <br />
                            Series 9
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                src="/img/watch/watch_nav_ultra_light__dnosu8kc2tme_large.svg"
                                alt="Airpod 3th generation"
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            Apple Watch<br />
                            Ultra 2
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                src="/img/watch/watch_nav_se_light__ch5dbdx2ybo2_large.svg"
                                alt="Airpod Pro 2th generation"
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            Apple Watch<br />
                            SE
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                src="/img/watch/watch_nav_accessories__glsax9gul7ue_large.svg"
                                alt="Airpod Max"
                                className='object-contain w-[42px] h-[60px]'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            Phụ Kiện
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                removeWrapper
                                src="/img/watch/watch_nav_shop_watch_light__f4fr5gzdhjyy_large.svg"
                                alt="Airpods"
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            Mua Watch
                        </p>
                    </a>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}