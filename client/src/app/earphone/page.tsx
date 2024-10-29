"use client"
import Product from '@/app/earphone/_components/product';
import { ShopCardsCarousel } from '@/app/shop/_components/cards-carousel';
import ServiceCarousel from '@/components/content/shop/service';
import Banner from "@/components/layout/banner";
import ShortCut from '@/components/layout/shortcut';
import Welcome from '@/components/layout/welcome-section';
import { shop_carousel } from '@/faker/shop_carousel';

export default function Page() {
  return (
    <>
      <div className=" w-full">
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