"use client"
import React from 'react';
import ShopCard from "@/components/common/shop-card";
import AccessoryCard from '@/components/common/accesories-card';
import watch from '@/faker/watch';
import Event from '@/components/shop/event';
import { WatchAccessories } from '@/faker/watch-accessory';
import Welcome from '@/components/common/welcome-section';
import Product from '@/components/watch/product';

export default function Page() {
  return (
    <div className=' bg-gray-50 w-full'>
      <Welcome title='Watch' subtitle='Tất cả các phiên bản' />
      <Product />
    </div>
  );
}