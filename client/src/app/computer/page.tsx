"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import Welcome from '@/components/common/welcome-section';
import Widget from '@/components/common/widget';
import WidgetData1 from '@/faker/widget';
import WidgetMac2, { WidgetMac3, WidgetMac4 } from '@/faker/mac-widget';
import { ComputerCardsCarousel } from '@/components/computer/cards-carousel';
import { mac_carousel, mac_carousel_1, mac_carousel_2, mac_carousel_3 } from '@/faker/mac_carousel';
import ShortCut from '@/components/common/shortcut';

function ProductPage() {
  return (
    <div className=' w-full'>
      <Banner />
      <Welcome title='Mac' subtitle='If you can dream it, Mac can do it' />
      <ComputerCardsCarousel carousel={mac_carousel} />
      <ComputerCardsCarousel carousel={mac_carousel_1} />
      <ComputerCardsCarousel carousel={mac_carousel_2} />
      <ComputerCardsCarousel carousel={mac_carousel_3} />
      <ShortCut />
    </div>
  )
}

export default ProductPage;