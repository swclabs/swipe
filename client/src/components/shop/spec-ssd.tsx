import React from 'react';
import { ProductDetail, Specs } from "@/types/products";
import { motion } from 'framer-motion';

interface IStorageProps {
  product: ProductDetail<Specs>[];
  version: number;
  color: number;
  specs: Specs;
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
  setSpecs: (specs: Specs) => void;
}

const disableSpec = {
  "pointerEvents": "none",
  "opacity": "0.4",
}

const enableSpec = {}

export default function SpecSSD({ product, version, color, specs, setSpecs }: IStorageProps) {
  return (
    <>
      {version !== -1 && color !== -1 && specs.RAM !== "" &&
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >

          <div className=" container mt-10" id='SSD'>
            <div className=' font-semibold text-2xl'>
              Dung lượng. <span className=' text-gray-400'>Bạn cần bao nhiêu dung lượng?</span>
            </div>

            <div className='pt-0' style={version === -1 ? disableSpec : enableSpec}>
              {product[version].color[color].specs?.filter(spec => spec.RAM === specs.RAM).map((value, index) =>
                <button
                  className={`container ${specs.SSD === value.SSD ? "border-blue-500" : "border-gray-400"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
                  key={index}
                  onClick={() => setSpecs({ RAM: specs.RAM, SSD: value.SSD, price: value.price })}
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