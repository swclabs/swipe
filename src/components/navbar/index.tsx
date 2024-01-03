"use client"
import './style.css'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import Image from 'next/image';


export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} height={'2.8rem'} className="bg-gray-50" maxWidth="full">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/swiftcart.svg"
                        alt="Next.js Logo"
                        width={50}
                        height={50}
                        priority
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-12" justify="center">
                <NavbarItem>
                    <div className='item-container'>
                        <Link color="foreground" href="#">
                            <p className=" text-xs">Cửa hàng</p>
                        </Link>
                        <div className="overlay">
                            <div className=' container p-8 flex h-64 absolute'>
                                <div>
                                    Test
                                </div>
                                <div>
                                    Test
                                </div>
                                <div>
                                    Test
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <p className=" text-xs">Mac</p>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <p className=" text-xs">iPad</p>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <p className=" text-xs">iPhone</p>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <p className=" text-xs">Watch</p>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <p className=" text-xs">AirPods</p>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <p className=" text-xs">Phụ kiện</p>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <p className=" text-xs">Hỗ trợ</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                </NavbarItem>
                <NavbarItem>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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