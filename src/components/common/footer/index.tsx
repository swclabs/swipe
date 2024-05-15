import React from "react";
import { Divider } from "@nextui-org/react";
export default function FooterComponent() {
    return (
        <div className="w-full flex justify-center bg-gray-50">
            <div className=" h-[300px] w-4/5">
                <div className=" ml-8 mr-8">
                    <Divider />
                </div>
                <div className="flex p-8 h-[250px]">
                    <div className="container">
                        <p className=" text-xs font-semibold">Shop</p>
                        <ul className=" pt-3 font-extralight">
                            <li className=" text-xs">Mac</li>
                            <li className=" text-xs">iPad</li>
                            <li className=" text-xs">iPhone</li>
                            <li className=" text-xs">Watch</li>
                            <li className=" text-xs">AirPods</li>
                            <li className=" text-xs">Phụ kiện</li>
                        </ul>
                    </div>
                    <div className="container">
                        <p className=" text-xs font-semibold">Account</p>
                        <ul className=" pt-3">
                            <li className=" text-xs font-extralight">Quản lý tài khoản</li>
                        </ul>
                    </div>
                    <div className="container">
                        <p className=" text-xs font-semibold">Swipe</p>
                        <ul className=" pt-3">
                            <li className=" text-xs font-extralight">Hệ thống cửa hàng</li>
                        </ul>
                    </div>
                    <div className="container">
                        <p className=" text-xs font-semibold">Chính sách</p>
                        <ul className=" pt-3">
                            <li className=" text-xs font-extralight">Chính sách giao hàng</li>
                            <li className=" text-xs font-extralight">Chính sách bảo mật</li>
                            <li className=" text-xs font-extralight">Chính sách bảo hành</li>
                        </ul>
                    </div>
                    <div className="container">
                        <p className=" text-xs font-semibold">Tổng đài hỗ trợ</p>
                    </div>
                </div>
                <div className=" ml-8 mr-8">
                    <Divider />
                    <p className=" font-light text-xs pt-1">2024@Swipe</p>
                </div>
            </div>
        </div>
    )
}