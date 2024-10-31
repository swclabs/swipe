import React, { useEffect } from 'react';
import { ProductDetail, Specification } from "@/types/products";
import { motion } from 'framer-motion';
import { formatNumber } from '@/utils/fmt';

interface IStorageProps {
  product: ProductDetail;
  color: number;
  specs: Specification
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}

export default function ConnectionDetail({ product, color, specs, setSpecs }: IStorageProps) {
  useEffect(() => { console.log(specs) }, [specs])
  return (
    <div className=" container" id='RAM'>
      <div className=' font-semibold text-2xl'>
        Kết Nối. <span className=' text-gray-400'>Duy trì kết nối mạng kể cả khi có hay không có điện thoại ở bên.</span>
      </div>

      <div className='pt-0' >
        {color === -1 ?
          product.color[0]?.specs?.map((value, index) =>
            <button
              className={`container ${specs.connection === value.connection ? "border-black" : "border-gray-300"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
              key={index}
              onClick={() => setSpecs({ ...value })}
              disabled
            >
              <div className='flex justify-between p-4'>
                <div className=' w-2/5 flex flex-col items-start justify-center'>
                  <div className=' font-semibold'>{value.connection}</div>
                  <div className='text-xs text-left'>
                    {value.desc}
                  </div>
                </div>
                <div className=' w-2/5 text-xs text-right'>
                  {formatNumber(parseInt(value.price))}
                </div>
              </div>
            </button>
          ) :
          product.color[color].specs?.map((value, index) =>
            <button
              className={`container ${specs.connection === value.connection ? "border-black" : "border-gray-300"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
              key={index}
              onClick={() => setSpecs({ ...value })}
            >
              <div className='flex justify-between p-4'>
                <div className=' w-2/5 flex flex-col items-start justify-center'>
                  <div className=' font-semibold'>{value.connection}</div>
                  <div className='text-xs text-left'>
                    {value.desc}
                  </div>
                </div>
                <div className=' w-2/5 text-xs text-right'>
                  {formatNumber(parseInt(value.price))}
                </div>
              </div>
            </button>
          )
        }
      </div>
    </div >
  )
}