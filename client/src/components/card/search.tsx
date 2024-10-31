import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { SearchProduct } from "@/types/search";
import { motion } from "framer-motion";

export default function SearchCard({ product }: { product: SearchProduct[] }) {
  return (
    <div className="flex flex-col justify-center w-full overflow-hidden">
      <ScrollArea className="whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4">
          <div className="lg:w-[45px] shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          {product?.map((value, index) => (
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
              className="mx-auto rounded-2xl lg:h-[350px] h-[300px] shrink-0 lg:w-[280px] w-[160px]"
            >
              <Link
                key={index}
                href={
                  value.category === "laptop" || value.category === "desktop" || value.category === "display"
                    ? `/shop/computer/${value.category}/${value.id}`
                    : `/shop/${value.category}/${value.id}`
                }
              >
                <div className="flex flex-col justify-center items-center text-center gap-y-4" key={index}>
                  <div className=" bg-gray-100 lg:h-[250px] h-[150px] flex items-center w-full">
                    <div className="flex-1 lg:min-h-[150px] items-center w-full flex justify-center p-10">
                      <Image
                        className="w-[80px] lg:w-[120px] hover:scale-110 transition delay-100 hover:-translate-y-1"
                        alt="img card"
                        height={100}
                        width={100}
                        src={value.image}
                      />
                    </div>
                  </div>
                  <div className="flex-1 w-full max-w-full">
                    <div className=" w-full flex flex-col gap-y-1">
                      <div className="h-full flex items-center justify-between">
                        <p className="text-left font-semibold lg:text-xl text-base"> {value.name}</p>
                        <div className=" flex gap-y-3 items-center">
                          <Button size="icon" variant="ghost"><Star className="w-5" /></Button>
                          <p className=" font-semibold">5.0</p>
                        </div>
                      </div>
                      <div className="h-full">
                        <h4 className="font-semibold lg:text-base text-xs text-left text-[#707072]">{value.price}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}