'use client';
import { Image } from "@nextui-org/react";
import './style.css'
import airpod from "@/faker/airpod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiTruck } from "react-icons/fi";

export default function Product() {
  return (
    <div className="flex flex-col justify-center w-full pb-[10px] overflow-hidden">
      <div className="flex justify-center">
        <div className=" sm:w-4/5 pt-10 pb-10">
          <span className=" text-xl sm:text-4xl font-semibold">Khám phá dòng sản phẩm.</span>
        </div>
      </div>
      <div className=" relative flex snap-x snap-mandatory 2xl:justify-between w-full justify-center">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 p-2">
          {airpod.map((value, index) => (
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
                <div className=" flex-1" />
                <div className="w-[90%] flex-1 absolute bottom-3 flex flex-col gap-y-2">
                  <div className="h-full">
                    <h4 className="font-semibold text-lg text-left">{value.price}</h4>
                  </div>
                  <Link href={"shop/earphone/" + value.id.toString()}>
                    <Button color="primary" className=" w-full">Mua</Button>
                  </Link>
                  <div className=" flex items-center pt-4">
                    <FiTruck />
                    <p className=" pl-2 text-left text-xs">Đặt hàng hôm nay, giao hàng đến Hồ Chí Minh</p>
                  </div>
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