'use client';
import { Card, CardHeader, Image } from "@nextui-org/react";
import './style.css'

export default function Product() {
    return (
        <div className="w-full pb-[10px] hover:pb-0 scrollbar hover:overflow-x-auto overflow-hidden">
            <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">
                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
                <a className="flex snap-center" href="/">
                    <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">iPhone 15 Pro</p>
                            <h4 className="text-white font-semibold text-xl pt-2 pb-2">Titan</h4>
                            <h4 className="text-white font-normal text-sm text-left">Từ 28.999.000đ hoặc 1.181.000đ/tháng mỗi tháng trong 24 tháng*</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/img/store/iphone.jpg"
                        />
                    </Card>
                </a>
                <div className=" flex snap-center">
                    <Card className="h-[500px] sm:w-[400px] m-5 w-[300px] ">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-black uppercase font-bold">KHOẢN THANH TOÁN <br /> HÀNG THÁNG THẤP</p>
                            <h4 className=" text-black font-semibold text-xl pt-2 pb-2">Trả Góp Hàng Tháng <br /> với MoMo.</h4>
                            <h4 className="text-black font-normal text-sm">Trả dần, thời hạn đến 24 tháng và chỉ <br /> trả trước 20%*</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/img/store/iphone2.jpg"
                        />
                    </Card>
                </div>
                <div className=" flex snap-center">
                    <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-black uppercase font-bold">Macbook Pro 14 và 16</p>
                            <h4 className=" text-black font-semibold text-xl pt-2 pb-2">Chấn động, ấn tượng</h4>
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
                <div className=" flex snap-center">
                    <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-black uppercase font-bold">Macbook Pro 14 và 16</p>
                            <h4 className=" text-black font-semibold text-xl pt-2 pb-2">Chấn động, ấn tượng</h4>
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
                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
            </div>
        </div>
    )
}