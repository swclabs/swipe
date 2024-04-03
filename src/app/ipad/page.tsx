"use client"
import React from 'react';
import Banner from "@/components/banner"
// import ProductCompare from '@/components/ipad/product-compare';
import ProductBar from '@/components/ipad/product-bar';
import News from '@/components/ipad/new';
import Accessories from '@/components/ipad/accessories';

function IpadPage() {
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
            <div className=" w-full bg-gray-50">

                {/* News */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Tin tức.</span>
                        <span className=" text-xl sm:text-5xl font-medium text-gray-500">Tìm hiểu thêm về iPad</span>
                    </div>
                </div>

                <News />


                <div className="flex justify-center text-center ">
                    <div className=" pt-12 pb-12 w-[1000px] bg-white">
                        <h2 className=" text-xl sm:text-5xl font-medium pb-8">Khám phá các dòng sản phẩm iPad.</h2>
                        <a className=" text-blue-600" href="#">
                            <span className="buy"> Mua iPad </span>
                        </a>
                    </div>
                </div>
                {/* <ProductCompare /> */}

                {/* Section Accessories */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho iPad.</span>
                    </div>
                </div>

                <Accessories />
            </div >
        </>
    );
};

export default IpadPage;