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
import { Link } from '@nextui-org/react';
import { ShopCardsCarousel } from '@/components/shop/cards-carousel';
import { shop_carousel } from '@/faker/shop_carousel';
import ShortCut from '@/components/common/shortcut';
import { ProductCardCarousel } from '@/components/shop/accessory-carousel';
import { product_carousel } from '@/faker/accessory-carousel';
function IpadPage() {
  return (
    <>
      <div className=" w-full bg-gray-50">
        <div className=' w-full flex justify-center p-5'>
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

        <ShopCardsCarousel carousel={shop_carousel} />

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
        <div className="flex text-left ">
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          <div className=" sm:w-4/5 sm:py-12 py-10 px-2">
            <h2 className=" text-xl sm:text-4xl font-medium pb-8">Khám phá các dòng sản phẩm iPad.</h2>
          </div>
        </div>
        <Product />

        <ProductCardCarousel carousel={product_carousel} />
        <ShortCut />
      </div >
    </>
  );
}

export default IpadPage;