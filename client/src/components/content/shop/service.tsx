"use client";
import React from "react";
import { Card, Services } from "@/components/ui/service-cards-carousel";
import { Box, CreditCard, ShoppingCart, Wallet } from "lucide-react";

export default function ServiceCarousel() {
  const service = [
    {
      title: <span>Trải nghiệm <span className=' text-blue-600'>mua sắm</span> được <span className=' text-blue-600'>cá nhân hóa</span> bởi ứng dụng <span className=' text-blue-600'>Swipe</span></span>,
      ico: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: <span>Thanh toán <span className=" text-purple-500">lãi suất thấp</span> thời hạn đến 24 tháng</span>,
      ico: Wallet,
      color: "text-purple-500",
    },
    {
      title: <span>Giao hàng <span className=" text-green-500">miễn phí</span></span>,
      ico: Box,
      color: "text-green-500",
    },
    {
      title: <span>Mua hàng <span className=" text-red-500">nhận điểm tín dụng</span> để mua thiết bị mới</span>,
      ico: CreditCard,
      color: "text-red-500",
    }
  ].map((card, i) => (
    <Card index={i} card={card} key={i} />
  ))
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 font-sans">
        <span>Swipe.</span>
        <span className=" text-gray-500"> Tạo nên nhiều sự khác biệt</span>
      </h2>
      <Services items={service} />
    </div>
  );
}