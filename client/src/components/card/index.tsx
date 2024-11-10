"use client"
import { ProductType } from "@/types/products";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LoadingArea } from "../layout/loading-area";
import { motion } from "framer-motion";


export default function ProductCard({ product, href }: { product: ProductType[], href: string }) {
  return (
    <div className="flex flex-col justify-center w-full pb-[10px] overflow-hidden">
      <div className="flex justify-center">
        <div className=" sm:w-4/5 pt-10 pb-10">
          <span className=" text-xl sm:text-4xl font-semibold">Tất cả sản phẩm.</span>
        </div>
      </div>
      <div className=" relative flex snap-x snap-mandatory 2xl:justify-between w-full justify-center">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        {product.length > 0 ?
          <div className="grid lg:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 p-2 w-full">
            {product.map((value, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="container mx-auto rounded-2xl relative lg:h-[530px] h-[370px]"
              >
                <Link
                  key={index}
                  href={href + value.id.toString()}
                >
                  <div className="flex flex-col justify-center items-center text-center gap-y-4" key={index}>
                    <div className=" bg-gray-100 lg:h-[350px] h-[200px] flex items-center w-full">
                      <div className="flex-1 lg:min-h-[150px] items-center w-full flex justify-center p-10">
                        <Image
                          className="w-[80px] lg:w-[150px] hover:scale-110 transition delay-100 hover:-translate-y-1"
                          alt="img card"
                          height={150}
                          width={150}
                          src={value.image}
                        />
                      </div>
                    </div>
                    <div className=" w-full flex-1">
                      <div className=" w-full flex flex-col gap-y-1">
                        <div className="h-full flex items-center justify-between">
                          <p className="text-left font-semibold lg:text-xl text-base"> {value.name}</p>
                          <div className=" flex gap-y-3 items-center">
                            <Button size="icon" variant="ghost"><Star className="w-5" /></Button>
                            <p>5.0</p>
                          </div>
                        </div>
                        <div className="h-full">
                          <p className="text-left font-semibold text-[#707072] text-xs lg:text-sm"> {value.desc}</p>
                        </div>
                        <div className="lg:flex gap-2 hidden font-semibold text-[#707072] text-xs lg:text-sm">
                          {value.specs.screen} {value.specs.display}
                        </div>
                        <div className="flex gap-2 font-semibold text-[#707072] text-xs lg:text-sm">
                          {value.specs.SSD && value.specs.SSD.map((item, idx) => (
                            <div key={idx}>{item}</div>
                          ))}
                        </div>
                        <div className="h-full">
                          <h4 className="font-semibold lg:text-base text-xs text-left">{value.price}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div> :
          <LoadingArea />
        }
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
    </div>
  )
}