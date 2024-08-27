"use client"
import React from 'react';
import ProductBar from '@/components/watch/product-bar';
import Product from '@/components/watch/product';
import { Image } from '@nextui-org/react';
import News from '@/components/watch/new';
import Welcome from '@/components/common/welcome-section';
import Banner from "@/components/common/banner"
import Widget from '@/components/common/widget';
import WidgetData2 from '@/faker/widget-watch';
import { motion } from "framer-motion"
import ProductWatchTypes from '@/components/watch/product-types';
import { ShopCardsCarousel } from '@/components/shop/cards-carousel';
import { shop_carousel } from '@/faker/shop_carousel';
import ShortCut from '@/components/common/shortcut';
import { CardsCarousel } from '@/components/watch/cards-carousel';
import { watch_carousel } from '@/faker/watch-carousel';
import AccessoryCard from '@/components/common/accesories-card';
import { iPhoneAccessories } from '@/faker/iphone-accessory';

function WatchPage() {
  return (
    <>
      <div className=" w-full bg-gray-50">
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
        <Banner />
        <Welcome title='Apple Watch' subtitle='To wear it is to love it.' />
        <ShopCardsCarousel carousel={shop_carousel} />
        <Product />
        <CardsCarousel carousel={watch_carousel} />
        <ShortCut />
      </div>
    </>
  );
}

export default WatchPage;