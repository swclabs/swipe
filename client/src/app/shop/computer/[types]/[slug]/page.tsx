'use client';
import ShopCarousel from "@/components/shop/carousel";
import Colors from "@/components/shop/colors";
import Spec from "@/components/shop/spec";
import Version from "@/components/shop/version";
import iphoneDetail from "@/faker/iphone-detail";
import { ProductDetail } from "@/types/products";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { laptop } from "@/faker/mac-detail";


export default function Page({ params }: { params: { slug: string } }) {
    const [details, setDetails] = useState<ProductDetail[]>(laptop)
    const [version, setVersion] = useState<number>(-1)
    const [color, setColor] = useState<number>(-1)
    useEffect(() => {
        setDetails(laptop)
    }, [])
    return (
        <div className=" container w-[87%] m-auto">
            <div className=" container pt-10">
                <div className=" text-red-500 font-medium pt-5">Mới</div>
                <div className=" font-semibold text-5xl pt-2">Mua {details[0]?.name}</div>
                <div className=" font-base text-xs pt-2">{details[0]?.SSD[0].price}</div>
            </div>

            <div className="flex container flex-col md:flex-row pt-14 relative max-h-max">
                <div className="container md:pr-14 w-full md:w-2/3">
                    <div className=" w-full sticky top-[100px]">
                        <ShopCarousel product={details}
                            version={version}
                            color={color}
                            setColor={setColor}
                            setVersion={setVersion}
                        />
                    </div>

                </div>
                <div className=" md:w-1/3 py-5 md:py-0">
                    <Version
                        product={details}
                        version={version}
                        setVersion={setVersion}
                    />

                    <div className=' mt-5 text-xs'>
                        Trả góp theo tháng với phí dịch vụ thực 1.67%, sau khi thanh toán lần đầu 20%.
                        Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.
                    </div>

                    <Colors
                        product={details}
                        version={version}
                        color={color}
                        setColor={setColor}
                        setVersion={setVersion}
                    />

                    <Spec
                        setColor={setColor}
                        color={color}
                        product={details}
                        version={version}
                        setVersion={setVersion}
                    />
                </div>
            </div>
            <div className=" container mt-10">
                <div className=" font-semibold text-2xl">
                    Gói bảo hành AppleCare+.
                    <span className=" text-gray-400">Bảo vệ iPhone mới của bạn.</span>
                </div>
                <div className=" container flex md:flex-row flex-col mt-5 gap-5">
                    <button className={`container border-gray-400 border-1 rounded-xl`}>
                        <div className=' p-4 text-left'>
                            <div className=" font-semibold">
                                AppleCare+
                            </div>
                            <div className=" text-sm">
                                3.999.000đhoặc163.000đ/thángmỗi tháng cho 24 thángthángChú thích*
                                Ở mức phí dịch vụ 1.67%, sau khi thanh toán lần đầu 20% là 800.000đ
                            </div>
                            <div className=" w-full border-t-[1px] border-black mt-5" />
                            <ul className="list-disc p-4 text-xs">
                                <li>
                                    Nay đã có dịch vụ sửa chữa không hạn chế cho trường hợp hư hỏng do sự cố bất ngờ.
                                </li>
                                <li>
                                    Dịch vụ sửa chữa được Apple chứng nhận sử dụng linh kiện Apple chính hãng
                                </li>
                                <li>
                                    Dịch Vụ Thay Thế Cấp Tốc - Chúng tôi sẽ gửi cho bạn một thiết bị thay thế để bạn không phải chờ sửa chữa
                                </li>
                            </ul>
                        </div>
                    </button>
                    <button className={`container border-gray-400 border-[1.5px] rounded-xl`}>
                        <div className=' p-4'>
                            <div className=" font-semibold">
                                Không có bảo hành AppleCare+
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
                <div className=" container flex w-4/5 flex-col md:flex-row">
                    <div className=" container font-semibold text-3xl p-10">
                        iPhone 15 mới của bạn.
                        <span className=" text-gray-400">Theo cách bạn muốn.</span>
                    </div>
                    <div className=" container p-10">
                        <div className=" mb-2">iPhone 15 128GB Xanh Dương</div>
                        <div className=" font-semibold">Tổng cộng 22.999.000đ</div>
                    </div>
                    <div className=" container p-10">
                        <div className=" font-semibold">Giao hàng:</div>
                        <div className=" text-sm">Còn hàng</div>
                        <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

                        <Button className=" w-full" color="primary">thêm vào giỏ hàng</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}