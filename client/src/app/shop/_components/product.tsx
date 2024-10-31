'use client';
import CardScroll from "@/components/card/scroll";
import { ProductService } from "@/service/products";
import { ProductType } from "@/types/products";
import { useEffect, useState } from "react";


export function PhoneCard() {
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await ProductService.getProductByType("phone")
        setProduct(resp.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    f();
  }, []);
  return <CardScroll product={product} href="/shop/phone/" />
}

export function TabletCard() {
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await ProductService.getProductByType("tablet")
        setProduct(resp.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    f();
  }, []);
  return <CardScroll product={product} href="/shop/tablet/" />
}

export function WatchCard() {
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
  return <CardScroll product={product} href="/shop/watch/" />
}

export function AccessoryCard() {
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await ProductService.getProductByType("tablet")
        setProduct(resp.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    f();
  }, []);
  return <CardScroll product={product} href="/shop/accessories/" />
}

export function DesktopCard() {
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await ProductService.getProductByType("desktop")
        setProduct(resp.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    f();
  }, []);
  return <CardScroll product={product} href="/shop/computer/" />
}

export function DisplayCard() {
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await ProductService.getProductByType("display")
        setProduct(resp.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    f();
  }, []);
  return <CardScroll product={product} href="/shop/computer/" />
}

export function LaptopCard() {
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await ProductService.getProductByType("laptop")
        setProduct(resp.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    f();
  }, []);
  return <CardScroll product={product} href="/shop/computer/" />
}

export function EarphoneCard() {
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
  return <CardScroll product={product} href="/shop/earphone/" />
}