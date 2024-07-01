import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AccessoryShopCard } from "@/types/products"

export default function AccessoryCard({ data }: { data: AccessoryShopCard[] }) {
    const ref = useRef<HTMLDivElement>(null);
    const scroll = (scrollOffset: number) => {
        if (ref.current) {
            ref.current.scrollLeft += scrollOffset
        }
    };
    return (
        <div className="w-full pb-[10px] flex justify-center items-center">
            <div
                className=" relative flex items-center overflow-scroll scroll-smooth w-[calc(80%+64px)] gap-x-4 p-8"
                style={{ scrollbarWidth: "none" }}
                ref={ref}
            >
                {data.map((value, index) => (
                    <div className="flex snap-center" key={index}>
                        <Card className="flex justify-center items-center relative h-[500px] sm:w-[300px] w-[200px]">
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-[230px] h-[230px] object-cover my-8"
                                src={value.img}
                            />
                            <CardBody>
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
                            </CardBody>
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
                    </div>
                ))}
            </div>

            <Button radius="full" isIconOnly className="absolute left-24 h-12 w-12" onClick={() => scroll(-400)}>
                <FaAngleLeft className="h-4 w-4" />
            </Button>
            <Button radius="full" isIconOnly className="absolute right-24 h-12 w-12" onClick={() => scroll(400)}>
                <FaAngleRight className="h-4 w-4" />
            </Button>
        </div>
    )
}