"use client"
import React from 'react';
import Product from '@/components/content/watch/product';
import Welcome from '@/components/layout/welcome-section';
import Banner from "@/components/layout/banner"
import { ShopCardsCarousel } from '@/components/content/shop/cards-carousel';
import { shop_carousel } from '@/faker/shop_carousel';
import ShortCut from '@/components/layout/shortcut';
import { CardsCarousel } from '@/components/content/watch/cards-carousel';
import { watch_carousel } from '@/faker/watch-carousel';
import ServiceCarousel from '@/components/content/shop/service';

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