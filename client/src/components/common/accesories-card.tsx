import { Button, Image } from "@nextui-org/react";
import { AccessoryShopCard } from "@/types/products"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function AccessoryCard({ data }: { data: AccessoryShopCard[] }) {
  return (
    <div className="flex justify-center items-center">
      <Carousel className="w-full">
        <CarouselContent className="py-8">
          {data.map((value, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index} >
              <Card className="justify-center items-center relative border-none bg-white">
                <CardHeader>
                  <div className=" flex justify-center">
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-[230px] h-[230px] object-cover my-8"
                      src={value.img}
                    />
                  </div>
                </CardHeader>
                <CardContent>
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
                </CardContent>
                <CardFooter className=" bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between px-8 pb-6">
                  <div>
                    <p className="h-4 mb-2 text-sm text-red-500">{value.tag}</p>
                    <p className="h-16 text-base font-semibold">{value.title}</p>
                    <p className="h-4 text-sm w-[90%] mt-4">
                      {value.price}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}