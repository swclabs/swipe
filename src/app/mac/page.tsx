"use client"
import React, { useEffect } from 'react';
import Banner from "@/components/banner"
import { useRef, useState } from 'react';
// import VideoPlayerControls from '@/components/control/VideoPlayerControls';
import TabsComponent from '@/components/tab';
import News from '@/components/mac/new';
import Accessories from '@/components/mac/accessories';
import ProductBar from '@/components/mac/product-bar';

function ProductPage() {
    return (
        <>
            {/* 
            |
            |--- news (tin tức sản phẩm)
            |
            |--- sản phẩm cụ thể
            |
            |--- phụ kiện cho sản phẩm
            |
            */}

            <ProductBar />
            <Banner />
            {/* News */}
            <div className=" w-full pb-10 pt-10">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Tìm hiểu về Mac</span>
                    </div>
                </div>
            </div>

            <News />

            {/* Product */}
            <div className=" w-full bg-gray-50 pb-10 pt-10">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá các mẫu Mac</span>
                    </div>
                </div>
            </div>

            <TabsComponent />

            {/* Section Accessories */}
            {/* Section Accessories */}
            <div className="flex justify-center">
                <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                    <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho Mac.</span>
                </div>
            </div>

            <Accessories />
        </>
    )
}

export default ProductPage;