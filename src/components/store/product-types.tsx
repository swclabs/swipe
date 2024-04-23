import { Image } from "@nextui-org/react";
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export function ProductCarouselType() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}>
            <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem className="basis-1/6">
                        <div className=" flex">
                            <a className=" w-[100px] mr-[10px]" href="/mac">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/mac.png"
                                    alt="mac"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">Mac</p>
                            </a>
                        </div>
                    </CarouselItem>
                    <CarouselItem className=" basis-1/6">
                        <div className=" flex">
                            <a className=" w-[100px] mr-[10px]" href="/iphone">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/iphone.png"
                                    alt="iphone"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">iPhone</p>
                            </a>
                        </div>
                    </CarouselItem>
                    <CarouselItem className=" basis-1/6">
                        <div className=" flex">
                            <a className=" w-[100px] mr-[10px]" href="/ipad">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/ipad.png"
                                    alt="mac"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">iPad</p>
                            </a>
                        </div>
                    </CarouselItem>
                    <CarouselItem className=" basis-1/6">
                        <div className=" flex">
                            <a className=" w-[100px] mr-[10px]" href="/watch">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/watch.png"
                                    alt="watch"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">Apple Watch</p>
                            </a>
                        </div>
                    </CarouselItem>
                    <CarouselItem className=" basis-1/6">
                        <div className=" flex">
                            <a className=" w-[100px] mr-[10px]" href="/airpod">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/airpods.png"
                                    alt="airpods"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">AirPods</p>
                            </a>
                        </div>
                    </CarouselItem>
                    <CarouselItem className=" basis-1/6">
                        <div className=" flex">
                            <div className=" w-[100px] mr-[10px]">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/phukien.png"
                                    alt="phukien"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">Phụ kiện</p>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </motion.div>
    )
}


export default function ProductTypes() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
        >
            <div className="flex justify-center">
                <div className=" flex w-full sm:w-4/5 sm:p-12 sm:justify-between overflow-auto no-scrollbar">
                    <div className=" flex">
                        <a className=" w-[100px] mr-[10px]" href="/mac">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/mac.png"
                                alt="mac"
                                width={100}
                                height={100}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">Mac</p>
                        </a>
                    </div>
                    <div className=" flex">
                        <a className=" w-[100px] mr-[10px]" href="/iphone">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/iphone.png"
                                alt="iphone"
                                width={100}
                                height={100}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">iPhone</p>
                        </a>
                    </div>
                    <div className=" flex">
                        <a className=" w-[100px] mr-[10px]" href="/ipad">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/ipad.png"
                                alt="mac"
                                width={100}
                                height={100}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">iPad</p>
                        </a>
                    </div>
                    <div className=" flex">
                        <a className=" w-[100px] mr-[10px]" href="/watch">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/watch.png"
                                alt="watch"
                                width={100}
                                height={100}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">Apple Watch</p>
                        </a>
                    </div>
                    <div className=" flex">
                        <a className=" w-[100px] mr-[10px]" href="/airpod">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/airpods.png"
                                alt="airpods"
                                width={100}
                                height={100}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">AirPods</p>
                        </a>
                    </div>
                    <div className=" flex">
                        <div className=" w-[100px] mr-[10px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/phukien.png"
                                alt="phukien"
                                width={100}
                                height={100}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">Phụ kiện</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}