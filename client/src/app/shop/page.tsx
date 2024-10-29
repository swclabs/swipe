"use client";
import ProductNavbar from "@/components/content/shop/navbar";
import { AccessoryCard, DesktopCard, DisplayCard, EarphoneCard, LaptopCard, PhoneCard, TabletCard, WatchCard } from "@/app/shop/_components/product";
import ServiceCarousel from "@/components/content/shop/service";
import Banner from "@/components/layout/banner";
import ShortCut from "@/components/layout/shortcut";
import { motion } from "framer-motion";
import "./style.css";
import Welcome from "@/components/layout/welcome-section";
import { ShopCardsCarousel } from "./_components/cards-carousel";
import { shop_carousel } from "@/faker/shop_carousel";
export default function Store() {
  return (
    <>
      <Banner />
      <div className="w-full">
        <Welcome title="Cửa hàng" subtitle="Cách tốt nhất để mua sản phẩm mà bạn thích" />

        <ProductNavbar />
        <ShopCardsCarousel carousel={shop_carousel} />

        <PhoneCard />
        <TabletCard />
        <WatchCard />
        <LaptopCard />
        <DisplayCard />
        <DesktopCard />
        <EarphoneCard />
        <AccessoryCard />
        <ServiceCarousel />
        {/* <ProductCardCarousel carousel={product_carousel} /> */}
        <ShortCut />
      </div>
    </>
  );
}
