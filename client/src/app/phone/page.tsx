"use client"
import Product from '@/app/phone/_components/product';
import Accessory from '@/components/content/accessories';
import { PhoneCardsCarousel } from '@/app/phone/_components/cards-carousel';
import Banner from "@/components/layout/banner";
import ShortCut from '@/components/layout/shortcut';
import Welcome from '@/components/layout/welcome-section';
import { iphone_carousel } from '@/faker/iphone-carousel';

export default function Page() {
  return (
    <div className="w-full">
      <Banner />
      <Welcome title='iPhone' subtitle='Được thiết kế mà ai cũng mê' />
      <PhoneCardsCarousel carousel={iphone_carousel} />
      <Product />
      <Accessory />
      <ShortCut />
    </div>
  );
}