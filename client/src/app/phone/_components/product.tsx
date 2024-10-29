'use client';
import ProductCard from '@/components/card';
import { useProductsInStore } from '@/state/products';
import { useEffect } from 'react';



export default function Product() {
  const { product, fetchProduct } = useProductsInStore();
  useEffect(() => {
    fetchProduct('phone');
  }, [])

  console.log('product', product)

  return <ProductCard product={product} href="/shop/phone/" />
}