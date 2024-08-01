"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import Accessories from '@/components/phone/accessories';
import Product from '@/components/tablet/product';
import Welcome from '@/components/common/welcome-section';
// import ProductIphoneTypes from '@/components/phone/product-types';
import ProductIpadTypes from '@/components/tablet/product-types';
import { motion } from "framer-motion"

function IpadPage() {
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
                        <ProductIpadTypes />
                    </motion.div>
                </div>
                <Banner />

                <Welcome title='iPad' subtitle='Chạm, vẽ và gõ trên một thiết bị kỳ diệu.' />

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

export default IpadPage;