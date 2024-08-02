"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import Product from '@/components/phone/product';
import Welcome from '@/components/common/welcome-section';
import posts from '@/faker/posts';
import ProductIphoneTypes from '@/components/phone/product-types';
import { motion } from "framer-motion"
import Widget, { PostsWidget } from '@/components/common/widget';
import WidgetData1 from '@/faker/widget';
import { Link } from '@nextui-org/react';
import ShopCard from "@/components/common/shop-card";
import AccessoryCard from '@/components/common/accesories-card';
import { iphone_shop } from '@/faker/iphone-shop';
import { iPhoneAccessories } from '@/faker/iphone-accessory';
import { PhoneCardsCarousel } from '@/components/phone/cards-carousel';
import { iphone_carousel } from '@/faker/iphone-carousel';

function IphonePage() {
  return (
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

      <Banner />
      <Welcome title='iPhone' subtitle='Được thiết kế mà ai cũng mê' />
      <PhoneCardsCarousel carousel={iphone_carousel} />

      {/* <Widget data={WidgetData1} /> */}
      <div className=' bg-gray-50 flex justify-center'>
        <div className=' md:w-4/5 w-2/3'>
          <div className=" text-xl sm:text-2xl font-semibold pt-10">Mọi phiên bản. <span className='font-medium text-gray-500'> Hãy chọn mẫu bạn thích.</span></div>
          <ShopCard data={iphone_shop} />

          <span className=" text-xl sm:text-2xl font-semibold"> Phụ kiện. <span className='font-medium text-gray-500'> Những phụ kiện kết hợp hoàn hảo với thiết bị yêu thích của bạn.</span></span>
          <AccessoryCard data={iPhoneAccessories} />
        </div>
      </div>
    </div>
  );
}

export default IphonePage;