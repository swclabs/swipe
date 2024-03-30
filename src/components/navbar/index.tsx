"use client"
import './style.css'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Search from './search';

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Cửa hàng",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "Phụ kiện",
        "Hỗ trợ"
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} height={'2.8rem'} className="bg-gray-50" maxWidth="full">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href='/'>
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/swiftcart.svg"
                            alt="Next.js Logo"
                            width={50}
                            height={50}
                            priority
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-12" justify="center">
                <NavbarItem>
                    <div className='medium-container'>
                        <Link color="foreground" href="/store">
                            <p className=" text-xs">Cửa hàng</p>
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex  absolute'>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Mua hàng</p>
                                    <ul>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Mua sản phẩm mới nhất
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Mac
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPad
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPhone
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Phụ kiện
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Liên kết nhanh</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tình trạng đơn hàng</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Apple Trade In </Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tài chính</Link></li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Mua tại cửa hàng đặc biệt</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Giáo dục</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Doanh nghiệp</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <div className='large-container'>
                        <Link color="foreground" href="/mac">
                            <p className=" text-xs">Mac</p>
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex absolute'>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Khám phá Mac</p>
                                    <ul>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Khám phá tất cả các Mac
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                MacBook Air
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                MacBook Pro
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iMac
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Mac mini
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Mac Studio
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Mac Pro
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Màn hình
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link color="foreground" className=' text-xs pb-3'>So Sánh Mac</Link>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Mua Mac</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mua Mac</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Phụ kiện Mac</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Apple Trade In </Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tài chính</Link></li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Tìm hiểu thêm về Mac</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Hỗ Trợ Mac</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AppleCare+ cho mac</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>macOS Sonoma</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Các ứng dụng của Apple</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tính liên tục</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>iCloud+</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mac cho doanh nghiệp</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Giáo dục</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <div className='large-container'>
                        <Link color="foreground" href="/ipad">
                            <p className=" text-xs">iPad</p>
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex absolute'>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Khám phá iPad</p>
                                    <ul>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Khám phá tất cả iPad
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPad Air
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPad Pro
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPad
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPad mini
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Apple Pencil
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Bàn phím
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link color="foreground" className=' text-xs pb-3'>So Sánh iPad</Link>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Mua iPad</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mua iPad</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Phụ kiện iPad</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Apple Trade In </Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tài chính</Link></li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Tìm hiểu thêm về iPhone</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Hỗ Trợ iPad</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AppleCare+ cho iPad</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>iPadOS 17</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Các ứng dụng của Apple</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>iCloud+</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Giáo dục</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <div className='medium-container'>
                        <Link color="foreground" href="/iphone">
                            <p className=" text-xs">iPhone</p>
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex absolute'>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Khám phá iPhone</p>
                                    <ul>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Khám phá tất cả iPhone
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPhone 15 Pro
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPhone 15
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPhone 14
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPhone 13
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPhone SE
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link color="foreground" className=' text-xs pb-3'>So Sánh iPhone</Link>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Mua iPhone</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mua iPhone</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Phụ kiện iPhone</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Apple Trade In </Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tài chính</Link></li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Tìm hiểu thêm về iPhone</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Hỗ Trợ iPhone</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AppleCare+ cho iPhone</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>iOS 17</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Các ứng dụng của Apple</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>iCloud+</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <div className='medium-container'>
                        <Link color="foreground" href="#">
                            <p className=" text-xs">Watch</p>
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex absolute'>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Khám phá Watch</p>
                                    <ul>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Khám phá tất cả Watch
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Apple Watch Series 9
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Apple Watch Ultra 2
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Apple Watch SE
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Apple Watch Nike
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link color="foreground" className=' text-xs pb-3'>So Sánh Watch</Link>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Mua Apple Watch</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mua Watch</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Phụ kiện Watch</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Apple Trade In </Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tài chính</Link></li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Tìm hiểu thêm về Watch</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Hỗ Trợ Watch</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AppleCare+ cho Watch</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>watchOS 10</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Các ứng dụng của Apple</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <div className='medium-container'>
                        <Link color="foreground" href="#">
                            <p className=" text-xs">AirPods</p>
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex absolute'>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Khám phá AirPods</p>
                                    <ul>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Khám phá tất cả AirPods
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                AirPods Pro (Thế Hệ thứ 2)
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                AirPods (Thế Hệ thứ 2)
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                AirPods (Thế Hệ thứ 3)
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                AirPods Max
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link color="foreground" className=' text-xs pb-3'>So Sánh AirPods</Link>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Mua Apple AirPods</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mua AirPods</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Phụ kiện AirPods</Link></li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Tìm hiểu thêm về AirPods</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Hỗ Trợ AirPods</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AppleCare+ cho AirPods</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AirPods Music</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <div className='medium-container'>
                        <Link color="foreground" href="#">
                            <p className=" text-xs">Phụ kiện</p>
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex absolute'>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Mua phụ kiện</p>
                                    <ul>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Khám phá tất cả Phụ kiện
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Mac
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPad
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPhone
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Apple Watch
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                AirPods
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Khám phá phụ kiện</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Sản xuất bởi Apple</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <div className='medium-container'>
                        <Link color="foreground" href="#">
                            <p className=" text-xs">Hỗ trợ</p>
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex absolute'>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Khám phá Hỗ trợ</p>
                                    <ul>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Mac
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPad
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                iPhone
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                Apple Watch
                                            </Link>
                                        </li>
                                        <li className=' pt-1 pb-1'>
                                            <Link className=' text-2xl font-semibold' color="foreground">
                                                AirPods
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Trợ giúp</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Cộng đồng</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Kiểm tra bảo hành</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Sửa chữa</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Liên hệ với chúng tôi</Link></li>
                                    </ul>
                                </div>
                                <div className=' container'>
                                    <p className=' text-xs pb-3'>Chủ đề hữu ích</p>
                                    <ul>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Thanh toán</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tìm</Link></li>
                                        <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Trợ năng</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className='sm:flex gap-12'>
                <NavbarItem>
                    <div className='medium-container'>
                        <Link color="foreground" href="#">
                            <CiSearch />
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex absolute'>
                                <div className=' container'>
                                    <Search />
                                    <p className=' text-xs pt-3'>Liên kết nhanh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <div className='medium-container'>
                        <Link color="foreground" href="#">
                            <IoBagOutline />
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex absolute'>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 0 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}