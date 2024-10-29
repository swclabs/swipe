import * as React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { HomePageBannerCarouselData, HomePageCarouselData } from "@/faker/landing"
import AutoScroll from 'embla-carousel-auto-scroll'
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import Image from "next/image"


const HomePageCarousel = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
    }),
  )
  return (
    <>
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[
          plugin.current
        ]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play(false)}
      >
        <CarouselContent>
          {HomePageCarouselData.map((value, index) => (
            <CarouselItem className="md:basis-1/2" key={index}>
              <motion.div
                className="box"
                whileHover={{ scale: 1.03 }}
              >
                <div className="p-1">
                  <Card className=" relative border-none">
                    <CardHeader className={`absolute z-10 top-1 !items-start flex-col ${value.text}`}>
                      <p className="text-5xl font-semibold">{value.title}</p>
                      <h4 className="font-medium text-large">{value.subtitle}</h4>
                    </CardHeader>
                    <CardContent className="flex aspect-video items-center justify-center relative">
                      <Image
                        alt=""
                        src={value.img}
                        fill
                        className="object-cover rounded"
                      />
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}

export const HomePageBannerCarousel = () => {
  const plugin = React.useRef(
    AutoScroll({ playOnInit: true })
  )
  return (
    <>
      <div className=" flex text-xl font-medium">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        Classics Spotlight
      </div>
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[
          plugin.current
        ]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play(1)}
      >
        <CarouselContent>
          {HomePageBannerCarouselData.map((value, index) => (
            <CarouselItem key={index} className="md:basis-1/5">
              <motion.div
                className="box"
                whileHover={{ scale: 1.03 }}
              >
                <div className="p-1">
                  <Card className=" border-none bg-gray-100">
                    <CardContent className="flex aspect-video items-center justify-center min-h-max">
                      <div className="flex items-center justify-between">
                        <div className="items-center w-full flex justify-center">
                          <Image
                            className="w-[50px] lg:w-[70px]"
                            alt="img card"
                            height={150}
                            width={150}
                            src={value.image}
                          />
                        </div>
                        <div className="lg:text-2xl font-semibold">
                          {value.title}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}



export default HomePageCarousel
