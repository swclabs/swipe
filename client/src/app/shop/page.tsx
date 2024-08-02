'use client'
import './style.css'
import Banner from "@/components/common/banner"
import React from "react"
import Product from "@/components/shop/product";
import Accessory from "@/components/shop/accessory";
import Service from "@/components/shop/service";
import ProductNavbar from "@/components/shop/navbar";
import { motion } from "framer-motion"

export default function Store() {
    return (
        <>
            <Banner />
            <div className=" w-full bg-gray-50">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                >
                    <div className="flex justify-center">
                        <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                            <span className=" text-xl sm:text-5xl font-medium">Cửa hàng.</span>
                            <span className=" text-xl sm:text-5xl font-medium text-gray-500">Cách tốt nhất để</span>
                            <p className=" text-xl sm:text-5xl font-medium text-gray-500">Mua sản phẩm mà bạn thích</p>
                        </div>
                    </div>
                </motion.div>

                <ProductNavbar />

                <div className="flex justify-center">
                    <div className="sm:w-4/5 sm:pt-12 pb-10 sm:pb-12 sm:pl-12 sm:pr-12 pt-10">
                        <h1 className=" sm:text-2xl font-semibold">
                            <span>Thế hệ mới nhất.</span>
                            <span className=" text-gray-500"> Xem ngay có gì mới</span>
                        </h1>
                    </div>
                </div>

                <Product />

                <div className="flex justify-center">
                    <div className="w-4/5 sm:pt-12 sm:pl-12 sm:pr-12 pt-10">
                        <h1 className=" sm:text-2xl font-semibold">
                            <span>Swipe.</span>
                            <span className=" text-gray-500"> Tạo nên nhiều sự khác biệt</span>
                        </h1>
                    </div>
                </div>

                <Service />

                <div className=" pt-10 pb-10 sm:pb-12 flex justify-center">
                    <div className="sm:w-4/5 sm:pl-12 sm:pr-12">
                        <h1 className=" sm:text-2xl font-semibold">
                            <span>Phụ kiện.</span>
                            <span className=" text-gray-500"> Tạo nét riêng</span>
                        </h1>
                    </div>
                </div>

                <Accessory />
                {/* <ShortCut /> */}
            </div>
        </>
    )
}