"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import News from '@/components/phone/news';
import Accessories from '@/components/phone/accessories';
import ProductBar from '@/components/phone/product-bar';
import Product from '@/components/phone/product';
import Welcome from '@/components/common/welcome-section';
import posts from '@/faker/posts';
import ProductIphoneTypes from '@/components/phone/product-types';
import { motion } from "framer-motion"
import { ProductCardCarousel } from '@/components/shop/accessory-carousel';
import { product_carousel } from '@/faker/accessory-carousel';
import Accessory from '@/components/accessories';

function IphonePage() {
  return (
    <>
      <div className=" w-full bg-gray-50">
        <div className=' w-full flex justify-center p-5 bg-gray-50'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='w-4/5'
          >
            <ProductIphoneTypes />
          </motion.div>
        </div>
        <Banner />

        <Welcome title='iPhone' subtitle='Được thiết kế mà ai cũng mê' />

        <Product />
        <Accessory />
        {/* <ProductCardCarousel carousel={product_carousel} /> */}
      </div>
    </>
  );
}

export default IphonePage;