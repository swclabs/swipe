import Banner from "@/components/banner"
import { Card, CardHeader, Image } from "@nextui-org/react"
import Link from "next/link"
import React from "react"

export default function Home() {
  return (
    <>
      <Banner />
      <div className=" bg-gray-50 w-full">
        <div className="w-full flex justify-center">
          <div >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/swiftcart.svg"
              alt="Next.js Logo"
              width={300}
              height={37}
            />
          </div>
        </div>
        <div className=" w-full p-6">
          <p className=" text-center text-3xl p-1 font-semibold">Vẫn còn thời gian để</p>
          <p className=" text-center text-3xl p-1 font-semibold">Tạo nên những bất ngờ thú vị</p>
          <p className=" text-center text-xl p-1 font-medium">Mua được quà “hot” dù là phút cuối</p>
          <Link href="#"><p className=" text-center p-1 text-blue-600">Mua ngay</p></Link>
        </div>

        <Card className="col-span-12 sm:col-span-4 h-[650px] mt-4" radius="none">
          <CardHeader className="absolute z-10 top-1 flex-col">
            <p className="text-5xl text-white font-semibold pt-7">iPhone 15 Pro</p>
            <h4 className="text-white font-medium text-3xl pt-3">Titan. Thật bền chắc. Thật nhẹ. Thật Pro.</h4>
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
            src="/img/iphone15pro.jpg"
          />
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[650px] mt-4" radius="none">
          <CardHeader className="absolute z-10 top-1 flex-col">
            <p className="text-5xl text-black font-semibold pt-7">iPhone 15</p>
            <h4 className="text-black font-medium text-3xl pt-3">Camera mới. Thiết kế mới. Mới lịm tim</h4>
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
            src="/img/iphone15.jpg"
          />
        </Card>
      </div>
    </>
  )
}
