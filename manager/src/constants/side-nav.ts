import { CircleDot, Box, HomeIcon, LayoutDashboard, LayoutDashboardIcon, LayoutList, LogIn, ShoppingBag, Store, User, Users, TicketPercent } from "lucide-react";
import { NavItemWithChildren } from "@/types/navbar";

export const NavItems: NavItemWithChildren[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    title: "Sales",
    href: "/",
    icon: ShoppingBag,
    color: "text-sky-500",
    isChidren: true,
    children: [
      {
        title: "Orders",
        icon: CircleDot,
        color: "text-red-500",
        href: "/dashboard/sales/orders"
      },
    ]
  },
  {
    title: "Shop",
    href: "/dashboard/shop",
    icon: Store,
    color: "text-sky-500",
    isChidren: true,
    children: [
      {
        title: "Products",
        icon: CircleDot,
        color: "text-red-500",
        href: "/dashboard/shop/product"
      },
      {
        title: "Inventory",
        icon: CircleDot,
        color: "text-red-500",
        href: "/dashboard/shop/inventory"
      },
      // {
      //   title: "Suppliers",
      //   icon: CircleDot,
      //   color: "text-red-500",
      //   href: "/dashboard/shop/suppliers"
      // },
      // {
      //   title: "Category",
      //   icon: CircleDot,
      //   color: "text-red-500",
      //   href: "/dashboard/shop/category"
      // },
    ],
  },
  {
    title: "Promotions",
    href: "/",
    icon: TicketPercent,
    color: "text-sky-500",
    isChidren: true,
    children: [
      {
        title: "Users",
        icon: CircleDot,
        color: "text-red-500",
        href: "/dashboard/sales/orders"
      },
    ]
  },
  // {
  //   title: "Site",
  //   icon: LayoutList,
  //   href: "/dashboard/site",
  //   color: "text-orange-500",
  //   isChidren: true,
  //   children: [
  //     {
  //       title: "Landing Page",
  //       icon: CircleDot,
  //       color: "text-red-500",
  //       href: "/dashboard/site/landing-page"
  //     },
  //     {
  //       title: "Mac",
  //       icon: CircleDot,
  //       color: "text-red-500",
  //       href: "/dashboard/site/computer"
  //     },
  //     {
  //       title: "iPhone",
  //       icon: CircleDot,
  //       color: "text-red-500",
  //       href: "/dashboard/site/phone"
  //     },
  //     {
  //       title: "iPad",
  //       icon: CircleDot,
  //       color: "text-red-500",
  //       href: "/dashboard/site/tablet"
  //     },
  //     {
  //       title: "AirPod",
  //       icon: CircleDot,
  //       color: "text-red-500",
  //       href: "/dashboard/site/airpod"
  //     },
  //     {
  //       title: "Accessories",
  //       icon: CircleDot,
  //       color: "text-red-500",
  //       href: "/dashboard/site/accessories"
  //     },
  //   ],
  // },
];
