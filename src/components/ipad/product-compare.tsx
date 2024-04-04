'use client';
import { Image } from "@nextui-org/react";
import './style.css'

export default function ProductCompare() {
    return (
        <div className="flex justify-center text-center">
            <div className="pl-8 w-[1000px] bg-white">
                <div className='grid grid-cols-5 gap-4'>

                    {/* Ipad Pro */}
                    <div className="container mx-auto w-44">
                        <div className="flex flex-col justify-center items-center text-center">
                            <div className="h-48">
                                <a href="#">
                                    <Image
                                        removeWrapper
                                        alt="Card background"
                                        className="z-0 w-full h-full object-cover"
                                        src="/img/ipad/compare_ipad_pro.png"
                                    />
                                </a>
                            </div>

                            <div className="flex justify-center pt-4">
                                <img src="/img/ipad/compare_ipad_pro_swatches_large.png"></img>
                            </div>

                            <div className="h-20 py-4">
                                <h1 className="text-center font-semibold text-2xl">iPad Pro</h1>
                            </div>

                            <div className="h-28">
                                <p className="text-center">
                                    Trải nghiệm <br />
                                    iPad cực đỉnh <br />
                                    với công nghệ <br />
                                    tiên tiến nhất.
                                </p>
                            </div>
                            <h4 className="font-semibold text-xl text-center py-2">Từ 21.199.000đ</h4>
                            <a className="text-center py-4 text-blue-600" href="#">
                                <span className="buy"> Mua </span>
                            </a>
                        </div>

                        <div className="border-b-1"></div>

                        <div className="grid grid-rows-9 gap-4">
                            <div className="h-52 w-full flex flex-col items-center justify-center text-center gap-y-3">
                                <h4 className="font-semibold text-xl">
                                    12,9″ hoặc 11″
                                </h4>
                                <p className="font-normal text-sm h-8">
                                    Màn hình Liquid Retina XDR<br />
                                    hoặc màn hình Liquid Retina
                                </p>
                                <p className="font-normal text-sm">
                                    Công nghệ ProMotion
                                </p>
                                <p className="font-normal text-sm">
                                    Dải màu rộng P3
                                </p>
                                <p className="font-normal text-sm">
                                    Lớp phủ chống phản chiếu
                                </p>
                            </div>
                            <div className="h-24 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_chip_m2.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm">
                                    Chip M2
                                </p>

                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_camera_front_portrait_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-14">
                                    Camera trước <br />
                                    Ultra Wide 12MP
                                </p>
                                <p className="font-normal text-sm h-8 pt-2">
                                    Hệ thống camera <br />
                                    TrueDepth
                                </p>
                            </div>
                            <div className="h-48 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_camera_dual_lens_1_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Camera Wide 12MP</p>
                                <p className="font-normal text-sm pb-2">Camera Ultra Wide 10MP</p>
                                <p className="font-normal text-sm pb-2">Video 4K, ProRes</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_authentication_face_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Face ID</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_connector_thunderbolt_usb_c.png"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Cổng kết nối USB‑C hỗ trợ <br />
                                    Thunderbolt / USB 4</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_cellular_5g.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Mạng di động 5G</p>
                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_pencil_2ndgen_usbc.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-12">
                                    Hỗ trợ Apple Pencil <br />
                                    (thế hệ thứ 2)</p>
                                <p className="font-normal text-sm h-12">
                                    Hỗ trợ Apple Pencil <br />
                                    (USB‑C)</p>
                            </div>
                            <div className="h-52 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_keyboard_magic_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Hỗ trợ <br />
                                    Magic Keyboard</p>
                            </div>
                        </div>
                    </div>

                    {/* Ipad Air */}
                    <div className="container mx-auto w-44">
                        <div className="flex flex-col justify-center items-center text-center">
                            <div className="h-48 content-end">
                                <a href="#">
                                    <Image
                                        removeWrapper
                                        alt="Card background"
                                        className="object-cover"
                                        src="/img/ipad/compare_ipad_air.png"
                                    />
                                </a>
                            </div>

                            <div className="flex justify-center pt-4">
                                <img src="/img/ipad/compare_ipad_air_swatches_large.png"></img>
                            </div>

                            <div className="h-20 py-4">
                                <h1 className="text-center font-semibold text-2xl">iPad Air</h1>
                            </div>

                            <div className="h-28">
                                <p className="text-center">
                                    Hiệu năng mạnh mẽ <br />
                                    trong một thiết kế <br />
                                    mỏng nhẹ.
                                </p>
                            </div>
                            <h4 className="font-semibold text-xl text-center py-2">Từ 15.599.000đ</h4>
                            <a className="text-center py-4 text-blue-600" href="#">
                                <span className="buy"> Mua </span>
                            </a>
                        </div>

                        <div className="border-b-1"></div>

                        <div className="grid grid-rows-9 gap-4">
                            <div className="h-52 w-full flex flex-col items-center justify-center text-center gap-y-3">
                                <h4 className="font-semibold text-xl">
                                    10,9″
                                </h4>
                                <p className="font-normal text-sm h-8">
                                    Màn hình Liquid Retina
                                </p>
                                <p className="font-normal text-sm">
                                    -
                                </p>
                                <p className="font-normal text-sm">
                                    Dải màu rộng P3
                                </p>
                                <p className="font-normal text-sm">
                                    Lớp phủ chống phản chiếu
                                </p>
                            </div>
                            <div className="h-24 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_chip_m1_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm">
                                    Chip M1
                                </p>

                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_camera_front_portrait_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-14">
                                    Camera trước <br />
                                    Ultra Wide 12MP
                                </p>
                                <p className="font-normal text-sm h-8 pt-2">
                                    —
                                </p>
                            </div>
                            <div className="h-48 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_camera_single_lens_6_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Camera Wide 12MP</p>
                                <p className="font-normal text-sm pb-2">—</p>
                                <p className="font-normal text-sm pb-2">Video 4K</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_authentication_vertical_touch_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Touch ID ở nút nguồn</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_connector_usb_c_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Cổng kết nối USB‑C
                                </p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_cellular_5g.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Mạng di động 5G</p>
                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_pencil_2ndgen_usbc.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-12">
                                    Hỗ trợ Apple Pencil <br />
                                    (thế hệ thứ 2)</p>
                                <p className="font-normal text-sm h-12">
                                    Hỗ trợ Apple Pencil <br />
                                    (USB‑C)</p>
                            </div>
                            <div className="h-52 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_keyboard_magic_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Hỗ trợ <br />
                                    Magic Keyboard</p>
                            </div>
                        </div>
                    </div>

                    {/* Ipad 10th generation */}
                    <div className="container mx-auto w-44">
                        <div className="flex flex-col justify-center items-center text-center">
                            <div className="h-48 content-end">
                                <a href="#">
                                    <Image
                                        removeWrapper
                                        alt="Card background"
                                        className="object-cover"
                                        src="/img/ipad/compare_ipad_10_9_large.png"
                                    />
                                </a>
                            </div>

                            <div className="flex justify-center pt-4">
                                <img src="/img/ipad/compare_ipad_10_9_swatches_large.png"></img>
                            </div>

                            <div className="h-20 py-4">
                                <h1 className="text-center font-semibold text-2xl">
                                    iPad </h1>
                                <p className="font-semibold">thế hệ thứ 10</p>
                            </div>

                            <div className="h-28">
                                <p className="text-center">
                                    iPad màn hình toàn <br />
                                    phần, đầy màu sắc. Cho <br />
                                    mọi tác vụ hàng ngày.
                                </p>
                            </div>
                            <h4 className="font-semibold text-xl text-center py-2">Từ 11.499.000đ</h4>
                            <a className="text-center py-4 text-blue-600" href="#">
                                <span className="buy"> Mua </span>
                            </a>
                        </div>

                        <div className="border-b-1"></div>

                        <div className="grid grid-rows-9 gap-4">
                            <div className="h-52 w-full flex flex-col items-center justify-center text-center gap-y-3">
                                <h4 className="font-semibold text-xl">
                                    10,9″
                                </h4>
                                <p className="font-normal text-sm h-8">
                                    Màn hình Liquid Retina
                                </p>
                                <p className="font-normal text-sm">
                                    -
                                </p>
                                <p className="font-normal text-sm">
                                    Màu sRGB
                                </p>
                                <p className="font-normal text-sm">
                                    -
                                </p>
                            </div>
                            <div className="h-24 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_chip_a14_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm">
                                    Chip A14 Bionic
                                </p>

                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_camera_front_landscape_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-14">
                                    Camera trước <br />
                                    Ultra Wide 12MP <br />
                                    trên cạnh ngang
                                </p>
                                <p className="font-normal text-sm h-8 pt-2">
                                    —
                                </p>
                            </div>
                            <div className="h-48 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_camera_single_lens_6_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Camera Wide 12MP</p>
                                <p className="font-normal text-sm pb-2">—</p>
                                <p className="font-normal text-sm pb-2">Video 4K</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_authentication_vertical_touch_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Touch ID ở nút nguồn</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_connector_usb_c_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Cổng kết nối USB‑C
                                </p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_cellular_5g.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Mạng di động 5G</p>
                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_pencil_usbc_1stgen_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-12">
                                    Hỗ trợ Apple Pencil <br />
                                    (USB‑C)
                                </p>
                                <p className="font-normal text-sm h-12">
                                    Hỗ trợ Apple Pencil <br />
                                    (thế hệ thứ 1)
                                </p>
                            </div>
                            <div className="h-52 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_keyboard_magic_folio_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Hỗ trợ <br />
                                    Magic Keyboard Folio</p>
                            </div>
                        </div>
                    </div>

                    {/* Ipad 9th generation */}
                    <div className="container mx-auto w-44">
                        <div className="flex flex-col justify-center items-center text-center">
                            <div className="h-48 content-end">
                                <a href="#">
                                    <Image
                                        removeWrapper
                                        alt="Card background"
                                        className="object-cover"
                                        src="/img/ipad/compare_ipad_10_2_large.png"
                                    />
                                </a>
                            </div>

                            <div className="flex justify-center pt-4">
                                <img src="/img/ipad/compare_ipad_10_2_swatches_large.png"></img>
                            </div>

                            <div className="h-20 py-4">
                                <h1 className="text-center font-semibold text-2xl">
                                    iPad </h1>
                                <p className="font-semibold">thế hệ thứ 9</p>
                            </div>

                            <div className="h-28">
                                <p className="text-center">
                                    Tất cả tính năng bạn cần <br />
                                    gói gọn trong chiếc iPad <br />
                                    vừa túi tiền nhất.
                                </p>
                            </div>
                            <h4 className="font-semibold text-xl text-center py-2">Từ 8.399.000đ</h4>
                            <a className="text-center py-4 text-blue-600" href="#">
                                <span className="buy"> Mua </span>
                            </a>
                        </div>

                        <div className="border-b-1"></div>

                        <div className="grid grid-rows-9 gap-4">
                            <div className="h-52 w-full flex flex-col items-center justify-center text-center gap-y-3">
                                <h4 className="font-semibold text-xl">
                                    10,2″
                                </h4>
                                <p className="font-normal text-sm h-8">
                                    Màn hình Retina
                                </p>
                                <p className="font-normal text-sm">
                                    -
                                </p>
                                <p className="font-normal text-sm">
                                    Màu sRGB
                                </p>
                                <p className="font-normal text-sm">
                                    -
                                </p>
                            </div>
                            <div className="h-24 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_chip_a13_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm">
                                    Chip A13 Bionic
                                </p>

                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_camera_front_portrait_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-14">
                                    Camera trước <br />
                                    Ultra Wide 12MP
                                </p>
                                <p className="font-normal text-sm h-8 pt-2">
                                    —
                                </p>
                            </div>
                            <div className="h-48 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_camera_single_lens_3_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Camera Wide 8MP</p>
                                <p className="font-normal text-sm pb-2">—</p>
                                <p className="font-normal text-sm pb-2">Video 1080p</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_authentication_touch_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Touch ID ở nút Home</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_connector_lightning_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Cổng kết nối Lightning
                                </p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_cellular_4g_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Mạng di động 4G LTE</p>
                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_pencil_1stgen_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-12">
                                    Hỗ trợ Apple Pencil <br />
                                    (thế hệ thứ 1)
                                </p>
                                <p className="font-normal text-sm h-12">
                                    -
                                </p>
                            </div>
                            <div className="h-52 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_keyboard_smart_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Hỗ trợ <br />
                                    Smart Keyboard</p>
                            </div>
                        </div>
                    </div>

                    {/* Ipad Mini */}
                    <div className="container mx-auto w-44">
                        <div className="flex flex-col justify-center items-center text-center">
                            <div className="h-48 content-end">
                                <a href="#">
                                    <Image
                                        removeWrapper
                                        alt="Card background"
                                        className="object-cover"
                                        src="/img/ipad/compare_ipad_mini_large.png"
                                    />
                                </a>
                            </div>

                            <div className="flex justify-center pt-4">
                                <img src="/img/ipad/compare_ipad_mini_swatches_large.png"></img>
                            </div>

                            <div className="h-20 py-4">
                                <h1 className="text-center font-semibold text-2xl">
                                    iPad mini
                                </h1>
                            </div>

                            <div className="h-28">
                                <p className="text-center">
                                    Trọn vẹn <br />
                                    trải nghiệm iPad <br />
                                    nằm gọn trên tay.
                                </p>
                            </div>
                            <h4 className="font-semibold text-xl text-center py-2">Từ 12.799.000đ</h4>
                            <a className="text-center py-4 text-blue-600" href="#">
                                <span className="buy"> Mua </span>
                            </a>
                        </div>

                        <div className="border-b-1"></div>

                        <div className="grid grid-rows-9 gap-4">
                            <div className="h-52 w-full flex flex-col items-center justify-center text-center gap-y-3">
                                <h4 className="font-semibold text-xl">
                                    8,3″
                                </h4>
                                <p className="font-normal text-sm h-8">
                                    Màn hình Liquid Retina
                                </p>
                                <p className="font-normal text-sm">
                                    -
                                </p>
                                <p className="font-normal text-sm">
                                    Dải màu rộng P3
                                </p>
                                <p className="font-normal text-sm">
                                    Lớp phủ chống phản chiếu
                                </p>
                            </div>
                            <div className="h-24 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_chip_a15_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Chip A15 Bionic
                                </p>

                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_camera_front_portrait_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-14">
                                    Camera trước <br />
                                    Ultra Wide 12MP
                                </p>
                                <p className="font-normal text-sm h-8 pt-2">
                                    —
                                </p>
                            </div>
                            <div className="h-48 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_camera_single_lens_7_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Camera Wide 12MP</p>
                                <p className="font-normal text-sm pb-2">—</p>
                                <p className="font-normal text-sm pb-2">Video 4K</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_authentication_vertical_touch_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Touch ID ở nút nguồn</p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_connector_usb_c_large.png"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Cổng kết nối USB‑C
                                </p>
                            </div>
                            <div className="h-28 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_cellular_5g.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">Mạng di động 5G</p>
                            </div>
                            <div className="h-40 flex flex-col items-center justify-center text-center gap-y-2">
                                <img
                                    className="object-center"
                                    src="/img/ipad/icon_pencil_2ndgen_usbc.png"
                                >
                                </img>
                                <p className="font-normal text-sm h-12">
                                    Hỗ trợ Apple Pencil <br />
                                    (thế hệ thứ 2)</p>
                                <p className="font-normal text-sm h-12">
                                    Hỗ trợ Apple Pencil <br />
                                    (USB‑C)</p>
                            </div>
                            <div className="h-52 flex flex-col items-center justify-center text-center">
                                <img
                                    className="object-center pb-2"
                                    src="/img/ipad/icon_keyboard_bluetooth_large.jpg"
                                >
                                </img>
                                <p className="font-normal text-sm pb-2">
                                    Hỗ trợ <br />
                                    bàn phím Bluetooth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}