import { Image } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProductAirpodTypes() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                removeWrapper
                                src="/img/airpod/airpods_2gen_light_large.svg"
                                alt="Airpods"
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            AirPods <br />
                            Thế hệ thứ 2
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                src="/img/airpod/airpods_3gen_light_large.svg"
                                alt="Airpod 3th generation"
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            AirPods<br />
                            Thế hệ thứ 3
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                src="/img/airpod/airpods_pro_light_large.svg"
                                alt="Airpod Pro 2th generation"
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            AirPods Pro<br />
                            Thế hệ thứ 2
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                src="/img/airpod/airpods_max_light_large.svg"
                                alt="Airpod Max"
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            AirPods Max
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/5 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center gap-y-2" href="">
                        <div className='h-12'>
                            <Image
                                removeWrapper
                                src="/img/airpod/apple_music_light_large.svg"
                                alt="Airpods"
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='h-12 font-normal text-sm'>
                            Airpods
                        </p>
                    </a>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="ghost" />
            <CarouselNext variant="ghost" />
        </Carousel>
    )
}