import { motion } from "framer-motion";
import React, { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Banner() {
    return (
        <div className={`relative transition duration-1000 ease-in-out h-[70px]`}>
            <div className="flex justify-center h-full">
                <p className="text-xs pl-6 pr-6 flex items-center">
                    Nhận 4.500.000 - 25.200.000đ dưới hình thức điểm tín dụng để mua iPhone 15 hoặc iPhone 15 Pro khi bạn trao đổi iPhone 11 trở lên.
                </p>
            </div>
        </div>
    )
}

export function BannerPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
        >
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="p-1">
                            <div className={`relative transition duration-1000 ease-in-out h-[70px]`}>
                                <div className="flex justify-center h-full">
                                    <p className="text-xs pl-6 pr-6 flex items-center">
                                        Nhận 4.500.000 - 25.200.000đ dưới hình thức điểm tín dụng để mua iPhone 15 hoặc iPhone 15 Pro khi bạn trao đổi iPhone 11 trở lên.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <div className={`relative transition duration-1000 ease-in-out h-[70px]`}>
                                <div className="flex justify-center h-full">
                                    <p className="text-xs pl-6 pr-6 flex items-center">
                                        Nhận 4.500.000 - 25.200.000đ dưới hình thức điểm tín dụng để mua iPhone 15 hoặc iPhone 15 Pro khi bạn trao đổi iPhone 11 trở lên.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </motion.div>
    )
}
