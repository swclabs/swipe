import { Button } from "@nextui-org/react";
import { ProductShopCard } from "@/types/products"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ShopComputer({ data, href }: { data: ProductShopCard[]; href: string }) {
  return (
    <div className="flex justify-center items-center">
      <Carousel className="w-full">
        <CarouselContent className="py-8">
          {data.map((value, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index} >
              <Card className=" flex flex-col justify-center items-center relative border-none bg-white min-h-[500px]">
                <CardHeader className=" flex-1">
                  <p className="text-2xl font-semibold">
                    {value.name}
                  </p>
                  <p>
                    {value.desc}
                  </p>
                </CardHeader>
                <CardContent className=" flex-1">
                  <div className="flex justify-center flex-1">
                    <Image
                      alt="Card background"
                      className="z-0 my-8"
                      src={value.image}
                      width={200}
                      height={200}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex-1 w-full">
                  <div className=" flex justify-between w-full">
                    <p className="text-sm w-2/3">
                      {value.price}
                    </p>
                    <Link href={href + "/" + value.name.toLowerCase().replaceAll(" ", "-")}>
                      <Button className="text-tiny" color="primary" radius="full" size="sm">
                        Buy
                      </Button>
                    </Link>
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