import * as React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from "next/image"
import { motion } from "framer-motion"
import { FiShoppingCart, FiTruck } from "react-icons/fi"
import { MdOutlinePayment } from "react-icons/md";
import { HomePageBannerCarouselData, HomePageCarouselData } from "@/faker/landing"


const HomePageCarousel = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
    }),
  )
  return (
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
  )
}

export const HomePageBannerCarousel = () => {
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
      onMouseLeave={() => plugin.current.play(1)}
    >
      <CarouselContent>
        {HomePageBannerCarouselData.map((value, index) => (
          <CarouselItem key={index} className="md:basis-1/4 basis-1/2">
            <motion.div
              className="box"
              whileHover={{ scale: 1.03 }}
            >
              <div className="p-1">
                <Card>
                  <CardContent className=" flex aspect-video items-center justify-center p-6 min-h-[200px] min-w-max">
                    <div className=" p-3 w-full">
                      <div className=" text-blue-500 text-3xl pb-3 flex items-center justify-between">
                        <div className=" max-w-max">
                          <Image
                            src={value.image}
                            alt=""
                            className="min-w-[60px] min-h-max"
                            width={50}
                            height={10}
                          />
                        </div>
                        <div className=" text-xl font-semibold inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                          {value.title}
                        </div>
                      </div>
                      <div className=" flex justify-between">
                        <p className=" text-xl font-semibold">{value.decs}</p>
                        <div className=" flex gap-2">
                          <MdOutlinePayment />
                          <FiShoppingCart />
                          <FiTruck />
                        </div>
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
  )
}



export default HomePageCarousel
