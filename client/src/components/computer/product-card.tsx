import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FiTruck } from "react-icons/fi";

interface product {
  name: string;
  price: string;
  image: string;
  desc: string;
}

interface products {
  product: product[];
}

export default function ProductCard({ product }: products) {
  return (
    <div className="flex justify-center w-full pb-[10px] overflow-hidden">
      <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">

        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-2">
          {product.map((value, index) => (
            <div className="container mx-auto w-full bg-gray-100 rounded-2xl relative" key={index}>
              <div className="p-5 flex flex-col justify-center items-center text-center gap-y-4 min-h-[550px]">
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
                    alt="Card background"
                    src={value.image}
                    width={200}
                    height={200}
                  />
                </div>

                <div className="w-full flex-1 flex flex-col gap-y-3">
                  <div className="h-full">
                    <h4 className="font-semibold text-lg text-left">{value.price}</h4>
                  </div>
                  <Link href={"phone/" + value.name.toLowerCase().replaceAll(" ", "-")}>
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