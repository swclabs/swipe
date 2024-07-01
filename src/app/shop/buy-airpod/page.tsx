// export default function Page() {
//     return (
//         <div>Web page update coming soon...</div>
//     )
// }
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
        <>
            <div className='w-full bg-gray-50'>

                <div className="flex justify-center">
                    <div className=" sm:w-4/5 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-semibold"> Mua Airpod </span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="sm:w-4/5 pt-10 pb-10">
                        <span className=" text-xl sm:text-2xl font-semibold">Tất cả các phiên bản Airpod. <span className='font-medium text-gray-500'>Hãy chọn mẫu bạn thích.</span></span>
                    </div>
                </div>
                <ShopCard data={airpod} />

                <div className="flex justify-center">
                    <div className="sm:w-4/5 pt-10 pb-10">
                        <span className=" text-xl sm:text-2xl font-semibold"> Những mẫu tai nghe khác. <span className='font-medium text-gray-500'> Hãy chọn cho bạn gu âm nhạc </span></span>
                    </div>
                </div>
                <AccessoryCard data={earphone} />

                <div className="flex justify-center">
                    <div className="sm:w-4/5 pt-10 pb-10">
                        <span className=" text-xl sm:text-2xl font-semibold">Nhiều cách để tiết kiệm. <span className='font-medium text-gray-500'>Tìm cách phù hợp với bạn.</span></span>
                    </div>
                </div>
                <Event />

                <div className="flex justify-center">
                    <div className="sm:w-4/5 pt-10 pb-10">
                        <span className=" text-xl sm:text-2xl font-semibold">Dây đeo Apple Watch. <span className='font-medium text-gray-500'>Hoàn thiện phong cách.</span></span>
                    </div>
                </div>
                <AccessoryCard data={WatchAccessories} />

            </div>
        </>
    );
}