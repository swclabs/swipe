"use client"
import React from 'react';
import Banner from "@/components/banner"
import './style.css';
import News from '@/components/iphone/new';
import ProductCompare from '@/components/iphone/product-compare';
import Accessories from '@/components/iphone/accessories';
import ProductBar from '@/components/iphone/product-bar';


function IphonePage() {
    return (
        <>
            <ProductBar />
            <Banner />
            <div className=" w-full bg-gray-50">

                {/* Section Welcome */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <div className='grid grid-cols-2 gap-4'>
                            <span className=" text-xl sm:text-7xl font-medium">iPhone.</span>
                            <h4 className="font-semibold text-xl text-right py-12">Được thiết kế để ai cũng mê.</h4>
                        </div>
                    </div>
                </div>

                {/* Section News */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Tin tức.</span>
                        <span className=" text-xl sm:text-5xl font-medium text-gray-500">Tìm hiểu thêm về iPhone</span>
                    </div>
                </div>

                <News />

                {/* Section Compare Item */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá dòng sản phẩm.</span>
                        {/* <span className=" text-xl sm:text-5xl font-medium text-gray-500">Tìm hiểu thêm về iPhone</span> */}
                    </div>
                </div>

                <ProductCompare />

                {/* Section Accessories */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho iPhone.</span>
                        {/* <span className=" text-xl sm:text-5xl font-medium text-gray-500">Tìm hiểu thêm về iPhone</span> */}
                    </div>
                </div>

                <Accessories />
            </div>
        </>
    );
};

export default IphonePage;