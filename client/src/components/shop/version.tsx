import { ProductDetail } from "@/types/products";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

interface IVersionProps {
  product: ProductDetail[];
  version: number;
  setVersion: (version: number) => void;
}

export default function Version({ product, version, setVersion }: IVersionProps) {

  const select = (index: number) => {
    setVersion(index)
  }

  return (
    <div className=" container">
      <div className=' font-semibold text-2xl'>
        Phiên bản. <span className=' text-gray-400'>Mẫu nào phù hợp nhất với bạn?</span>
      </div>

      <div className='pt-5'>
        {product.map((value, index) => (
          <Link href="#color" key={index}>
            <button
              className={`container ${version === index ? "border-blue-500" : "border-gray-400"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
              onClick={() => select(index)}
              key={index}
            >
              <div className='flex justify-between p-4'>
                <div className=' w-2/5 flex flex-col items-start justify-center'>
                  <div className=' font-semibold'>{value.name}</div>
                  <div className=' text-xs'>Màn hình {value.screen}</div>
                </div>
                <div className=' w-2/5 text-xs text-right'>
                  Từ {value.color[0]?.specs && value.color[0].specs[0].price}
                </div>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}