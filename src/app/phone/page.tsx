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
import Widget, { PostsWidget } from '@/components/common/widget';
import WidgetData1 from '@/faker/widget';
import { Link } from '@nextui-org/react';

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
      <PostsWidget data={posts} />

      {/* Section Products */}
      <div className="flex justify-center text-center ">
        <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
          <h2 className=" text-xl sm:text-5xl font-medium pb-8">Khám phá các dòng sản phẩm iPhone.</h2>
          <Link className=" text-blue-600" href="/shop/iphone">
            <span className="buy"> Mua iPhone </span>
          </Link>
        </div>
      </div>

      <Product />

      <Widget data={WidgetData1} />
    </div>
  );
}

export default IphonePage;