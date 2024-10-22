"use client"
import React from 'react';
import Banner from "@/components/layout/banner"
import Product from '@/components/content/earphone/product';
import Welcome from '@/components/layout/welcome-section';
import { ShopCardsCarousel } from '@/components/content/shop/cards-carousel';
import { shop_carousel } from '@/faker/shop_carousel';
import ShortCut from '@/components/layout/shortcut';
import ServiceCarousel from '@/components/content/shop/service';

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