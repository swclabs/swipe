"use client"
import React from 'react';
import Banner from "@/components/banner"
import News from '@/components/iphone/news';
import Accessories from '@/components/iphone/accessories';
import ProductBar from '@/components/iphone/product-bar';
import Product from '@/components/iphone/product';
import {motion} from "framer-motion"

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

            <ProductBar />
            <Banner />
            <div className=" w-full bg-gray-50">

                {/* Section Welcome */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                >
                    <div className="flex justify-center">
                        <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                            <div className='grid grid-cols-2 gap-4'>
                                <span className=" text-xl sm:text-7xl font-medium">iPhone.</span>
                                <h4 className="font-semibold text-xl text-right py-12">Được thiết kế để ai cũng mê.</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>

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
};

export default IphonePage;