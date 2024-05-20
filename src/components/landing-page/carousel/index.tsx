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
import { IoCartOutline } from "react-icons/io5"
import { motion } from "framer-motion"

const LandingPageCarouselData = [
  {
    title: "Vison Pro",
    subtitle: "Kỷ nguyên điện toán",
    img: "/landing-page/visionpro.png"
  },
  {
    title: "Phụ kiện",
    subtitle: "Trang Trí cho điện thoại của bạn",
    img: "/landing-page/access.png",
    text: "text-black"
  },
  {
    title: "Macbook Pro M3",
    subtitle: "Laptop mạnh mẽ, trang bị vi xử lý mạnh mẽ",
    img: "/landing-page/macm3.png",
    text: "text-black"
  },
  {
    title: "iPad Pro",
    subtitle: "Mỏng không tưởng, mạnh không ngờ",
    img: "/landing-page/ipadpro.png",
    text: "text-white"
  },
  {
    title: "iPad Air",
    subtitle: "Hai kích cỡ, chip nhanh hơn, Đa zi năng",
    img: "/landing-page/ipadair.png",
    text: "text-black"
  },
  {
    title: "iPhone 15 Pro",
    subtitle: "Titan. Thật bền chắc. Thật nhẹ. Thật Pro.",
    img: "/img/iphone15pro.jpg",
    text: "text-white",
  },
  {
    title: "iPhone 15",
    subtitle: "Camera mới. Thiết kế mới. Mới lịm tim",
    img: "/img/iphone15.jpg",
    text: "text-black"
  },
]

const LandingPageCarousel = () => {
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
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {LandingPageCarouselData.map((value, index) => (
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
            <motion.div
              className="box"
              whileHover={{ scale: 1.03 }}
            >
              <div className="p-1">
                <Card>
                  <CardContent className=" flex aspect-video items-center justify-center p-6">
                    <div className=" p-3">
                      <div className=" text-blue-500 text-3xl pb-3">
                        <IoCartOutline />
                      </div>
                      <p className=" text-xl font-semibold">Trải nghiệm <span className=" text-blue-500">mua sắm</span> được <span className=" text-blue-500" >cá nhân hóa</span> bởi ứng dụng <span className=" text-blue-500">Swipe</span></p>
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



export default LandingPageCarousel
