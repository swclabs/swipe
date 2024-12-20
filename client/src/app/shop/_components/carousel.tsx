
import { ProductDetail } from "@/types/products";
import { Image } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface IDeviceProps {
  product: ProductDetail;
  color: number;
  setColor: (color: number) => void;
}

export default function ShopDeviceCarousel({ product, color, setColor }: IDeviceProps) {

  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    if (color === -1) {
      setImages(product.image)
      return
    }
    setImages(product.color[color].product)
  }, [color, product])

  //h-56 sm:h-64 xl:h-[500px] 2xl:h-[500px]
  return (
    <div className="container flex justify-center">
      <Carousel className="w-full lg:max-w-[50vw] max-w-[65vw]">
        <CarouselContent>
          {images?.map((value, index) => (
            <CarouselItem key={index}>
              <div className="w-full flex justify-center" key={index}>
                <Image
                  key={index}
                  removeWrapper
                  alt="Card background"
                  className=""
                  src={value}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="secondary" />
        <CarouselNext variant="secondary" />
      </Carousel>
    </div >
  )
}

interface IAccessoryProps {
  product: ProductDetail[];
  version: number;
  color: number;
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
}

export function ShopAccessoryCarousel({ product, version, color, setVersion, setColor }: IAccessoryProps) {

  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    if (product.length === 0) return
    if (version === -1 || color === -1) {
      setImages(product[0].image)
      return
    }
    const image = color < product[version].color.length ? product[version].color[color].product : product[0].image
    setImages(image)
  }, [color, version, product])

  //h-56 sm:h-64 xl:h-[500px] 2xl:h-[500px]
  return (
    <div className="container flex justify-center">
      <Carousel className="w-4/5 md:w-full">
        <CarouselContent>
          {images.map((value, index) => (
            <CarouselItem key={index}>
              <div className=" h-full w-full " key={index}>
                <Image
                  key={index}
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={value}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="secondary" />
        <CarouselNext variant="secondary" />
      </Carousel>
    </div >
  )
}