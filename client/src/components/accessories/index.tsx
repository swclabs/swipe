'use client';
import { Button, Chip } from "@nextui-org/react";
import iphone from "@/faker/iphone";
import Link from "next/link";
import { FiTruck } from "react-icons/fi";
import ipad from "@/faker/ipad";
import Image from "next/image";
import { accessory_iphone } from "@/faker/accessory-ip";


export default function Accessory() {
  return (
    <div className="flex flex-col justify-center w-full pb-[10px] overflow-hidden">
      <div className="flex">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className=" sm:py-12 py-5 px-2">
          <p className=" text-xl sm:text-3xl font-semibold">Khám phá phụ kiện</p>
        </div>
      </div>
      <div className=" relative flex snap-x snap-mandatory 2xl:justify-between w-full justify-center">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className="w-full grid lg:grid-cols-4 2xl:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-4 p-2">
          {accessory_iphone.map((value, index) => (
            <div className="container mx-auto w-full bg-white rounded-2xl relative" key={index}>
              <div className="p-5 flex flex-col justify-center items-center text-center gap-y-4 w-[300px] h-[400px] md:min-h-[500px]">
                <div className=" w-full flex-1">
                  <div className=" w-full flex flex-col gap-y-3">
                    <div className="h-full">
                      <p className="text-left font-semibold text-xl"> {value.name}</p>
                    </div>
                    <div className="h-full">
                      <p className="text-left text-sm"> {value.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex-1">
                  <Image
                    alt="img card"
                    height={150}
                    width={150}
                    src={value.image}
                  />
                </div>
                <div className=" flex-1 pt-4 text-sm">
                  {value.price}
                </div>
                <div className="w-full flex-1 relative">
                  <Button color="primary" className=" w-full absolute bottom-0 left-0">Mua</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
    </div>
  )
}