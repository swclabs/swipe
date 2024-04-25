"use client"
import React from 'react';
import ProductBar from '@/components/support/product-bar';

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

            <div className=" w-full bg-gray-50">

                <div className="flex justify-center mt-12 bg-white">
                    <div className=" pt-12 pb-12">
                        <span className=" text-xl sm:text-5xl font-semibold">Hỗ trợ của Apple</span>
                    </div>
                </div>
                <ProductBar />

            </div>
        </>
    );
};

export default SupportPage;