'use client';
import { Image } from "@nextui-org/react";
import { WatchAccessories } from "@/faker/watch-accessory";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function AccessoryWatch() {
  return (
    <div className="2xl:w-3/5 w-[70%] m-auto">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {WatchAccessories.map((value, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <div className="bg-slate-100 w-full h-full py-4 text-black rounded-xl flex flex-col justify-between items-center" key={index}>
                <div className="w-full 2xl:h-[60%] xl:h-[60%] lg:h-[60%] md:h-[40%] h-[50%] flex justify-center items-center">
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
                <p className="2xl:text-sm text-xs text-red-500 h-3">{value.tag}</p>
                <p className="text-center md:h-20 h-12 2xl:text-lg text-sm font-semibold 2xl:px-8 px-4">{value.title}</p>
                <p className="2xl:text-sm md:text-xs text-base font-light">{value.price}</p>
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