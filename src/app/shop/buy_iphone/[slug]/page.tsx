'use client';
import Banner from "@/components/banner";
import SelectProduct from "@/components/shop/select-product";
import { useState } from "react";


export default function Page({ params }: { params: { slug: string } }) {
    let param = params.slug.split("_");
    let iphone = param[0]
    iphone = iphone.substring(0, 1) + iphone.substring(1, 2).toUpperCase() + iphone.substring(2);
    let pro = param[2] === "pro" ? param[2].charAt(0).toUpperCase() + param[2].slice(1) : "";

    const priceMapping = {
        "undefined-Default-Default": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Default-Default": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro_Max-Default-Default": "Tổng cộng 34.999.000đ hoặc 1.425.000đ/tháng cho 24 tháng",

        "iPhone_15_Pro-Nature-Titanium-Default": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Blue-Titanium-Default": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-White-Titanium-Default": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Black-Titanium-Default": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",

        "iPhone_15_Pro-Nature-Titanium-128GB": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Nature-Titanium-256GB": "Tổng cộng 31.999.000đ hoặc 1.303.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Nature-Titanium-512GB": "Tổng cộng 37.999.000đ hoặc 1.547.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Nature-Titanium-1TB": "Tổng cộng 43.999.000đ hoặc 1.791.000đ/tháng trong 24 tháng",

        "iPhone_15_Pro-Blue-Titanium-128GB": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Blue-Titanium-256GB": "Tổng cộng 31.999.000đ hoặc 1.303.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Blue-Titanium-512GB": "Tổng cộng 37.999.000đ hoặc 1.547.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Blue-Titanium-1TB": "Tổng cộng 43.999.000đ hoặc 1.791.000đ/tháng trong 24 tháng",

        "iPhone_15_Pro-White-Titanium-128GB": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-White-Titanium-256GB": "Tổng cộng 31.999.000đ hoặc 1.303.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-White-Titanium-512GB": "Tổng cộng 37.999.000đ hoặc 1.547.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-White-Titanium-1TB": "Tổng cộng 43.999.000đ hoặc 1.791.000đ/tháng trong 24 tháng",

        "iPhone_15_Pro-Black-Titanium-128GB": "Tổng cộng 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Black-Titanium-256GB": "Tổng cộng 31.999.000đ hoặc 1.303.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Black-Titanium-512GB": "Tổng cộng 37.999.000đ hoặc 1.547.000đ/tháng trong 24 tháng",
        "iPhone_15_Pro-Black-Titanium-1TB": "Tổng cộng 43.999.000đ hoặc 1.791.000đ/tháng trong 24 tháng",

        "iPhone_15_Pro_Max-Nature-Titanium-Default": "Tổng cộng 34.999.000đ hoặc 1.425.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-Blue-Titanium-Default": "Tổng cộng 34.999.000đ hoặc 1.425.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-White-Titanium-Default": "Tổng cộng 34.999.000đ hoặc 1.425.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-Black-Titanium-Default": "Tổng cộng 34.999.000đ hoặc 1.425.000đ/tháng cho 24 tháng",

        "iPhone_15_Pro_Max-Nature-Titanium-256GB": "Tổng cộng 34.999.000đ hoặc 1.425.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-Nature-Titanium-512GB": "Tổng cộng 40.999.000đ hoặc 1.669.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-Nature-Titanium-1TB": "Tổng cộng 46.999.000đ hoặc 1.914.000đ/tháng cho 24 tháng",

        "iPhone_15_Pro_Max-Blue-Titanium-256GB": "Tổng cộng 34.999.000đ hoặc 1.425.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-Blue-Titanium-512GB": "Tổng cộng 40.999.000đ hoặc 1.669.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-Blue-Titanium-1TB": "Tổng cộng 46.999.000đ hoặc 1.914.000đ/tháng cho 24 tháng",

        "iPhone_15_Pro_Max-White-Titanium-256GB": "Tổng cộng 34.999.000đ hoặc 1.425.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-White-Titanium-512GB": "Tổng cộng 40.999.000đ hoặc 1.669.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-White-Titanium-1TB": "Tổng cộng 46.999.000đ hoặc 1.914.000đ/tháng cho 24 tháng",

        "iPhone_15_Pro_Max-Black-Titanium-256GB": "Tổng cộng 34.999.000đ hoặc 1.425.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-Black-Titanium-512GB": "Tổng cộng 40.999.000đ hoặc 1.669.000đ/tháng cho 24 tháng",
        "iPhone_15_Pro_Max-Black-Titanium-1TB": "Tổng cộng 46.999.000đ hoặc 1.914.000đ/tháng cho 24 tháng",
    };

    const [data, setData] = useState<string>("iPhone_15_Pro-Default-Default");

    function getData(value: string) {
        setData(value);
        console.log(value);
    }

    return (
        <>

            {/* <Banner /> */}
            <div className=" w-full bg-white">

                {/* Section Welcome */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <p className="text-base text-red-600">
                            Mới
                        </p>
                        <span className=" text-xl sm:text-5xl font-semibold">
                            Mua {iphone + " " + param[1].toUpperCase() + " " + pro}
                        </span>
                        <p className="font-normal text-sm pt-6" id="price-title">
                            {data && priceMapping[data as keyof typeof priceMapping]}
                            {/*{data}*/}
                        </p>
                        <p className="text-xs pt-2">
                            Trả góp theo tháng với phí dịch vụ thực 1.67%, sau khi thanh toán lần đầu 20%.
                        </p>
                    </div>
                </div>

                {/* Section Product */}
                <SelectProduct slug={params.slug} getData={getData} />
            </div>
        </>
    )
}