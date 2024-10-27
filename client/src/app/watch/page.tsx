"use client"
import Product from '@/components/content/watch/product';
import { ShopCardsCarousel } from '@/app/shop/_components/cards-carousel';
import ServiceCarousel from '@/components/content/shop/service';
import { CardsCarousel } from '@/components/content/watch/cards-carousel';
import Banner from "@/components/layout/banner";
import ShortCut from '@/components/layout/shortcut';
import Welcome from '@/components/layout/welcome-section';
import { shop_carousel } from '@/faker/shop_carousel';
import { watch_carousel } from '@/faker/watch-carousel';

export default function Page() {
  return (
    <>
      <div className=" w-full">
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