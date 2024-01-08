import Banner from "@/components/banner"
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import React from "react"
import { IoCartOutline } from "react-icons/io5";
import { TbCurrencyDong } from "react-icons/tb";
import { RiBox3Line } from "react-icons/ri";

export default function Store() {
    return (
        <>
            <Banner />
            <div className=" w-full bg-gray-50">
                <div className="flex justify-center">
                    <div className=" w-4/5 p-12">
                        <span className=" text-5xl font-medium">Cửa hàng.</span>
                        <span className=" text-5xl font-medium text-gray-500">Cách tốt nhất để</span>
                        <p className=" text-5xl font-medium text-gray-500">Mua sản phẩm mà bạn thích</p>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className=" w-4/5 p-12 flex justify-between">
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/mac.png"
                                alt="mac"
                                width={100}
                                height={100}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">Mac</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/iphone.png"
                                alt="iphone"
                                width={100}
                                height={100}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">iPhone</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/ipad.png"
                                alt="mac"
                                width={100}
                                height={100}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">iPad</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/watch.png"
                                alt="watch"
                                width={100}
                                height={50}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">Apple Watch</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/airpods.png"
                                alt="airpods"
                                width={100}
                                height={50}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">AirPods</p>
                        </div>
                        <div className=" w-[100px]">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/img/phukien.png"
                                alt="phukien"
                                width={100}
                                height={50}

                            />
                            <p className=" text-sm font-semibold text-center pt-4">Phụ kiện</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-4/5 pt-12 pl-12 pr-12">
                        <h1 className=" text-2xl font-semibold">
                            <span>Thế hệ mới nhất.</span>
                            <span className=" text-gray-500"> Xem ngay có gì mới</span>
                        </h1>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className=" w-4/5 p-12 flex justify-between">
                        <Card className="col-span-12 sm:col-span-4 h-[400px]">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">iPhone 15 Pro</p>
                                <h4 className="text-white font-semibold text-2xl pt-2 pb-2">Titan</h4>
                                <h4 className="text-white font-normal text-sm">Từ 28.999.000đ hoặc 1.181.000đ/tháng mỗi tháng trong 24 tháng*</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/img/store/iphone.jpg"
                            />
                        </Card>
                        <Card className="col-span-12 sm:col-span-4 h-[400px]">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-black uppercase font-bold">KHOẢN THANH TOÁN <br /> HÀNG THÁNG THẤP</p>
                                <h4 className=" text-black font-semibold text-2xl pt-2 pb-2">Trả Góp Hàng Tháng với MoMo.</h4>
                                <h4 className="text-black font-normal text-sm">Trả dần, thời hạn đến 24 tháng và chỉ trả trước 20%*</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/img/store/iphone2.jpg"
                            />
                        </Card>
                        <Card className="col-span-12 sm:col-span-4 h-[400px]">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-black uppercase font-bold">Macbook Pro 14 và 16</p>
                                <h4 className=" text-black font-semibold text-2xl pt-2 pb-2">Chấn động, ấn tượng</h4>
                                <h4 className="text-black font-normal text-sm">Từ 39.999.000đ hoặc 1.629.000đ/thángmỗi tháng trong 24 tháng*</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/img/store/mac.jpg"
                            />
                        </Card>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-4/5 pt-12 pl-12 pr-12">
                        <h1 className=" text-2xl font-semibold">
                            <span>Swiftcart.</span>
                            <span className=" text-gray-500"> Tạo nên nhiều sự khác biệt</span>
                        </h1>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className=" w-4/5 p-12 flex justify-between">
                        <Card className="w-[300px]">
                            <CardBody>
                                <div className=" p-3">
                                    <div className=" text-blue-500 text-3xl pb-3">
                                        <IoCartOutline />
                                    </div>
                                    <p className=" text-xl font-semibold">Trải nghiệm <span className=" text-blue-500">mua sắm</span> được <span className=" text-blue-500" >cá nhân hóa</span> bởi ứng dụng <span className=" text-blue-500">SwiftCart</span></p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="w-[300px]">
                            <CardBody>
                                <div className=" p-3">
                                    <div className=" text-purple-500 text-3xl pb-3">
                                        <TbCurrencyDong />
                                    </div>
                                    <p className=" text-xl font-semibold">Thanh toán <span className=" text-purple-500">lãi suất thấp</span> thời hạn đến 24 tháng</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="w-[300px]">
                            <CardBody>
                                <div className=" p-3">
                                    <div className=" text-green-500 text-3xl pb-3">
                                        <RiBox3Line />
                                    </div>
                                    <p className=" text-xl font-semibold">Giao hàng <span className=" text-green-500">miễn phí</span></p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}