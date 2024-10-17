"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import Product from '@/components/phone/product';
import Welcome from '@/components/common/welcome-section';
import { PhoneCardsCarousel } from '@/components/phone/cards-carousel';
import { iphone_carousel } from '@/faker/iphone-carousel';
import ShortCut from '@/components/common/shortcut';
import Accessory from '@/components/accessories';

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