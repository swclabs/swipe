'use client';
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import './style.css'

export default function Accessories() {
    return (


        <div className="flex justify-center">
            <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                <div className='grid grid-cols-2 gap-4'>
                    <a className=" flex snap-center" href="/">
                        <Card>
                            <CardHeader className="flex flex-col items-center justify-center">
                                <h2 className="font-semibold text-3xl pt-8 pb-2">
                                    MagSafe
                                </h2>
                                <p className="px-4 text-lg text-center">
                                    Gắn thêm một ốp lưng, một ví da từ tính hay cả hai. Để sạc không dây nhanh và hiệu quả.
                                </p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover"
                                    src="/img/iphone/magsafe_large.jpg"
                                />
                            </CardBody>
                        </Card>
                    </a>
                    <a className=" flex snap-center" href="/">
                        <Card>
                            <CardHeader className="flex flex-col items-center justify-center">
                                <h2 className="font-semibold text-3xl pt-8 pb-2">
                                    AirTag
                                </h2>
                                <p className="px-4 text-lg text-center">
                                    Gắn một cái vào chìa khóa của bạn. Đặt một cái khác vào ba lô. Nhỡ có thất lạc, chỉ cần dùng ứng dụng Tìm.
                                </p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover"
                                    src="/img/iphone/airtag_large.jpg"
                                />
                            </CardBody>
                        </Card>
                    </a>
                </div>
            </div>

        </div>

    )
}