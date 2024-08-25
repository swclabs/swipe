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
import Accessory from '@/components/accessories';
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
        <Product />

        {/* <ProductCardCarousel carousel={product_carousel} /> */}
        <Accessory />
        <ShortCut />
      </div >
    </>
  );
}

export default IpadPage;