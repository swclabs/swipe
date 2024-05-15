"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import ProductBar from '@/components/tablet/product-bar';
import News from '@/components/tablet/news';
import Accessories from '@/components/tablet/accessories';
import Product from '@/components/tablet/product';
import Welcome from '@/components/common/welcome-section';
import ProductIpadTypes from '@/components/tablet/product-types';
import { motion } from "framer-motion"
function IpadPage() {
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

            <div className=" w-full bg-white">
                <div className=' w-full flex justify-center p-5 bg-black'>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75 }}
                        className='w-4/5'
                    >
                        <ProductIpadTypes />
                    </motion.div>
                </div>
                <Banner />

                {/* Section Welcome */}
                <Welcome title='iPad' subtitle='Thỏa sức sáng tạo' />


                {/* News */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Tin tức.</span>
                        <span className=" text-xl sm:text-5xl font-medium text-gray-500">Tìm hiểu thêm về iPad</span>
                    </div>
                </div>

                <News />

                {/* Section Products Compare */}
                {/* <div className="flex justify-center text-center ">
                    <div className=" pt-12 pb-12 w-[1000px] bg-white">
                        <h2 className=" text-xl sm:text-5xl font-medium pb-8">Khám phá các dòng sản phẩm iPad.</h2>
                        <a className=" text-blue-600" href="#">
                            <span className="buy"> Mua iPad </span>
                        </a>
                    </div>
                </div> */}
                {/* <ProductCompare /> */}

                {/* Section Products */}
                <div className="flex justify-center text-center ">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <h2 className=" text-xl sm:text-5xl font-medium pb-8">Khám phá các dòng sản phẩm iPad.</h2>
                        <a className=" text-blue-600" href="#">
                            <span className="buy"> Mua iPad </span>
                        </a>
                    </div>
                </div>
                <Product />

                {/* Section Accessories */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho iPad.</span>
                    </div>
                </div>

                <Accessories />
            </div >
        </>
    );
}

export default IpadPage;