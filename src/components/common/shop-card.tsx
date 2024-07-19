import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useRef } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ProductShopCard } from "@/types/products"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function ShopCard({ data }: { data: ProductShopCard[] }) {
    return (
        <div className="flex justify-center items-center w-[100%]">
            <Carousel className="w-[80%]">
                <CarouselContent className="py-8 -ml-1">
                    {data.map((value, index) => (
                        <CarouselItem className="mx-4 basis-1/4" key={index} >
                            <Card className="flex justify-center items-center relative h-[50vh] w-[20vw]">
                                <CardHeader className="flex px-8 pt-8 pb-6 absolute z-10 top-1 flex-col !items-start">
                                    <p className="text-2xl font-semibold">
                                        {value.title}
                                    </p>
                                    <p>
                                        {value.subtitle}
                                    </p>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-[40%] h-[40%] 2xl:w-[50%] 2xl:h-[50%] object-contain absolute"
                                    src={value.img}
                                />
                                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between px-8 pb-6">
                                    <div>
                                        <p className="text-sm w-[90%]">
                                            {value.price}
                                        </p>
                                    </div>
                                    <Button className="text-tiny" color="primary" radius="full" size="sm">
                                        Buy
                                    </Button>
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


// export default function ShopCard({ data }: { data: ProductShopCard[] }) {
//     const ref = useRef<HTMLDivElement>(null);
//     const scroll = (scrollOffset: number) => {
//         if (ref.current) {
//             ref.current.scrollLeft += scrollOffset
//         }
//     };
//     return (
//         <div className="w-full pb-[10px] flex justify-center items-center">
//             <div
//                 className=" relative flex items-center overflow-scroll scroll-smooth w-[calc(80%+64px)] gap-x-4 p-8"
//                 style={{ scrollbarWidth: "none" }}
//                 ref={ref}
//             >
//                 {data.map((value, index) => (
//                     <div className="flex snap-center" key={index}>
//                         <Card className="flex justify-center items-center relative h-[500px] sm:w-[400px] w-[300px]">
//                             <CardHeader className="flex px-8 pt-8 pb-6 absolute z-10 top-1 flex-col !items-start">
//                                 <p className="text-2xl font-semibold">
//                                     {value.title}
//                                 </p>
//                                 <p>
//                                     {value.subtitle}
//                                 </p>
//                             </CardHeader>
//                             <Image
//                                 removeWrapper
//                                 alt="Card background"
//                                 className="z-0 w-[50%] h-[50%] object-contain absolute"
//                                 src={value.img}
//                             />
//                             <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between px-8 pb-6">
//                                 <div>
//                                     <p className="text-sm w-[90%]">
//                                         {value.price}
//                                     </p>
//                                 </div>
//                                 <Button className="text-tiny" color="primary" radius="full" size="sm">
//                                     Buy
//                                 </Button>
//                             </CardFooter>
//                         </Card>
//                     </div>
//                 ))}
//             </div>

//             <Button radius="full" isIconOnly className="absolute left-24 h-12 w-12" onClick={() => scroll(-400)}>
//                 <FaAngleLeft className="h-4 w-4" />
//             </Button>
//             <Button radius="full" isIconOnly className="absolute right-24 h-12 w-12" onClick={() => scroll(400)}>
//                 <FaAngleRight className="h-4 w-4" />
//             </Button>
//         </div>
//     )
// }