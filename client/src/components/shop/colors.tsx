import { ProductDetail } from "@/types/products";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { motion } from 'framer-motion';

interface IColorProps {
  product: ProductDetail[];
  version: number;
  color: number;
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
}

export default function Colors({ product, version, color, setVersion, setColor }: IColorProps) {
  return (
    <>
      {version !== -1 &&
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className=" container mt-10">
            <div className=' font-semibold text-2xl'>
              Màu. <span className=' text-gray-400'>Chọn màu bạn yêu thích</span>
            </div>

            <div className='pt-5 flex gap-4'>
              {product[version].color.map((value, index) => (
                <Button
                  isIconOnly
                  radius="full"
                  key={index}
                  variant={`${color === index ? "bordered" : "solid"}`}
                  color="primary"
                  isDisabled={version === -1 ? true : false}
                  onClick={() => setColor(index)}
                >
                  <Image
                    alt="img"
                    src={value.img}
                    fill
                  />
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      }
    </>
  )
}