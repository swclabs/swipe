'use client';
import { ProductService } from "@/service/products";
import { ProductType } from "@/types/products";
import { useEffect, useState } from "react";
import ProductCard from "@/components/card";

export default function Product() {
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await ProductService.getProductByType("earphone")
        setProduct(resp.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    f();
  }, []);
  return <ProductCard product={product} href="/shop/earphone/" />
}