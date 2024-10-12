import React from 'react';
import { ProductDetail, Specification } from "@/types/products";
import { motion } from 'framer-motion';

interface IStorageProps {
  product: ProductDetail[];
  version: number;
  color: number;
  specs: Specification
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}

const disableSpec = {
  "pointerEvents": "none",
  "opacity": "0.4",
}

const enableSpec = {}

export default function ConnectionDetail({ product, version, color, specs, setSpecs }: IStorageProps) {

  return (
    <>
      {version !== -1 && color !== -1 && specs.connection !== '' ?
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >

          <div className=" container mt-10" id='RAM'>
            <div className=' font-semibold text-2xl'>
              Kết Nối. <span className=' text-gray-400'>Duy trì kết nối mạng kể cả khi có hay không có điện thoại ở bên.</span>
            </div>

            <div className='pt-0' style={version === -1 ? disableSpec : enableSpec}>
              {product[version].color[color].specs?.map((value, index) =>
                <button
                  className={`container ${specs.connection === value.connection ? "border-blue-500" : "border-gray-400"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
                  key={index}
                  onClick={() => setSpecs({ connection: value.connection, desc: value.desc, price: value.price, ram: "", ssd: "" })}
                >
                  <div className='flex justify-between p-4'>
                    <div className=' w-2/5 flex flex-col items-start justify-center'>
                      <div className=' font-semibold'>{value.connection}</div>
                      <div className='text-xs text-left'>
                        {value.desc}
                      </div>
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
        </motion.div> :
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >

          <div className=" container mt-10" id='RAM'>
            <div className=' font-semibold text-2xl'>
              Kết Nối. <span className=' text-gray-400'>Duy trì kết nối mạng kể cả khi có hay không có điện thoại ở bên.</span>
            </div>

            <div className='pt-0' style={version === -1 || color === -1 ? disableSpec : enableSpec}>
              {product[0]?.color[0]?.specs?.map((value, index) =>
                <button
                  className={`container ${specs.connection === value.connection ? "border-blue-500" : "border-gray-400"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
                  key={index}
                  onClick={() => setSpecs({ connection: value.connection, desc: value.desc, price: value.price, ram: "", ssd: "" })}
                >
                  <div className='flex justify-between p-4'>
                    <div className=' w-2/5 flex flex-col items-start justify-center'>
                      <div className=' font-semibold'>{value.connection}</div>
                      <div className='text-xs text-left'>
                        {value.desc}
                      </div>
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