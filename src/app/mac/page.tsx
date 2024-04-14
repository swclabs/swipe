"use client"
import React from 'react';
import Banner from "@/components/banner"
import News from '@/components/mac/news';
import Accessories from '@/components/mac/accessories';
import ProductBar from '@/components/mac/product-bar';
import Welcome from '@/components/common/welcome-section';
import ProductTabs from '@/components/mac/tab';

function ProductPage() {
    return (
        <div>
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

            <Welcome title='Mac' subtitle='If you can dream it, Mac can do it' />


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

            <ProductTabs />

            {/* Section Accessories */}
            {/* Section Accessories */}
            <div className="flex justify-center">
                <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                    <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho Mac.</span>
                </div>
            </div>

            <Accessories />
        </div>
    )
}

export default ProductPage;