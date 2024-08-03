import { Button, Image } from "@nextui-org/react";
import { ProductShopCard } from "@/types/products"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function ShopCard({ data }: { data: ProductShopCard[] }) {
  return (
    <div className="flex justify-center items-center">
      <Carousel className="w-full">
        <CarouselContent className="py-8">
          {data.map((value, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index} >
              <Card className="justify-center items-center relative border-none bg-white min-h-[550px] max-h-[525px]">
                <CardHeader>
                  <p className="text-2xl font-semibold">
                    {value.title}
                  </p>
                  <p>
                    {value.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 my-8"
                      src={value.img}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className=" flex justify-between w-full">
                    <p className="text-sm w-2/3">
                      {value.price}
                    </p>
                    <Button className="text-tiny" color="primary" radius="full" size="sm">
                      Buy
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="secondary" />
        <CarouselNext variant="secondary" />
      </Carousel>
    </div>
  )
}