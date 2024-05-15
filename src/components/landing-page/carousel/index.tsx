import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import AutoScroll from 'embla-carousel-auto-scroll'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

const LandingPageCarousel = () => {
    const plugin = React.useRef(
        Autoplay({
            delay: 5000,
        }),
    )
    return (
        <Carousel
            className="w-full"
            plugins={[
                plugin.current
            ]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
        >
            <CarouselContent>
                {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p-1">
                            <Card className="rounded-none">
                                <CardContent className=" flex aspect-video items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export const LandingPageBannerCarousel = () => {
    const plugin = React.useRef(
        AutoScroll({ playOnInit: true })
    )
    return (
        <Carousel
            className="w-full"
            opts={{ loop: true }}
            plugins={[
                plugin.current
            ]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
        >
            <CarouselContent>
                {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/4">
                        <div className="p-1">
                            <Card className="rounded-none">
                                <CardContent className=" flex aspect-video items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}



export default LandingPageCarousel
