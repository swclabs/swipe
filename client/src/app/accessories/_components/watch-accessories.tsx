'use client';
import ProductCard from "@/components/card";
import { accessory_iphone } from "@/faker/accessory-ip";


export default function AccessoryWatch() {
  return (
    <ProductCard product={accessory_iphone} href="/accessories/" />
  )
}