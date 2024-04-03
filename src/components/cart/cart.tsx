import Image from "next/image";
import Link from "next/link";

import cartData from "@/faker/cart";
import { Button } from "@nextui-org/react";


export default function NotLoggedIn() {
    return (
        <div className=' container'>
            <p className=' font-semibold text-xl'>Túi của bạn trống.</p>
            <div className=' pt-5 text-sm'>
                <Link href='/auth/login' className=' text-sm underline font-semibold'>Đăng nhập</Link> để xem sản phẩm của bạn
            </div>
            <div className=' container pt-10 text-xs'>
                <p>Hồ sơ của tôi</p>
                <div className=' container flex flex-col'>
                    <a className=' pt-2 font-semibold'>Đơn hàng</a>
                    <a className=' pt-2 font-semibold'>Mục đã lưu</a>
                    <a className=' pt-2 font-semibold'>Tài khoản</a>
                    <a className=' pt-2 font-semibold'>Đăng nhập</a>
                </div>
            </div>
        </div>
    )
}

export function LoggedIn() {
    return (
        <div className=' container'>
            <div className=" flex justify-between">
                <p className=' font-semibold text-xl'>Giỏ hàng</p>
                <Button color="primary" radius="full">Xem Giỏ hàng</Button>
            </div>
            <div className=' pt-5 text-sm'>
                {cartData.map((value, index) => (
                    <div className=" flex p-3" key={index}>
                        <Image
                            alt="img"
                            src={value.img}
                            width={70}
                            height={70}
                        />
                        <div className=" flex items-center pl-5 font-semibold text-xs">
                            <p>{`${value.name} - ${value.title}`}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=' container pt-10 text-xs'>
                <p>Hồ sơ của tôi</p>
                <div className=' container flex flex-col'>
                    <a className=' pt-2 font-semibold'>Đơn hàng</a>
                    <a className=' pt-2 font-semibold'>Mục đã lưu</a>
                    <a className=' pt-2 font-semibold'>Tài khoản</a>
                    <a className=' pt-2 font-semibold'>Đăng nhập</a>
                </div>
            </div>
        </div>
    )
}