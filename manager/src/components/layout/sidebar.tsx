'use client'
import React, { useState } from "react";
import { SideNav } from "@/components/layout/side-nav"
import { NavItems } from "@/constants/side-nav";

import { cn } from "@/lib/utils";
import { BsArrowLeftShort } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/useSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r pt-20 md:block`,
        status && "duration-500",
        isOpen ? " w-72" : "w-[78px]",
        className
      )}
    >
      {/* <Button
        className={cn(
          "absolute -right-5 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          !isOpen && "rotate-180"
        )}
        onClick={handleToggle}
        size="icon"
        variant="outline"
      >
        <BsArrowLeftShort />
      </Button> */}
      <div className="space-y-4 py-4">
        <div className={cn("text-center", isOpen ? "" : "hidden")}>
          <div className="font-semibold text-xl">Overview</div>
          <div className=" text-xs"> by Swipe 1.0</div>
        </div>
        <div className=" px-2 py-2 max-h-[75vh] scrollbar">
          <div className="mt-3 space-y-1">
            <SideNav
              className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
              items={NavItems}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
