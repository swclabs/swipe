'use client';
import ProductCard from "@/components/card";
import { Button } from "@/components/ui/button";
import { accessory_iphone } from "@/faker/accessory-ip";
import { formatNumber } from "@/utils/fmt";
import Image from "next/image";


export default function Accessory() {
  return (
    <ProductCard product={accessory_iphone} href="/accessory/" />
  )
}