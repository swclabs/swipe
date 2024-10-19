'use client';
import './style.css'
import iphone from "@/faker/iphone";
import Link from "next/link";
import { FiTruck } from "react-icons/fi";
import ipad from "@/faker/ipad";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";



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
          {ipad.map((value, index) => (
            <div className="container mx-auto w-full bg-gray-100 rounded-2xl relative" key={index}>
              <div className="p-5 flex flex-col justify-center items-center text-center gap-y-4 h-[550px]">
                <div className=" w-full">
                  <div className=" w-full flex flex-col gap-y-3">
                    <div className="h-full">
                      <p className="text-left font-semibold text-xl"> {value.name}</p>
                    </div>
                    <div className="h-full">
                      <p className="text-left text-sm"> {value.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 min-h-[150px]">
                  <Image
                    alt="img card"
                    height={100}
                    width={100}
                    src={value.image}
                  />
                </div>

                <div className=" w-full flex-1">
                  <div className=" w-full flex flex-col gap-y-2">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs ">{value.specs.screen}</Badge>
                      <Badge variant="outline" className="text-xs ">{value.specs.display}</Badge>
                    </div>
                    <div className="flex gap-2">
                      {value.specs.SSD && value.specs.SSD.map((item, idx) => (
                        <Badge variant="outline" className="text-xs " key={idx}>{item}</Badge>
                      ))}
                    </div>
                    <div className="h-full">
                      <h4 className="font-semibold text-lg text-left">{value.price}</h4>
                    </div>
                  </div>
                </div>

                <div className="w-[90%] flex-1 absolute bottom-3">
                  <Link href={"shop/tablet/" + value.id.toString()}>
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