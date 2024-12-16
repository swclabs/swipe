'use client';
import ProductCard from "@/components/card";
import { accessory_iphone } from "@/faker/accessory-ip";
import { ProductService } from "@/service/products";
import { ProductType } from "@/types/products";
import { useEffect, useState } from "react";


export default function Accessory() {
  const [accessory, setAccessory] = useState<ProductType[]>([]);
  useEffect(() => {
    const f = async () => {
      try {
        const fetchAccessory = await ProductService.getProductByType('accessories');
        setAccessory(fetchAccessory.data);
      }
      catch (e) {
        console.log(e);
      }
    }
    f();
  }, []);
  return (
    <ProductCard product={accessory} href="/shop/accessories/" />
  )
}