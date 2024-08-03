"use client"
import './style.css'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Badge } from "@nextui-org/react";
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Search from './search';
import NotLoggedIn, { LoggedIn } from '@/components/common/cart';
import NavbarItemStore from './store';
import NavbarItemMac from './computer';
import { NavbarItemIpad } from './tablet';
import { NavbarItemIphone } from './phone';
import NavbarItemAccessory from './accessory';
import NavbarItemWatch from './watch';
import NavbarItemAirPod from './earphone';
import NavbarItemSupport from './support';

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
              src="/logo.png"
              alt="swipe logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem>
          <NavbarItemStore />
        </NavbarItem>
        <NavbarItem>
          <NavbarItemMac />
        </NavbarItem>
        <NavbarItem>
          <NavbarItemIpad />
        </NavbarItem>
        <NavbarItem>
          <NavbarItemIphone />
        </NavbarItem>
        <NavbarItem>
          <NavbarItemWatch />
        </NavbarItem>
        <NavbarItem>
          <NavbarItemAirPod />
        </NavbarItem>
        <NavbarItem>
          <NavbarItemAccessory />
        </NavbarItem>
        <NavbarItem>
          <NavbarItemSupport />
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
          <div className='cart-container'>
            <Link color="foreground" href="#">
              <Badge content={3} color='primary'>
                <IoBagOutline />
              </Badge>
            </Link>
            <div className="overlay">
              <div className=' container pl-20 pb-10 absolute'>
                <LoggedIn />
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