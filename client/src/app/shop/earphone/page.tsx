"use client"
import React from 'react';
import Product from '@/components/earphone/product';
import Welcome from '@/components/common/welcome-section';
import {motion} from 'framer-motion';
import ProductAirpodTypes from '@/components/earphone/product-types';


export default function Page() {
  return (
    <div className=' bg-gray-50'>
      <div className=' w-full flex justify-center p-5 bg-gray-50'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className='w-4/5'
        >
          <ProductAirpodTypes />
        </motion.div>
      </div>
      <Welcome title='AirPods' subtitle='Tất cả các phiên bản' />
      <Product />
    </div>
  );
}