import { motion } from "framer-motion";
import React, { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from 'embla-carousel-auto-scroll'

export default function Banner() {
    const plugin = React.useRef(
        AutoScroll({ playOnInit: true })
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
        >
            <Carousel
                opts={{ loop: true }}
                plugins={[
                    plugin.current
                ]}
                className="w-full"
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
