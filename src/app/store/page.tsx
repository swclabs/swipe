import Banner from "@/components/banner"
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import React from "react"
import { IoCartOutline } from "react-icons/io5";
import { TbCurrencyDong } from "react-icons/tb";
import { RiBox3Line } from "react-icons/ri";
import { GrNext, GrPrevious } from "react-icons/gr";
import ShortCut from "@/components/shortcut";
import './style.css'
import Product from "@/components/store/product";
import Accessory from "@/components/store/accessory";
import { CiCreditCard1 } from "react-icons/ci";

export default function Store() {
    return (
        <>
            <Banner />
            <div className=" w-full bg-gray-50">
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 p-5">
                        <span className=" text-xl sm:text-5xl font-medium">Cửa hàng.</span>
                        <span className=" text-xl sm:text-5xl font-medium text-gray-500">Cách tốt nhất để</span>
                        <p className=" text-xl sm:text-5xl font-medium text-gray-500">Mua sản phẩm mà bạn thích</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className=" flex w-full sm:w-4/5 sm:p-12 sm:justify-between overflow-auto no-scrollbar">
                        <div className=" flex">
                            <div className=" w-[100px] mr-[10px]">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/mac.png"
                                    alt="mac"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">Mac</p>
                            </div>
                        </div>
                        <div className=" flex">
                            <div className=" w-[100px] mr-[10px]">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/iphone.png"
                                    alt="iphone"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">iPhone</p>
                            </div>
                        </div>
                        <div className=" flex">
                            <div className=" w-[100px] mr-[10px]">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/ipad.png"
                                    alt="mac"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">iPad</p>
                            </div>
                        </div>
                        <div className=" flex">
                            <div className=" w-[100px] mr-[10px]">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/watch.png"
                                    alt="watch"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">Apple Watch</p>
                            </div>
                        </div>
                        <div className=" flex">
                            <div className=" w-[100px] mr-[10px]">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/airpods.png"
                                    alt="airpods"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">AirPods</p>
                            </div>
                        </div>
                        <div className=" flex">
                            <div className=" w-[100px] mr-[10px]">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/img/phukien.png"
                                    alt="phukien"
                                    width={100}
                                    height={100}

                                />
                                <p className=" text-sm font-semibold text-center pt-4">Phụ kiện</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="sm:w-4/5 sm:pt-12 pb-10 sm:pb-12 sm:pl-12 sm:pr-12 pt-10">
                        <h1 className=" sm:text-2xl font-semibold">
                            <span>Thế hệ mới nhất.</span>
                            <span className=" text-gray-500"> Xem ngay có gì mới</span>
                        </h1>
                    </div>
                </div>
                <Product />

                <div className="flex justify-center">
                    <div className="w-4/5 sm:pt-12 sm:pl-12 sm:pr-12 pt-10">
                        <h1 className=" sm:text-2xl font-semibold">
                            <span>Swiftcart.</span>
                            <span className=" text-gray-500"> Tạo nên nhiều sự khác biệt</span>
                        </h1>
                    </div>
                </div>

                <div className=" w-full pt-12 pb-[10px] hover:pb-0 hover:overflow-auto scrollbar overflow-hidden">
                    <div className=" relative snap-x snap-mandatory flex justify-between">
                        <div className=" sm:w-1/12 shrink-0 snap-center">
                            <div className="shrink-0"></div>
                        </div>
                        <div className=" snap-center">
                            <Card className="w-[300px] h-[200px] m-5">
                                <CardBody>
                                    <div className=" p-3">
                                        <div className=" text-blue-500 text-3xl pb-3">
                                            <IoCartOutline />
                                        </div>
                                        <p className=" text-xl font-semibold">Trải nghiệm <span className=" text-blue-500">mua sắm</span> được <span className=" text-blue-500" >cá nhân hóa</span> bởi ứng dụng <span className=" text-blue-500">SwiftCart</span></p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className=" snap-center">
                            <Card className="w-[300px] h-[200px] m-5">
                                <CardBody>
                                    <div className=" p-3">
                                        <div className=" text-purple-500 text-3xl pb-3">
                                            <TbCurrencyDong />
                                        </div>
                                        <p className=" text-xl font-semibold">Thanh toán <span className=" text-purple-500">lãi suất thấp</span> thời hạn đến 24 tháng</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className=" snap-center">
                            <Card className="w-[300px] h-[200px] m-5">
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
                        <div className=" snap-center">
                            <Card className="w-[300px] h-[200px] m-5">
                                <CardBody>
                                    <div className=" p-3">
                                        <div className=" text-red-500 text-3xl pb-3">
                                            <CiCreditCard1 />
                                        </div>
                                        <p className=" text-xl font-semibold">Mua hàng <span className=" text-red-500">nhận điểm tín dụng</span> để mua thiết bị mới</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className=" sm:w-1/12 shrink-0 snap-center">
                            <div className="shrink-0"></div>
                        </div>
                    </div>
                </div>

                <div className=" pt-10 pb-10 sm:pb-12 flex justify-center">
                    <div className="sm:w-4/5 sm:pl-12 sm:pr-12">
                        <h1 className=" sm:text-2xl font-semibold">
                            <span>Phụ kiện.</span>
                            <span className=" text-gray-500"> Tạo nét riêng</span>
                        </h1>
                    </div>
                </div>

                <Accessory />
                {/* <ShortCut /> */}
            </div>
        </>
    )
}