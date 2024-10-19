'use client';
import iphone from "@/faker/iphone";;
import Image from "next/image";
import { accessory_iphone } from "@/faker/accessory-ip";
import { Button } from "@/components/ui/button";


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
            <div className="container mx-auto w-full bg-white rounded-2xl" key={index}>
              <div className="p-5 items-center flex flex-col text-center gap-y-4 h-[500px] relative">
                <div className="w-full">
                  <div className=" w-full flex flex-col gap-y-3">
                    <div className="h-full">
                      <p className="text-left font-semibold text-xl"> {value.name}</p>
                    </div>
                    <div className="h-full">
                      <p className="text-left text-sm"> {value.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex justify-center absolute bottom-1/3">
                  <Image
                    alt="img card"
                    height={150}
                    width={150}
                    src={value.image}
                  />
                </div>
                <div className="w-[90%] absolute bottom-3 flex-1 gap-y-3 flex flex-col">
                  <div className="pt-4 font-semibold text-left">
                    {value.price}
                  </div>
                  <Button className="w-full">Mua</Button>
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