"use client"
import React from 'react';
import Banner from "@/components/ui-app/banner"
import News from '@/components/iphone/news';
import Accessories from '@/components/iphone/accessories';
import ProductBar from '@/components/iphone/product-bar';
import Product from '@/components/iphone/product';
import Welcome from '@/components/ui-app/common/welcome-section';
import Posts from '@/components/ui-app/posts';
import posts from '@/faker/posts';

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
            */}

            <div className=" w-full bg-gray-50">
                <ProductBar />
                <Banner />

                {/* Section Welcome */}
                <Welcome title='iPhone' subtitle='Được thiết kế mà ai cũng mê' />

                {/* Posts Section */}
                <Posts data={posts} />

                {/* News */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Tin tức.</span>
                        <span className=" text-xl sm:text-5xl font-medium text-gray-500">Tìm hiểu thêm về iPhone</span>
                    </div>
                </div>

                <News />

                {/* Section Compare Item */}
                {/* <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá dòng sản phẩm.</span>
                    </div>
                </div>

                <ProductCompare /> */}

                {/* Section Products */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Khám phá dòng sản phẩm.</span>
                    </div>
                </div>

                <Product />

                {/* Section Accessories */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho iPhone.</span>
                    </div>
                </div>

                <Accessories />
            </div>
        </>
    );
};

export default IphonePage;