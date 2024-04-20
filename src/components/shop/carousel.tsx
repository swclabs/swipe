
import { IProductDetail } from "@/interface/products";
import { Image } from "@nextui-org/react";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const carouselTheme: CustomFlowbiteTheme["carousel"] = {
    control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-200 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        icon: "h-5 w-5 text-gray-800 dark:text-gray-800 sm:h-6 sm:w-6"
    },
};


interface ICarouselProps {
    product: IProductDetail[];
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

    return (
        <div className="h-56 sm:h-64 xl:h-[500px] 2xl:h-[500px]">
            <Carousel slide={false} theme={carouselTheme}>
                {images.map((value, index) => (
                    <div className=" h-full w-full " key={index}>
                        <Image
                            key={index}
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={value}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}