"use client"
import React from 'react';
import Banner, { BannerPlugin } from "@/components/ui-app/banner"
import News from '@/components/phone/news';
import Accessories from '@/components/phone/accessories';
import ProductBar from '@/components/phone/product-bar';
import Product from '@/components/phone/product';
import Welcome from '@/components/ui-app/common/welcome-section';
import PostsComponent from '@/components/ui-app/posts';
import posts from '@/faker/posts';
import ProductIphoneTypes from '@/components/phone/product-types';
import { motion } from "framer-motion"

function IphonePage() {
    return (
        <>
            {/* 
            |
            |--- news 
            |
            |--- sản phẩm cụ thể
            |
            |--- phụ kiện cho sản phẩm
            |
            */}

            <div className=" w-full bg-gray-50">
                <div className=' w-full flex justify-center p-5 bg-gray-50'>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75 }}
                        className='w-4/5'
                    >
                        <ProductIphoneTypes />
                    </motion.div>
                </div>
                <BannerPlugin />

                {/* Section Welcome */}
                <Welcome title='iPhone' subtitle='Được thiết kế mà ai cũng mê' />

                {/* Posts Section */}
                <PostsComponent data={posts} />

                {/* News */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Tin tức.</span>
                        <span className=" text-xl sm:text-5xl font-medium text-gray-500">Tìm hiểu thêm về iPhone</span>
                    </div>
                </div>

                <News />

                {/* Section Compare Item */}
                {/* <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá dòng sản phẩm.</span>
                    </div>
                </div>

                <ProductCompare /> */}

                {/* Section Products */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá dòng sản phẩm.</span>
                    </div>
                </div>

                <Product />

                {/* Section Accessories */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho iPhone.</span>
                    </div>
                </div>

                <Accessories />
            </div>
        </>
    );
}

export default IphonePage;