"use client"
import React from 'react';
import ShopCard from "@/components/common/shop-card";
import AccessoryCard from '@/components/common/accesories-card';
import Event from '@/components/shop/event';
import { WatchAccessories } from '@/faker/watch-accessory';
import { iphone_shop } from '@/faker/iphone-shop';
import { iPhoneAccessories } from '@/faker/iphone-accessory';

export default function Page() {
    return (
        <div className=' bg-gray-50 flex justify-center'>
            <div className=' md:w-4/5 w-2/3'>
                <div className=" text-xl sm:text-5xl font-semibold py-10"> Mua iPhone </div>

                <div className=" text-xl sm:text-2xl font-semibold pt-10">Mọi phiên bản. <span className='font-medium text-gray-500'> Hãy chọn mẫu bạn thích.</span></div>
                <ShopCard data={iphone_shop} />

                <span className=" text-xl sm:text-2xl font-semibold"> Phụ kiện. <span className='font-medium text-gray-500'> Những phụ kiện kết hợp hoàn hảo với thiết bị yêu thích của bạn.</span></span>
                <AccessoryCard data={iPhoneAccessories} />

                <div className=" text-xl sm:text-2xl font-semibold py-10">Nhiều cách để tiết kiệm. <span className='font-medium text-gray-500'>Tìm cách phù hợp với bạn.</span></div>
                <Event />
            </div>
        </div>
    );
}