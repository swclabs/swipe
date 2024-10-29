'use client';
import ProductCard from "@/components/card";
import { useProductsInStore } from "@/state/products";
import { useEffect } from "react";



export default function Product() {
  const { product, fetchProduct } = useProductsInStore();
  useEffect(() => {
    fetchProduct('tablet');
  }, [])
  return <ProductCard product={product} href="/shop/tablet/" />
}