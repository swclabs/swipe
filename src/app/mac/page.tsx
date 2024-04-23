"use client"
import React from 'react';
import Banner, { BannerPlugin } from "@/components/ui-app/banner"
import News from '@/components/mac/news';
import Accessories from '@/components/mac/accessories';
import ProductBar from '@/components/mac/product-bar';
import Welcome from '@/components/ui-app/common/welcome-section';
import ProductTabs from '@/components/mac/tab';
import ProductMacTypes from '@/components/mac/product-types';
import { motion } from "framer-motion"

function ProductPage() {
    return (
        <div className=' w-full'>
            {/* 
            |
            |--- news (tin tức sản phẩm)
            |
            |--- sản phẩm cụ thể
            |
            |--- phụ kiện cho sản phẩm
            |
            */}
            <div className=' w-full flex justify-center p-2 bg-gray-50'>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    className='w-4/5'
                >
                    <ProductMacTypes />
                </motion.div>
            </div>
            <BannerPlugin />

            <Welcome title='Mac' subtitle='If you can dream it, Mac can do it' />


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

            <ProductTabs />

            {/* Section Accessories */}
            {/* Section Accessories */}
            <div className="flex justify-center">
                <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                    <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho Mac.</span>
                </div>
            </div>

            <Accessories />
        </div>
    )
}

export default ProductPage;