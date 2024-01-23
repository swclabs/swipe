import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import './style.css'

export default function Accessory() {
    return (
        <div className="w-full pb-[10px] hover:pb-0 scrollbar hover:overflow-x-auto overflow-hidden">
            <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">
                <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                </div>
                <div className="flex snap-center">
                    <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <h4 className="text-black font-semibold text-2xl pt-2 pb-2">Đón máy mới về</h4>
                            <h4 className="text-black font-normal text-sm">Khám phá màu sắc mới cho phụ kiện yêu thích của bạn</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/img/store/phukien1.jpg"
                        />
                    </Card>
                </div>
                <div className=" flex snap-center">
                    <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
                        <CardBody className="p-5">
                            <div className=" flex-col h-full relative">
                                <Image
                                    alt="pencil"
                                    src="/img/store/pencil.jpg"
                                    className="z-0 w-full h-full object-cover"
                                />
                                <div className=" container">
                                    <div className=" text-xs text-red-600 pb-1">Mới</div>
                                    <div className=" font-medium">Apple Pencil (USB-C)</div>
                                    <div className=" font-normal text-sm absolute bottom-0">2.099.000đ</div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className=" flex snap-center">
                    <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
                        <CardBody className="p-5">
                            <div className="flex-col h-full relative">
                                <Image
                                    alt="pencil"
                                    src="/img/store/oplung.jpg"
                                    className="w-full h-full object-cover"
                                />
                                <div className=" container">
                                    <div className=" text-xs text-red-600 pb-1">Mới</div>
                                    <div className=" font-medium">Ốp Lưng Vải Tinh Dệt MagSafe <br /> cho iPhone 15 Pro - Nâu Xám</div>
                                    <div className=" font-normal text-sm absolute bottom-0">1.699.000đ</div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className=" flex snap-center">
                    <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
                        <CardBody className="p-5">
                            <div className="flex-col h-full relative">
                                <Image
                                    alt="pencil"
                                    src="/img/store/oplung.jpg"
                                    className="w-full h-full object-cover"
                                />
                                <div className=" container">
                                    <div className=" text-xs text-red-600 pb-1">Mới</div>
                                    <div className=" font-medium">Ốp Lưng Vải Tinh Dệt MagSafe <br /> cho iPhone 15 Pro - Nâu Xám</div>
                                    <div className=" font-normal text-sm absolute bottom-0">1.699.000đ</div>
                                </div>
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