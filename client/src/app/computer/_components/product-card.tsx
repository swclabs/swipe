import ProductCard from "@/components/card";
import { ProductType } from "@/types/products";

interface products {
  product: ProductType[];
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
      <ProductCard product={product} href="/shop/computer/laptop/" />
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
      <ProductCard product={product} href="/shop/computer/desktop/" />
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
      <ProductCard product={product} href="/shop/computer/display/" />
    </div>
  )
}