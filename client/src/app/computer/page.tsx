"use client"
import React from 'react';
import Banner from "@/components/layout/banner"
import Welcome from '@/components/layout/welcome-section';
import { ComputerCardsCarousel } from '@/components/content/computer/cards-carousel';
import { mac_carousel, mac_carousel_1, mac_carousel_2, mac_carousel_3 } from '@/faker/mac_carousel';
import ShortCut from '@/components/layout/shortcut';
import { desktop, display, laptop } from '@/faker/mac';
import { ProductDesktopCard, ProductDisplayCard, ProductLaptopCard } from '@/components/content/computer/product-card';

function ProductPage() {
  return (
    <div className=' w-full bg-gray-50'>
      <Banner />
      <Welcome title='Mac' subtitle='If you can dream it, Mac can do it' />
      <ComputerCardsCarousel carousel={mac_carousel} />
      {/* <div className=' bg-gray-50 flex justify-center'>
        <div className=' md:w-4/5 w-3/4'>
          <div className=" text-xl sm:text-2xl font-semibold pt-10">Mọi phiên bản. <span className='font-medium text-gray-500'> Hãy chọn mẫu bạn thích.</span></div>
          <ShopComputer data={laptop} href='/shop/computer/laptop' />
          <ShopComputer data={desktop} href='/shop/computer/desktop' />
          <ShopComputer data={display} href='/shop/computer/display' />
        </div>
      </div> */}
      <ProductLaptopCard product={laptop} />
      <ProductDesktopCard product={desktop} />
      <ProductDisplayCard product={display} />
      <ComputerCardsCarousel carousel={mac_carousel_1} />
      <ComputerCardsCarousel carousel={mac_carousel_2} />
      <ComputerCardsCarousel carousel={mac_carousel_3} />
      <ShortCut />
    </div>
  )
}

export default ProductPage;