"use client"
import React from 'react';
import Accessories from '@/components/computer/accessories';
import Welcome from '@/components/common/welcome-section';
import ComputerNavbar from '@/components/computer/navbar';
import { motion } from "framer-motion"
import { desktop, display, laptop } from '@/faker/mac';
import { ProductCardCarousel } from '@/components/shop/accessory-carousel';
import { product_carousel } from '@/faker/accessory-carousel';
import Accessory from '@/components/accessories';
import { ProductDesktopCard, ProductDisplayCard, ProductLaptopCard } from '@/components/computer/product-card';

function ProductPage() {
  return (
    <div className=' w-full bg-gray-50'>
      <div className=' w-full flex justify-center p-2'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className='w-4/5'
        >
          <ComputerNavbar />
        </motion.div>
      </div>
      <Welcome title='Shop Mac' subtitle='If you can dream it, Mac can do it' />

      {/* <ProductTabs /> */}

      {/* <div className=" w-full" id='laptop'>
        <div className="flex">
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          <div className=" sm:w-4/5 sm:py-12 py-5 px-2">
            <p className=" text-xl sm:text-3xl font-semibold">Laptop</p>
            <p className=' text-sm font-light'>Nhanh và tiện lợi</p>
          </div>
        </div>
      </div> */}
      <ProductLaptopCard product={laptop} />

      {/* <div className=" w-full" id='desktop'>
        <div className="flex">
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          <div className=" sm:w-4/5 sm:py-12 py-5 px-2">
            <p className=" text-xl sm:text-3xl font-semibold">Desktop</p>
            <p className=' text-sm font-light'>Sức mạnh tối đa</p>
          </div>
        </div>
      </div> */}
      <ProductDesktopCard product={desktop} />

      {/* <div className=" w-full" id='display'>
        <div className="flex">
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          <div className=" sm:w-4/5 sm:py-12 py-5 px-2">
            <p className=" text-xl sm:text-3xl font-semibold">Display</p>
            <p className=' text-sm font-light'>Sắc màu rực rỡ</p>
          </div>
        </div>
      </div> */}
      <ProductDisplayCard product={display} />

      <Accessory />
      {/* <ProductCardCarousel carousel={product_carousel} /> */}
    </div>
  )
}

export default ProductPage;