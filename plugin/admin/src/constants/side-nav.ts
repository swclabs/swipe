import { BookOpenCheck, Box, HomeIcon, LayoutDashboard, LayoutDashboardIcon, LayoutList, LogIn, User } from "lucide-react";
import { NavItemWithChildren } from "@/types/navbar";

export const NavItems: NavItemWithChildren[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    title: "Product",
    href: "/dashboard/products",
    icon: Box,
    color: "text-sky-500",
  },
  {
    title: "Widget",
    icon: LayoutList,
    href: "/dashboard/site",
    color: "text-orange-500",
    isChidren: true,
    children: [
      {
        title: "Site",
        icon: BookOpenCheck,
        color: "text-red-500",
        href: "/dashboard/site"
      },
    ],
  },
  {
    title: "Login",
    href: "/",
    icon: LogIn,
    color: "text-sky-500",
  },
];
