"use client"
import React from 'react';
import Banner from "@/components/banner"
import ProductBar from '@/components/airpod/product-bar';
import News from '@/components/airpod/new';
import Product from '@/components/airpod/product';
import Accessories from '@/components/airpod/accessories';
import Service from "@/components/store/service";


function IphonePage() {
    return (
        <>
            {/* 
            |
            |--- news 
            |
            |--- sản phẩm cụ thể
            |
            |--- phụ kiện cho sản phẩm
            |
            |--- dịch vụ
            |
            */}

            <ProductBar />
            <Banner />

            <div className=" w-full bg-gray-50">

                {/* Section Welcome */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <div className='grid grid-cols-2 gap-4'>
                            <span className=" text-xl sm:text-7xl font-medium">Airpods.</span>
                            <h4 className="font-semibold text-xl text-right py-12">Nơi âm nhạc trở nên sống động.</h4>
                        </div>
                    </div>
                </div>

                {/* News */}
                <div className="flex justify-center text-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-lg sm:text-6xl font-semibold">
                            Kết nối tuyệt diệu với <br />
                            các thiết bị của bạn.
                        </span>
                    </div>
                </div>

                <News />

                {/* Section Products */}
                <div className="flex justify-center text-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-lg sm:text-6xl font-semibold">
                            AirPods nào <br />
                            phù hợp với bạn?
                        </span>
                    </div>
                </div>

                <Product />

                {/* Section Accessories */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho Airpod.</span>
                    </div>
                </div>

                <Accessories />

                {/* Section Service */}
                <Service />
            </div>
        </>
    );
};

export default IphonePage;