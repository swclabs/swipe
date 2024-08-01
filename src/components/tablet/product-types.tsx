import { Image } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function ProductIpadTypes() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/ipadpro_light__bbws9fokxn3m_large.svg"
                                alt="iPad Pro"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p> Ipad Pro </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/pa_ipadair13_gen6_ipadair11_gen6_light__des6pp5gjg2u_large.svg"
                                alt="iPad Air"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>iPad Air</p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/pa_ipadair_gen5_light__cboe3o98m36u_large.svg"
                                alt="iPad"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p> iPad </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/ipadmini_light__chl9hj51b9qq_large.svg"
                                alt="iPad mini"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p> iPad Mini </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/apple_pencil_light__kv36e49avuq2_large.svg"
                                alt="Apple Pencil"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            Apple Pencil
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/keyboard_light__f5t6yntcyq2q_large.svg"
                                alt="Keyboard"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            Bàn Phím
                        </p>
                    </a>
                </CarouselItem>
                <CarouselItem className="lg:basis-1/6 md:basis-1">
                    <a className="flex flex-col items-center justify-center text-center" href="">
                        <div className='flex justify-center h-12 w-12'>
                            <Image
                                src="/img/ipad/pa_case_ipad_gen10_light__b2tng4s4n9n6_large.svg"
                                alt="Accessories"
                                className='object-contain h-[100%]'
                                radius='none'
                            />
                        </div>
                        <p>
                            Phụ Kiện
                        </p>
                    </a>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}