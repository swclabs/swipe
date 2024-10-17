import { ProductDetail } from "@/types/products";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

interface IVersionProps {
  product: ProductDetail;
}

export default function Version({ product }: IVersionProps) {

  return (
    <div className="container">
      <div className=' font-semibold text-2xl'>
        Phiên bản. <span className=' text-gray-400'> phù hợp nhất với bạn?</span>
      </div>

      <div className='pt-5'>
        <button
          className={`border-[1.5px] rounded-xl mt-5 h-[100px] w-full text-left`}
        >
          <div className='flex justify-between p-4'>
            <div className=' w-2/5 flex flex-col items-start justify-center'>
              <div className=' font-semibold'>{product.name}</div>
              <div className=' text-xs'>Màn hình {product.screen}</div>
            </div>
            <div className=' w-2/5 text-xs text-right'>
              Từ {product.color[0]?.specs && product.color[0].specs[0].price}
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}