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
import ServiceCarousel from '@/components/shop/service';

function WatchPage() {
  return (
    <>
      <div className=" w-full bg-gray-50">
        <Banner />
        <Welcome title='Apple Watch' subtitle='To wear it is to love it.' />
        <ShopCardsCarousel carousel={shop_carousel} />
        <Product />
        <ServiceCarousel />
        <CardsCarousel carousel={watch_carousel} />
        <ShortCut />
      </div>
    </>
  );
}

export default WatchPage;