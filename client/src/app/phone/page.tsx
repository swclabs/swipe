"use client"
import React from 'react';
import Banner from "@/components/layout/banner"
import Product from '@/components/content/phone/product';
import Welcome from '@/components/layout/welcome-section';
import { PhoneCardsCarousel } from '@/components/content/phone/cards-carousel';
import { iphone_carousel } from '@/faker/iphone-carousel';
import ShortCut from '@/components/layout/shortcut';
import Accessory from '@/components/content/accessories';

function IphonePage() {
  return (
    <div className=" w-full bg-gray-50">
      <Banner />
      <Welcome title='iPhone' subtitle='Được thiết kế mà ai cũng mê' />
      <PhoneCardsCarousel carousel={iphone_carousel} />
      <Product />
      <Accessory />
      <ShortCut />
    </div>
  );
}

export default IphonePage;