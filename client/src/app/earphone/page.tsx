"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import ProductBar from '@/components/earphone/product-bar';
import News from '@/components/earphone/news';
import Product from '@/components/earphone/product';
import Accessories from '@/components/earphone/accessories';
import Service from "@/components/shop/service";
import { motion } from "framer-motion"
import Welcome from '@/components/common/welcome-section';
import ProductAirpodTypes from '@/components/earphone/product-types';
import Widget from '@/components/common/widget';
import WidgetData3 from '@/faker/widget-accessory';
import { ShopCardsCarousel } from '@/components/shop/cards-carousel';
import { shop_carousel } from '@/faker/shop_carousel';
import ShortCut from '@/components/common/shortcut';

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
            |--- dịch vụ
            |
            */}

            <div className=" w-full bg-white">
                <div className=' w-full flex justify-center p-5 bg-gray-50'>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75 }}
                        className='w-4/5'
                    >
                        <ProductAirpodTypes />
                    </motion.div>
                </div>

                <Banner />
                <Welcome title='Airpods' subtitle='Nơi âm nhạc trở nên sống động.' />
                <ShopCardsCarousel carousel={shop_carousel} />

                {/* Section Products */}
                <div className="flex justify-center text-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-lg sm:text-6xl font-semibold">
                            AirPods nào <br />
                            phù hợp với bạn?
                        </span>
                    </div>
                </div>

                <Product />

                {/* Section Service */}
                <Service />

                {/* Section Accessories */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho Airpod.</span>
                    </div>
                </div>

                <Accessories />
                <ShortCut />
            </div>
        </>
    );
}

export default IphonePage;