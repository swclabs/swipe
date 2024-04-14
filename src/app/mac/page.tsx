"use client"
import React from 'react';
import { motion } from "framer-motion";
import Banner from "@/components/banner"
import TabsComponent from '@/components/tab';
import News from '@/components/mac/news';
import Accessories from '@/components/mac/accessories';
import ProductBar from '@/components/mac/product-bar';

function ProductPage() {
    return (
        <>
            {/* 
            |
            |--- news (tin tức sản phẩm)
            |
            |--- sản phẩm cụ thể
            |
            |--- phụ kiện cho sản phẩm
            |
            */}

            <ProductBar />
            <Banner />

            <motion.div
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.75 }} 
            >
                <div className=" w-ful">
                    <div className="flex justify-center">
                        <div className=" sm:w-4/5 sm:p-12 p-5 flex justify-between">
                            <span className=" text-xl sm:text-6xl font-bold">MAC</span>
                            <div className=' font-semibold text-2xl'>
                                <p>If you can dream it</p>
                                <p>Mac can do it </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* News */}
            <div className=" w-full pb-10 pt-10">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Tìm hiểu về Mac</span>
                    </div>
                </div>
            </div>

            <News />

            {/* Product */}
            <div className=" w-full bg-gray-50 pb-10 pt-10">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá các mẫu Mac</span>
                    </div>
                </div>
            </div>

            <TabsComponent />

            {/* Section Accessories */}
            {/* Section Accessories */}
            <div className="flex justify-center">
                <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                    <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho Mac.</span>
                </div>
            </div>

            <Accessories />
        </>
    )
}

export default ProductPage;