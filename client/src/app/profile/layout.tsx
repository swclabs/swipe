"use client"
import React from 'react';
// import Banner from "@/components/layout/banner"
import Link from 'next/link';

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* <Banner /> */}
            <div className="container mx-auto">
                <div className="container mx-auto mt-20 mb-8">
                    <h1 className="text-2xl font-semibold text-center">Tài khoản của bạn</h1>
                    <p className="text-center">Quản lý thông tin cá nhân, địa chỉ, đơn hàng, và nhiều hơn nữa.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link className="bg-white p-4 rounded-lg border" href="/profile/account">
                        <h2 className="text-xl font-semibold flex justify-center items-center">Thông tin cá nhân</h2>
                        <p className='flex justify-center items-center'>Quản lý thông tin cá nhân của bạn</p>
                    </Link>
                    <Link className="bg-white p-4 rounded-lg border" href="/profile/address">
                        <h2 className="text-xl font-semibold flex justify-center items-center">Địa chỉ</h2>
                        <p className='flex justify-center items-center'>Quản lý địa chỉ giao hàng của bạn</p>
                    </Link>
                    <Link className="bg-white p-4 rounded-lg border" href="/profile/order">
                        <h2 className="text-xl font-semibold flex justify-center items-center">Đơn hàng</h2>
                        <p className='flex justify-center items-center'>Xem lịch sử đơn hàng của bạn</p>
                    </Link>
                </div>
            </div>
            {children}
        </div>
    )
}