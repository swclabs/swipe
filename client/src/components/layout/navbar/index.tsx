"use client"
import Products from '@/components/layout/carts';
import { useCart } from '@/state/purchase';
import { Badge, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { SessionProviderProps } from 'next-auth/react';
import Image from 'next/image';
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import NavbarItemAccessory from './accessory';
import NavbarItemMac from './computer';
import NavbarItemAirPod from './earphone';
import { NavbarItemIphone } from './phone';
import Search from './search';
import NavbarItemStore from './store';
import './style.css';
import { NavbarItemIpad } from './tablet';
import NavbarItemWatch from './watch';

export default function NavbarComponent({ session }: { session: SessionProviderProps['session'] }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {
    carts,
    fetchCart
  } = useCart();
  React.useEffect(() => {
    fetchCart()
  }, [])

  const menuItems = [
    "Cửa hàng",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "Phụ kiện",
    // "Hỗ trợ"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} height={'2.8rem'} className=" bg-white" maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="sm:hidden">
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

      <NavbarContent className="hidden sm:flex md:gap-8 lg:gap-12 font-medium" justify="center">
        <NavbarItem>
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
        </NavbarItem>
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
        {/* <NavbarItem>
          <NavbarItemSupport />
        </NavbarItem> */}
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
              <Badge content={session ? carts?.products?.length : 0} color='primary'>
                <IoBagOutline />
              </Badge>
            </Link>
            <div className="overlay">
              <div className=' container pl-20 pb-10 absolute'>
                <Products session={session} />
              </div>
            </div>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className='sm:flex'>
        <NavbarItem className=' sm:hidden'>
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
          <div className='cart-container sm:hidden'>
            <Link color="foreground" href="#">
              <Badge content={3} color='primary'>
                <IoBagOutline />
              </Badge>
            </Link>
            <div className="overlay">
              <div className=' container pl-20 pb-10 absolute'>
                <Products session={session} />
              </div>
            </div>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/shop"
            size="lg"
          >
            Cửa hàng
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/computer"
            size="lg"
          >
            Mac
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/tablet"
            size="lg"
          >
            iPad
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/phone"
            size="lg"
          >
            iPhone
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/watch"
            size="lg"
          >
            Watch
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/earphone"
            size="lg"
          >
            AirPods
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/accessories"
            size="lg"
          >
            Phụ kiện
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}