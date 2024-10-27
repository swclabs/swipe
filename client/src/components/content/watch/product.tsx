'use client';
import ProductCard from "@/components/card";
import { ProductService } from "@/service/products";
import { ProductType } from "@/types/products";
import { useEffect, useState } from "react";

export default function Product() {
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await ProductService.getProductByType("watch")
        setProduct(resp.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    f();
  }, []);
  return <ProductCard product={product} href="/shop/watch/" />
}