"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import Product from '@/components/earphone/product';
import Welcome from '@/components/common/welcome-section';
import { ShopCardsCarousel } from '@/components/shop/cards-carousel';
import { shop_carousel } from '@/faker/shop_carousel';
import ShortCut from '@/components/common/shortcut';
import ServiceCarousel from '@/components/shop/service';

function IphonePage() {
  return (
    <>
      <div className=" w-full bg-gray-50">
        <Banner />
        <Welcome title='Airpods' subtitle='Nơi âm nhạc trở nên sống động.' />
        <ShopCardsCarousel carousel={shop_carousel} />

        <Product />

        {/* Section Service */}
        <ServiceCarousel />
        <ShortCut />
      </div>
    </>
  );
}

export default IphonePage;