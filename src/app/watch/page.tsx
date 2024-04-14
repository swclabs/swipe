"use client"
import React from 'react';
import Banner from "@/components/banner"
import ProductBar from '@/components/watch/product-bar';
import Product from '@/components/watch/product';
import { Image } from '@nextui-org/react';

function WatchPage() {
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

            <div className=" w-full bg-white">
                <ProductBar />
                {/* <Banner /> */}

                <div className='bg-black mb-8'>
                    <div className='flex flex-col items-center justify-center text-center pt-8'>
                        <Image
                            alt='logo_war_watch_s9'
                            className='object-center'
                            src='/img/watch/logo_watch_s9_large.png'
                        >
                        </Image>
                    </div>
                    <div className='flex items-center justify-center text-center py-4'>
                        <h2 className=" text-xl sm:text-5xl font-medium text-white">Thông minh hơn. Sáng hơn. Quyền năng hơn.</h2>
                    </div>
                    <div className='flex items-center justify-center text-center py-4'>
                        <p className=" text-xl sm:text-2xl font-normal text-white">Từ 10.499.000đ</p>
                    </div>
                    <div className='flex items-center justify-center text-center py-4'>
                        <a className="text-blue-600" href="#">
                            <span className="buy"> Mua </span>
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            alt='tile_s9_avail'
                            className='object-center'
                            src='/img/watch/tile_s9_avail_large.jpg'
                        >
                        </Image>
                    </div>
                </div>

                <div className='bg-gray-100 mb-8'>
                    <div className='flex flex-col items-center justify-center text-center pt-8'>
                        <Image
                            alt='logo_watch_ultra_2'
                            className='object-center'
                            src='/img/watch/logo_watch_ultra_2_large.png'
                        >
                        </Image>
                    </div>
                    <div className='flex items-center justify-center text-center py-4'>
                        <h2 className=" text-xl sm:text-5xl font-medium">
                            Một đẳng cấp
                            <br />
                            phiêu lưu mới.
                        </h2>
                    </div>
                    <div className='flex items-center justify-center text-center py-4'>
                        <p className=" text-xl sm:text-2xl font-normal">Từ 21.999.000đ</p>
                    </div>
                    <div className='flex items-center justify-center text-center py-4'>
                        <a className="text-blue-600" href="#">
                            <span className="buy"> Mua </span>
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            alt='tile_ultra_2'
                            className='object-center'
                            src='/img/watch/tile_ultra_2_large.jpg'
                        >
                        </Image>
                    </div>
                </div>

                {/* Product Compare */}
                <div className="flex justify-center">
                    <div className=" pt-12 pb-12">
                        <span className=" text-xl sm:text-5xl font-medium">Apple Watch nào phù hợp với bạn?</span>
                    </div>
                </div>

                {/* <ProductCompare /> */}
                <Product />

                <div className="flex justify-center text-center">
                    <div className=" pt-12 pb-12">
                        <span className=" text-xl sm:text-5xl font-medium">
                            Nhận tới 4.300.000đ khi mua
                            <br />Apple Watch mới.
                        </span>
                        <p className='text-xl font-normal py-4'>
                            Với Apple Trade In, chỉ cần đưa Apple Watch đủ điều kiện của bạn cho chúng tôi
                            <br />
                            để lấy điểm tín dụng mua thiết bị mới. Tốt cho cả bạn và môi trường.
                        </p>
                        <a className="text-blue-600 text-xl" href="#">
                            <span className="buy"> Tính giá trị trao đổi cho thiết bị của bạn </span>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center text-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='container mx-auto bg-gray-100'>
                                <p className='text-xl sm:text-2xl font-medium pt-10 pb-4'>Tại Sao Nên Dùng Apple Watch</p>
                                <h2 className='text-xl sm:text-5xl font-medium pb-6'>
                                    Đây là thiết bị tối ưu
                                    <br />
                                    cho cuộc sống
                                    <br />
                                    khỏe mạnh.
                                </h2>
                                <a className="text-blue-600 text-xl" href="#">
                                    <span className="buy"> Tìm hiểu thêm </span>
                                </a>
                                <Image
                                    alt='tile_why_watch'
                                    className='object-center pt-8'
                                    src='/img/watch/tile_why_watch_large.jpg'
                                >
                                </Image>
                            </div>
                            <div className='container mx-auto bg-gray-100'>
                                <p className='text-xl sm:text-2xl font-medium pt-10 pb-4'>watchOS 10</p>
                                <h2 className='text-xl sm:text-5xl font-medium pb-6'>
                                    Mọi thứ bạn yêu.
                                    <br />
                                    Tuyệt diệu
                                    <br />
                                    chưa từng thấy.
                                </h2>
                                <a className="text-blue-600 text-xl" href="#">
                                    <span className="buy"> Tìm hiểu thêm </span>
                                </a>
                                <Image
                                    alt='watchos_banner'
                                    className='object-center pt-8'
                                    src='/img/watch/watchos_banner_large.jpg'
                                >
                                </Image>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className=" pt-12 pb-12 ">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu của Apple Watch</span>
                    </div>
                </div>

                <div className="flex justify-center text-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col h-full bg-[#e9e8ee] justify-between'>
                                <div className='h-96'>
                                    <h2 className='text-xl sm:text-5xl font-medium pt-14 pb-6'>
                                        Diện cho cổ tay.
                                        <br />
                                        Theo phong cách
                                        <br />
                                        hoàn toàn mới.
                                    </h2>
                                    <a className="text-blue-600 text-xl" href="#">
                                        <span className="buy"> Mua dây đeo mới nhất </span>
                                    </a>
                                </div>
                                <div>
                                    <Image
                                        alt='tile_bands'
                                        className='w-full h-full object-cover'
                                        src='/img/watch/tile_bands_large.jpg'
                                    >
                                    </Image>
                                </div>
                            </div>

                            <div className=' flex flex-col h-full bg-gray-100 justify-between'>
                                <div className='h-96'>
                                    <h2 className='text-xl sm:text-5xl font-medium pt-14 pb-6'>
                                        Thiên tài
                                        <br />
                                        âm thanh mới
                                        <br />
                                        nhà AirPods.
                                    </h2>
                                    <p className='text-xl sm:text-xl font-normal pb-4'>
                                        Khám phá tất cả các phiên bản
                                        <br />
                                        AirPods và tìm phiên bản phù hợp
                                        <br />
                                        với bạn nhất.
                                    </p>
                                    <a className="text-blue-600 text-xl" href="#">
                                        <span className="buy"> Tìm hiểu thêm </span>
                                    </a>
                                </div>
                                <div>
                                    <Image
                                        className='w-full h-full object-cover'
                                        alt='airpods_large'
                                        src='/img/watch/airpods_large.jpg'
                                    >
                                    </Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default WatchPage;