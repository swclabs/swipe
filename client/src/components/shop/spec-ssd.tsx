import React from 'react';
import { ProductDetail, Specification } from "@/types/products";
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

interface IStorageProps {
  product: ProductDetail[];
  version: number;
  color: number;
  specs: Specification;
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}

const disableSpec = {
  "pointerEvents": "none",
  "opacity": "0.4",
}

const enableSpec = {}

export default function SpecSSD({ product, version, color, specs, setSpecs }: IStorageProps) {
  // console.log(version, color, specs)
  return (
    <>
      {/* {version !== -1 && color !== -1 && specs.RAM !== "" && */}
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
            {
              version === -1 || color === -1 || specs.ram === "" ?
                product[0]?.color[0].specs?.filter(spec => spec.ram === "8GB").map((value, index) =>
                  <Button
                    variant="outline"
                    className={`container ${specs.ssd === value.ssd ? "border-blue-500" : "border-gray-400"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
                    key={index}
                    onClick={() => setSpecs({ ram: specs.ram, ssd: value.ssd, price: value.price, connection: "", desc: "" })}
                    disabled={specs.ram === "" ? true : false}
                  >
                    <div className='flex gap-11 justify-between max-w-full h-full items-center'>
                      <p className='break-words whitespace-normal text-left'>
                        {value.ssd}
                      </p>
                      <p className='break-words whitespace-normal font-normal text-right text-xs'>
                        {value.price}
                      </p>
                    </div>
                  </Button>
                ) :
                product[version]?.color[color].specs?.filter(spec => spec.ram === specs.ram).map((value, index) =>
                  <Button
                    variant="outline"
                    className={`container ${specs.ssd === value.ssd ? "border-blue-500" : "border-gray-400"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
                    key={index}
                    onClick={() => setSpecs({ ram: specs.ram, ssd: value.ssd, price: value.price, connection: "", desc: "" })}
                    disabled={specs.ram === "" ? true : false}
                  >
                    <div className='flex gap-11 justify-between max-w-full h-full items-center'>
                      <p className='break-words whitespace-normal text-left'>
                        {value.ssd}
                      </p>
                      <p className='break-words whitespace-normal font-normal text-right text-xs'>
                        {value.price}
                      </p>
                    </div>
                  </Button>
                )
            }
          </div>
        </div >
      </motion.div>
      {/* } */}
    </>
  )
}