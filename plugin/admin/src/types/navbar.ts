import { Icons } from "@/components/dashboard/icons";
import { type LucideIcon } from "lucide-react";

export interface NavItemWithChildren {
    title: string;
    href: string;
    icon: LucideIcon;
    color?: string;
    isChidren?: boolean;
    children?: NavItemWithChildren[];
}

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
}

export interface FooterItem {
    title: string;
    items: {
        title: string;
        href: string;
        external?: boolean;
    }[];
}