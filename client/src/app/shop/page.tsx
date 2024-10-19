'use client'
import './style.css'
import Banner from "@/components/layout/banner"
import React from "react"
import ProductNavbar from "@/components/content/shop/navbar";
import { motion } from "framer-motion"
import { ShopCardsCarousel } from '@/components/content/shop/cards-carousel';
import { shop_carousel } from '@/faker/shop_carousel';
import ShortCut from '@/components/layout/shortcut';;
import ServiceCarousel from '@/components/content/shop/service';
import { ProductCardCarousel } from '@/components/content/shop/accessory-carousel';
import { product_carousel } from '@/faker/accessory-carousel';

export default function Store() {

  return (
    <>
      <Banner />
      <div className=" w-full bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="flex justify-center">
            <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
              <span className=" text-xl sm:text-5xl font-medium">Cửa hàng.</span>
              <span className=" text-xl sm:text-5xl font-medium text-gray-500">Cách tốt nhất để</span>
              <p className=" text-xl sm:text-5xl font-medium text-gray-500">Mua sản phẩm mà bạn thích</p>
            </div>
          </div>
        </motion.div>

        <ProductNavbar />

        <ShopCardsCarousel carousel={shop_carousel} />
        <ServiceCarousel />
        <ProductCardCarousel carousel={product_carousel} />
        <ShortCut />
      </div>
    </>
  )
}