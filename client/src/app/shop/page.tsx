'use client'
import './style.css'
import Banner from "@/components/common/banner"
import React from "react"
import Product from "@/components/shop/product";
import Accessory from "@/components/shop/accessory";
import ProductNavbar from "@/components/shop/navbar";
import { motion } from "framer-motion"
import { ShopCardsCarousel } from '@/components/shop/cards-carousel';
import { mac_carousel } from '@/faker/mac_carousel';
import { shop_carousel } from '@/faker/shop_carousel';
import ShortCut from '@/components/common/shortcut';
import { IoCartOutline } from 'react-icons/io5';
import { Card, Services } from '@/components/ui/service-cards-carousel';
import { TbCurrencyDong } from 'react-icons/tb';
import { RiBox3Line } from 'react-icons/ri';
import { CiCreditCard1 } from 'react-icons/ci';
import ServiceCarousel from '@/components/shop/service';

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

        <div className=" pt-10 pb-10 sm:pb-12 flex justify-center">
          <div className="sm:w-4/5 sm:pl-12 sm:pr-12">
            <h1 className=" sm:text-2xl font-semibold">
              <span>Phụ kiện.</span>
              <span className=" text-gray-500"> Tạo nét riêng</span>
            </h1>
          </div>
        </div>

        <Accessory />
        <ShortCut />
      </div>
    </>
  )
}