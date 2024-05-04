import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import { FiTruck } from "react-icons/fi";

interface product {
    name: string;
    price: string;
    image: string;
}

interface products {
    product: product[];
}

export default function ProductCard({ product }: products) {
    return (
        <div className="w-full pb-[10px] scrollbar hover:overflow-x-auto overflow-hidden">
            <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">

                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {product.map((value, index) => (
                        <div className="container mx-auto h-[700px] w-full bg-gray-100 rounded-2xl relative" key={index}>
                            <div className=" p-5 flex flex-col justify-center items-center text-center gap-y-4">
                                <div className="h-full pt-4">
                                    <div className="content-end">
                                        <a href="#">
                                            <Image
                                                alt="Card background"
                                                className="z-0 w-full max-h-[400px] object-cover"
                                                src={value.image}
                                            />
                                        </a>
                                    </div>

                                </div>

                                {/* <div className=" w-full">
                                    <div className=" flex">
                                        <Chip radius="sm" className="text-xs m-1">{value.specifications.screen}</Chip>
                                        <Chip radius="sm" className="text-xs m-1">{value.specifications.display}</Chip>
                                    </div>
                                    <div className=" flex">
                                        {value.specifications.SSD.map((item, idx) => (
                                            <Chip radius="sm" className="text-xs m-1" key={idx}>{item}</Chip>
                                        ))}
                                    </div>
                                </div> */}

                                <div className="h-full">
                                    <div className="h-full">
                                        <p className="text-left font-semibold text-xl pb-5"> {value.name}</p>
                                    </div>
                                    {/* <div className="h-full">
                                        <p className="text-left text-sm"> {value.desc}</p>
                                    </div> */}
                                    <div className="h-full">
                                        <h4 className="font-semibold text-lg py-2 text-left">{value.price}</h4>
                                    </div>
                                </div>

                                <div className="w-full p-5 absolute bottom-0">
                                    <Button color="primary" className=" w-full">Mua</Button>
                                    <div className=" flex items-center pt-4">
                                        <FiTruck />
                                        <p className=" pl-2 text-left text-xs">Đặt hàng hôm nay, giao hàng đến Hồ Chí Minh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
            </div>
        </div>
    )
}