import React from "react";
import { Divider } from "@nextui-org/react";
export default function FooterComponent() {
    return (
        <div className="w-full flex justify-center bg-gray-50">
            <div className=" h-[300px] w-4/5">
                <Divider />
                <div className="flex p-8 h-[250px]">
                    <div className="container">
                        <p className=" text-xs font-semibold">Shop</p>
                        <ul className=" pt-3 font-light text-xs">
                            <li>Mac</li>
                            <li>iPad</li>
                            <li>iPhone</li>
                            <li>Watch</li>
                            <li>AirPods</li>
                            <li>Phụ kiện</li>
                        </ul>
                    </div>
                    <div className="container">
                        <p className=" text-xs font-semibold">Account</p>
                        <ul className=" pt-3 text-xs font-light">
                            <li >Quản lý tài khoản</li>
                        </ul>
                    </div>
                    <div className="container">
                        <p className=" text-xs font-semibold">Swipe</p>
                        <ul className=" pt-3  text-xs font-light">
                            <li >Hệ thống cửa hàng</li>
                        </ul>
                    </div>
                    <div className="container">
                        <p className=" text-xs font-semibold">Chính sách</p>
                        <ul className=" pt-3 text-xs font-light">
                            <li>Chính sách giao hàng</li>
                            <li>Chính sách bảo mật</li>
                            <li>Chính sách bảo hành</li>
                        </ul>
                    </div>
                    <div className="container">
                        <p className=" text-xs font-semibold">Tổng đài hỗ trợ</p>
                    </div>
                </div>
                <Divider />
                <p className=" font-light text-xs pt-1">2024@Swipe</p>
            </div>
        </div>
    )
}