import Image from "next/image";
import Link from "next/link";
import { FiTruck } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface product {
  name: string;
  price: string;
  image: string;
  desc: string;
}

interface products {
  product: product[];
}

export function ProductLaptopCard({ product }: products) {
  return (
    <div className="flex flex-col justify-center w-full pb-[10px] overflow-hidden">
      <div className="flex" id="laptop">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className=" sm:py-12 py-5 px-2">
          <p className=" text-xl sm:text-3xl font-semibold">Laptop</p>
          <p className=' text-sm font-light'>Nhanh và tiện lợi</p>
        </div>
      </div>
      {card(product)}
    </div>
  )
}

export function ProductDesktopCard({ product }: products) {
  return (
    <div className="flex flex-col justify-center w-full pb-[10px] overflow-hidden">
      <div className="flex" id="desktop">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className=" sm:w-4/5 sm:py-12 py-5 px-2">
          <p className=" text-xl sm:text-3xl font-semibold">Desktop</p>
          <p className=' text-sm font-light'>Sức mạnh tối đa</p>
        </div>
      </div>
      {card(product)}
    </div>
  )
}

export function ProductDisplayCard({ product }: products) {
  return (
    <div className="flex flex-col justify-center w-full pb-[10px] overflow-hidden">
      <div className="flex" id="display">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className=" sm:w-4/5 sm:py-12 py-5 px-2">
          <p className=" text-xl sm:text-3xl font-semibold">Display</p>
          <p className=' text-sm font-light'>Sắc màu rực rỡ</p>
        </div>
      </div>
      {card(product)}
    </div>
  )
}

const card = (product: product[]) => {
  return (
    <div className=" w-full flex relative snap-x snap-mandatory 2xl:justify-between justify-center" >
      <div className=" sm:w-1/12 shrink-0 snap-center">
        <div className="shrink-0"></div>
      </div>
      <div className=" w-full grid lg:grid-cols-4 2xl:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-4 p-2">
        {product.map((value, index) => (
          <div className="container mx-auto bg-gray-100 rounded-2xl relative min-h-[550px]" key={index}>
            <div className="p-5 flex flex-col justify-center items-center text-center gap-y-4">
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

              <div className="pt-4 flex-1 min-h-[220px]">
                <Image
                  alt="Card background"
                  src={value.image}
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-[90%] flex-1 absolute bottom-3 gap-y-3 flex flex-col">
                <div className="h-full">
                  <h4 className="font-semibold text-lg text-left">{value.price}</h4>
                </div>
                <Link href={"/shop/computer/" + value.name.toLowerCase().replaceAll(" ", "-")}>
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
    </div >
  )
}