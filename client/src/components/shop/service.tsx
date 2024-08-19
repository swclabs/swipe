"use client";
import Image from "next/image";
import React from "react";
import { iphone_carousel } from "@/faker/iphone-carousel";
import { CarouselData } from "@/types/carousel";
import { IoCartOutline } from "react-icons/io5";
import { TbCurrencyDong } from "react-icons/tb";
import { RiBox3Line } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { Card, Services } from "../ui/service-cards-carousel";

export default function ServiceCarousel() {
  const service = [
    {
      title: <span>Trải nghiệm <span className=' text-blue-600'>mua sắm</span> được <span className=' text-blue-600'>cá nhân hóa</span> bởi ứng dụng <span className=' text-blue-600'>Swipe</span></span>,
      ico: IoCartOutline,
      color: "text-blue-600",
    },
    {
      title: <span>Thanh toán <span className=" text-purple-500">lãi suất thấp</span> thời hạn đến 24 tháng</span>,
      ico: TbCurrencyDong,
      color: "text-purple-500",
    },
    {
      title: <span>Giao hàng <span className=" text-green-500">miễn phí</span></span>,
      ico: RiBox3Line,
      color: "text-green-500",
    },
    {
      title: <span>Mua hàng <span className=" text-red-500">nhận điểm tín dụng</span> để mua thiết bị mới</span>,
      ico: CiCreditCard1,
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

interface Content {
  content: string;
  src: string;
}

const Contents = (blocks: Content[]) => {
  return (
    <>
      {blocks.map((block, index) => {
        return (
          <div
            key={"content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {block.content}
            </p>
            <Image
              src={block.src}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        )
      })}
    </>
  )
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/img/posts/8.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};