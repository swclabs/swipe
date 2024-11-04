'use client';
import ProductCard from "@/components/card";
import { accessory_iphone } from "@/faker/accessory-ip";


export default function AccessoryIphone() {
  return (
    <ProductCard product={accessory_iphone} href="/shop/accessories/" />
  )
}