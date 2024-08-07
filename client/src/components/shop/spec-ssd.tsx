import React from 'react';
import { ProductDetail } from "@/types/products";
import { motion } from 'framer-motion';

interface IStorageProps {
  product: ProductDetail[];
  version: number;
  color: number;
  specs: { ram: string, ssd: string }
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
  setSpecs: (specs: { ram: string, ssd: string }) => void;
}

const disableSpec = {
  "pointerEvents": "none",
  "opacity": "0.4",
}

const enableSpec = {}

export default function SpecSSD({ product, version, color, specs, setSpecs }: IStorageProps) {

  return (
    <>
      {version !== -1 && color !== -1 && specs.ram !== '' &&
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >

          <div className=" container mt-10">
            <div className=' font-semibold text-2xl'>
              Dung lượng. <span className=' text-gray-400'>Bạn cần bao nhiêu dung lượng?</span>
            </div>

            <div className='pt-0' style={version === -1 ? disableSpec : enableSpec}>
              {product[version].color[color].specs?.filter(spec => spec.RAM === specs.ram).map((value, index) =>
                <button
                  className={`container ${specs.ssd === value.SSD ? "border-blue-500" : "border-gray-400"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
                  key={index}
                  onClick={() => setSpecs({ ram: specs.ram, ssd: value.SSD })}
                >
                  <div className='flex justify-between p-4'>
                    <div className=' w-2/5 flex flex-col items-start justify-center'>
                      <div className=' font-semibold'>{value.SSD}</div>
                    </div>
                    <div className=' w-2/5 text-xs text-right'>
                      {value.price}
                    </div>
                  </div>
                </button>
              )
              }
            </div>
          </div >
        </motion.div>
      }
    </>
  )
}