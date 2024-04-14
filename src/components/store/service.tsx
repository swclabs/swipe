import { Card, CardBody } from "@nextui-org/react";
import { CiCreditCard1 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiBox3Line } from "react-icons/ri";
import { TbCurrencyDong } from "react-icons/tb";

import './style.css'

export default function Service() {
    return (
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
                                <p className=" text-xl font-semibold">Trải nghiệm <span className=" text-blue-500">mua sắm</span> được <span className=" text-blue-500" >cá nhân hóa</span> bởi ứng dụng <span className=" text-blue-500">Swipe</span></p>
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
    )
}