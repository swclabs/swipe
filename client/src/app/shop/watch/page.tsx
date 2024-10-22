"use client"
import React from 'react';
import ShopCard from "@/components/layout/shop-card";
import AccessoryCard from '@/components/layout/accesories-card';
import watch from '@/faker/watch';
import Event from '@/components/content/shop/event';
import { WatchAccessories } from '@/faker/watch-accessory';
import Welcome from '@/components/layout/welcome-section';
import Product from '@/components/content/watch/product';
import { motion } from "framer-motion";
import ProductWatchTypes from '@/components/content/watch/product-types';

export default function Page() {
  return (
    <div className=' bg-gray-50 w-full'>
      <div className=' w-full flex justify-center p-5 bg-gray-50'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className='w-4/5'
        >
          <ProductWatchTypes />
        </motion.div>
      </div>
      <Welcome title='Watch' subtitle='Tất cả các phiên bản' />
      <Product />
    </div>
  );
}