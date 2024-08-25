"use client"
import React from 'react';
import ShopCard from "@/components/common/shop-card";
import AccessoryCard from '@/components/common/accesories-card';
import Event from '@/components/shop/event';
import { WatchAccessories } from '@/faker/watch-accessory';
import airpod from '@/faker/airpod';
import { earphone } from '@/faker/earphone';
import Product from '@/components/earphone/product';
import Welcome from '@/components/common/welcome-section';

export default function Page() {
  return (
    <div className=' bg-gray-50'>
      <Welcome title='AirPods' subtitle='Tất cả các phiên bản' />
      <Product/>
    </div>
  );
}