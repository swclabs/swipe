'use client'

import Banner from "@/components/layout/banner"
import ShortCut from "@/components/layout/shortcut"
import Link from "next/link"
import React from "react"
import HomePageCarousel, { HomePageBannerCarousel } from "@/components/carousel"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <Banner />
      <div className="w-full">
        <div className=" flex justify-center items-center min-h-[70vh]">
          <div className="flex-col">
            <div className="w-full flex justify-center max-h-max">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-none"
                src="/logo.png"
                alt="swipe Logo"
                width={300}
                height={37}
              />
            </div>
            <div className=" w-full p-6">
              <div className=" text-center text-3xl p-1 font-semibold">Vẫn còn thời gian để</div>
              <div className=" text-center text-3xl p-1 font-semibold">Tạo nên những bất ngờ thú vị</div>
              <div className=" text-center text-xl p-1 font-medium">Mua được quà “hot” dù là phút cuối</div>
              <Link href="/shop"><p className=" text-center p-1 text-blue-600">Mua ngay</p></Link>
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-col justify-center gap-4">
          <HomePageCarousel />
          <HomePageBannerCarousel />
        </div>
      </div >
      {/* <ShortCut /> */}
    </motion.div>
  )
}
