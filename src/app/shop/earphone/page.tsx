"use client"
import React from 'react';
import ShopCard from "@/components/common/shop-card";
import AccessoryCard from '@/components/common/accesories-card';
import Event from '@/components/shop/event';
import { WatchAccessories } from '@/faker/watch-accessory';
import airpod from '@/faker/airpod';
import { earphone } from '@/faker/earphone';

export default function Page() {
  return (
    <div className=' bg-gray-50 flex justify-center'>
      <div className=' md:w-4/5 w-2/3'>
        <div className=" text-xl sm:text-5xl font-semibold py-10"> Mua Airpod </div>

        <div className=" text-xl sm:text-2xl font-semibold pt-10">Tất cả các phiên bản Airpod. <span className='font-medium text-gray-500'>Hãy chọn mẫu bạn thích.</span></div>
        <ShopCard data={airpod} />

        <span className=" text-xl sm:text-2xl font-semibold"> Những mẫu tai nghe khác. <span className='font-medium text-gray-500'> Hãy chọn cho bạn gu âm nhạc </span></span>
        <AccessoryCard data={earphone} />

        <div className=" text-xl sm:text-2xl font-semibold py-10">Nhiều cách để tiết kiệm. <span className='font-medium text-gray-500'>Tìm cách phù hợp với bạn.</span></div>
        <Event />

        <div className=" text-xl sm:text-2xl font-semibold">Dây đeo Apple Watch. <span className='font-medium text-gray-500'>Hoàn thiện phong cách.</span></div>
        <AccessoryCard data={WatchAccessories} />
      </div>
    </div>
  );
}