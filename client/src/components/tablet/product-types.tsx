import { Image } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProductIpadTypes() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="lg:basis-1/6 sm:basis-1 md:basis-1/3">
          <a className="flex flex-col items-center justify-center text-center" href="">
            <div className='flex justify-center h-12 w-12'>
              <Image
                src="/img/ipad/ipadpro_light__large.svg"
                alt="iPad Pro"
                className='object-contain h-[100%]'
                radius='none'
              />
            </div>
            <p className=' text-black'>
              Ipad Pro
            </p>
          </a>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/6 sm:basis-1 md:basis-1/3">
          <a className="flex flex-col items-center justify-center text-center" href="">
            <div className='flex justify-center h-12 w-12'>
              <Image
                src="/img/ipad/ipadpro_light__large.svg"
                alt="iPad Air"
                className='object-contain h-[100%]'
                radius='none'
              />
            </div>
            <p className='text-black'>
              iPad Air
            </p>
          </a>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/6 sm:basis-1 md:basis-1/3">
          <a className="flex flex-col items-center justify-center text-center" href="">
            <div className='flex justify-center h-12 w-12'>
              <Image
                src="/img/ipad/pa_ipadair_gen5_light_large.svg"
                alt="iPad"
                className='object-contain h-[100%]'
                radius='none'
              />
            </div>
            <p className='text-black'>
              iPad
            </p>
          </a>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/6 sm:basis-1 md:basis-1/3">
          <a className="flex flex-col items-center justify-center text-center" href="">
            <div className='flex justify-center h-12 w-12'>
              <Image
                src="/img/ipad/ipadmini_light_large.svg"
                alt="iPad mini"
                className='object-contain h-[100%]'
                radius='none'
              />
            </div>
            <p className='text-black'>
              iPad mini
            </p>
          </a>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/6 sm:basis-1 md:basis-1/3">
          <a className="flex flex-col items-center justify-center text-center" href="">
            <div className='flex justify-center h-12 w-12'>
              <Image
                src="/img/ipad/apple_pencil_light_large.svg"
                alt="Apple Pencil"
                className='object-contain h-[100%]'
                radius='none'
              />
            </div>
            <p className='text-black'>
              Apple Pencil
            </p>
          </a>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/6 sm:basis-1 md:basis-1/3">
          <a className="flex flex-col items-center justify-center text-center" href="">
            <div className='flex justify-center h-12 w-12'>
              <Image
                src="/img/ipad/keyboard_light_large.svg"
                alt="Keyboard"
                className='object-contain h-[100%]'
                radius='none'
              />
            </div>
            <p className='text-black'>
              Bàn Phím
            </p>
          </a>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/6 sm:basis-1 md:basis-1/3">
          <a className="flex flex-col items-center justify-center text-center" href="">
            <div className='flex justify-center h-12 w-12'>
              <Image
                src="/img/ipad/pa_case_ipad_gen10_light__large.svg"
                alt="Accessories"
                className='object-contain h-[100%]'
                radius='none'
              />
            </div>
            <p className='text-black'>
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