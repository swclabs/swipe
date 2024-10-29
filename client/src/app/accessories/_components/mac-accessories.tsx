'use client';
import { Image } from "@nextui-org/react";
import { MacAccessories } from "@/faker/mac-accessory";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { formatNumber } from "@/utils/fmt";
import ProductCard from "@/components/card";
import { accessory_iphone } from "@/faker/accessory-ip";


export default function AccessoryMac() {
  return (
    <ProductCard product={accessory_iphone} href="/accessories/" />
  )
}