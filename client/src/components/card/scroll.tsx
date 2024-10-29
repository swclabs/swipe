import { ProductType } from "@/types/products";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";


export default function CardScroll({ product, href }: { product: ProductType[], href: string }) {
  return (
    <div className="flex flex-col justify-center w-full py-10 overflow-hidden">
      <div className="px-4 flex justify-between w-full max-w-7xl mx-auto text-xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 font-sans">
        <span className="font-medium">Tất cả sản phẩm.</span>
        <a className="font-medium" href={href}>Cửa hàng</a>
      </div>
      <ScrollArea className="whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4">
          <div className="lg:w-[45px] shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          {product?.map((value, index) => (
            <Link
              className="mx-auto rounded-2xl lg:h-[530px] h-[370px] shrink-0 lg:w-[370px] w-[200px]" key={index}
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
                <div className="flex-1 w-full max-w-full">
                  <div className=" w-full flex flex-col gap-y-1">
                    <div className="h-full flex items-center justify-between">
                      <p className="text-left font-semibold lg:text-xl text-base"> {value.name}</p>
                      <div className=" flex gap-y-3 items-center">
                        <Button size="icon" variant="ghost"><Star /></Button>
                        <p>5.0</p>
                      </div>
                    </div>
                    <div className="text-left font-medium text-gray-600 lg:text-sm text-xs break-words w-full max-w-full "> {value.desc}</div>
                    <div className="lg:flex gap-2 hidden font-medium text-gray-600 lg:text-sm text-xs">
                      {value.specs.screen} {value.specs.display}
                    </div>
                    <div className="flex gap-2 font-medium text-gray-600 lg:text-sm text-xs">
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