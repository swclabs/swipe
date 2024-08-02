
import { ProductDetail } from "@/types/products";
import { Image } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

interface ICarouselProps {
    product: ProductDetail[];
    version: number;
    color: number;
    setVersion: Dispatch<SetStateAction<number>>;
    setColor: Dispatch<SetStateAction<number>>;
}

export default function ShopCarousel({ product, version, color, setVersion, setColor }: ICarouselProps) {

    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        if (color !== -1 && version !== -1) {
            setImages(product[version].color[color].product)
        }
        else setImages(product[0].img)
    }, [color, version, product])
    //h-56 sm:h-64 xl:h-[500px] 2xl:h-[500px]
    return (
        <div className=" container">
            <Carousel className="w-full">
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
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div >
    )
}