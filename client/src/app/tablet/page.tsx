"use client"
import React from 'react';
import Banner from "@/components/layout/banner"
import ProductBar from '@/components/content/tablet/product-bar';
import News from '@/components/content/tablet/news';
import Accessories from '@/components/content/tablet/accessories';
import Product from '@/components/content/tablet/product';
import Welcome from '@/components/layout/welcome-section';
import ProductIpadTypes from '@/components/content/tablet/product-types';
import { motion } from "framer-motion"
import { Link } from '@nextui-org/react';
import { ShopCardsCarousel } from '@/components/content/shop/cards-carousel';
import { shop_carousel } from '@/faker/shop_carousel';
import ShortCut from '@/components/layout/shortcut';
import ipad from '@/faker/ipad';
import { iPhoneAccessories } from '@/faker/iphone-accessory';
import AccessoryCard from '@/components/layout/accesories-card';
import ShopTablet from '@/components/content/tablet/shop-card';
import Accessory from '@/components/content/accessories';

function Page() {
  return (
    <>
      <div className=" w-full bg-gray-50">
        {/* <div className=' w-full flex justify-center p-5'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className='w-4/5'
          >
            <ProductIpadTypes />
          </motion.div>
        </div> */}
        <Banner />

        {/* Section Welcome */}
        <Welcome title='iPad' subtitle='Thỏa sức sáng tạo' />

        <ShopCardsCarousel carousel={shop_carousel} />

        {/* <div className=' bg-gray-50 flex justify-center'>
          <div className=' md:w-4/5 w-2/3'>
            <div className=" text-xl sm:text-2xl font-semibold pt-10">Mọi phiên bản. <span className='font-medium text-gray-500'> Hãy chọn mẫu bạn thích.</span></div>
            <ShopTablet data={ipad} href='/shop/tablet' />

            <span className=" text-xl sm:text-2xl font-semibold"> Phụ kiện. <span className='font-medium text-gray-500'> Những phụ kiện kết hợp hoàn hảo với thiết bị yêu thích của bạn.</span></span>
            <AccessoryCard data={iPhoneAccessories} />
          </div>
        </div> */}
        <Product />
        <Accessory />
        <ShortCut />
      </div >
    </>
  );
}

export default Page;