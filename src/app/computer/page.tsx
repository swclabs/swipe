"use client"
import React from 'react';
import Banner, { BannerPlugin } from "@/components/common/banner"
import News from '@/components/computer/news';
import Accessories from '@/components/computer/accessories';
import ProductBar from '@/components/computer/product-bar';
import Welcome from '@/components/common/welcome-section';
import ProductTabs from '@/components/computer/tab';
import ProductMacTypes from '@/components/computer/product-types';
import { motion } from "framer-motion"
import ProductCard from '@/components/computer/card';
import { desktop, display, laptop } from '@/faker/mac';

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
            <div className=" w-full pt-10">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá các mẫu Mac</span>
                    </div>
                </div>
            </div>

            {/* <ProductTabs /> */}

            <div className=" w-full" id='laptop'>
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <p className=" text-xl sm:text-3xl font-semibold">Laptop</p>
                        <p className=' text-sm font-light'>Nhanh và tiện lợi</p>
                    </div>
                </div>
            </div>
            <ProductCard product={laptop} />

            <div className=" w-full" id='desktop'>
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <p className=" text-xl sm:text-3xl font-semibold">Desktop</p>
                        <p className=' text-sm font-light'>Sức mạnh tối đa</p>
                    </div>
                </div>
            </div>
            <ProductCard product={desktop} />

            <div className=" w-full" id='display'>
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <p className=" text-xl sm:text-3xl font-semibold">Display</p>
                        <p className=' text-sm font-light'>Sắc màu rực rỡ</p>
                    </div>
                </div>
            </div>
            <ProductCard product={display} />

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