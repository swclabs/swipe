'use client'

import Banner from "@/components/common/banner"
import ShortCut from "@/components/common/shortcut"
import { Card, CardHeader} from "@nextui-org/react"
import Link from "next/link"
import React from "react"

import { motion } from "framer-motion"
import { EmblaOptionsType } from 'embla-carousel'
import homeBanner from "@/faker/home-banner"
import LandingPageCarousel, { LandingPageBannerCarousel } from "@/components/landing-page/carousel"
import Image from "next/image"

export default function Home() {

  return (
    <div>
      <Banner />
      <div className=" bg-gray-50 w-full">
        <div className=" flex justify-center items-center min-h-[70vh]">
          <div className="flex-col">
            <div className="w-full flex justify-center max-h-max">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 1.5,
                }}>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-none"
                  src="/logo.png"
                  alt="swipe Logo"
                  width={300}
                  height={37}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className=" w-full p-6">
                <p className=" text-center text-3xl p-1 font-semibold">Vẫn còn thời gian để</p>
                <p className=" text-center text-3xl p-1 font-semibold">Tạo nên những bất ngờ thú vị</p>
                <p className=" text-center text-xl p-1 font-medium">Mua được quà “hot” dù là phút cuối</p>
                <Link href="/store"><p className=" text-center p-1 text-blue-600">Mua ngay</p></Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className=" w-full flex flex-col justify-center gap-4">
          <LandingPageCarousel />
          <LandingPageBannerCarousel />
        </div>

        {/* {homeBanner.map((val, index) => (
          <Card className="col-span-12 sm:col-span-4 h-[650px] mt-4" radius="none" key={index}>
            <CardHeader className="absolute z-10 top-1 flex-col">
              <div className="text-5xl font-semibold pt-7">
                <p className={val.text}>
                  {val.name}
                </p>
              </div>
              <h4 className="font-medium text-3xl pt-3">
                <p className={val.text}>
                  {val.subtitle}
                </p>
              </h4>
              <div className="flex">
                <Link href="#"><p className=" text-center text-lg p-1 text-blue-500">Tìm hiểu thêm</p></Link>
                <Link href="#"><p className=" text-center text-lg p-1 text-blue-500">Mua ngay</p></Link>
              </div>
            </CardHeader>
            <Image
              radius="none"
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={val.img}
            />
          </Card>
        ))} */}
      </div >
      <ShortCut />
    </div >
  )
}
