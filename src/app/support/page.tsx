"use client"
import React from 'react';
import { Image } from '@nextui-org/react';
import ProductBar from '@/components/support/product-bar';
import Annoucement from '@/components/support/annoucement';

function SupportPage() {
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
            <Image
                alt=""
                className='w-full h-full object-cover'
                src="/img/support/hero-banner-homepage.image.large_2x.jpg"
            ></Image>

            <div className=" w-full bg-gray-50">

                <div className="flex justify-center mt-12 bg-white">
                    <div className=" pt-12 pb-12">
                        <span className=" text-xl sm:text-5xl font-semibold">Hỗ trợ của Apple</span>
                    </div>
                </div>
                <ProductBar />

                {/* Section Search Products */}
                <div className="flex flex-col justify-center items-center bg-white pb-12">
                    <div className=" pt-12 pb-12">
                        <span className=" text-4xl font-semibold">Tìm kiếm các chủ đề khác</span>
                    </div>
                    <span

                        className='w-1/2 px-4 py-2 border border-gray-300 rounded-md flex items-center'
                    >
                        <Image
                            alt='search-icon'
                            src="/img/accessory/search-svgrepo-com.svg"
                            className='w-6 h-6'
                        >
                        </Image>
                        <input
                            placeholder='Tìm kiếm hỗ trợ'
                            type='text'
                            className='text-lg w-full p-2 outline-none border-none bg-transparent'
                        />
                    </span>
                </div>

                <Annoucement />
            </div>
        </>
    );
};

export default SupportPage;