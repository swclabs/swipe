import { Image } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProductIpadTypes() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/ipadpro_dark_large.svg"
                                alt="iPad Pro"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p className='text-white'>
                            Ipad Pro
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/ipadair_dark_large.svg"
                                alt="iPad Air"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p className='text-white'>
                            iPad Air
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/ipad_dark_large.svg"
                                alt="iPad"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p className='text-white'>
                            iPad
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/ipadmini_dark_large.svg"
                                alt="iPad mini"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p className='text-white'>
                            iPad mini
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/apple_pencil_dark_large.svg"
                                alt="Apple Pencil"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p className='text-white'>
                            Apple Pencil
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/keyboard_dark_large.svg"
                                alt="Keyboard"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p className='text-white'>
                            Bàn Phím
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/ipad_acc_dark_large.svg"
                                alt="Accessories"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p className='text-white'>
                            Phụ Kiện
                        </p>
                    </a>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="ghost" />
            <CarouselNext variant="ghost" />
        </Carousel>
    )
}