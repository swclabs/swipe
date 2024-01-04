import React from "react";
import { Divider } from "@nextui-org/react";
export default function FooterComponent() {
    return (
        <div className=" bg-gray-50 h-[300px] mt-5">
            <div className="flex p-8 h-[250px]">
                <div className="container">
                    <p className=" text-xs font-semibold">Shop</p>
                    <ul className=" pt-3">
                        <li className=" text-xs font-extralight">Mac</li>
                        <li className=" text-xs font-extralight">iPad</li>
                        <li className=" text-xs font-extralight">iPhone</li>
                        <li className=" text-xs font-extralight">Watch</li>
                        <li className=" text-xs font-extralight">AirPods</li>
                        <li className=" text-xs font-extralight">Phụ kiện</li>
                    </ul>
                </div>
                <div className="container">
                    <p className=" text-xs font-semibold">Account</p>
                    <ul className=" pt-3">
                        <li className=" text-xs font-extralight">Quản lý tài khoản</li>
                    </ul>
                </div>
                <div className="container">
                    <p className=" text-xs font-semibold">Swifcart</p>
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
                <p className=" font-light text-xs pt-1">2024@Swifcart</p>
            </div>
        </div>
    )
}