import { ProductDetail } from "@/types/products";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";
import { useEffect } from "react";

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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className=" container mt-10" id="color">
          <div className=' font-semibold text-2xl'>
            Màu. <span className=' text-gray-400'>Chọn màu bạn yêu thích</span>
          </div>

          <div className='pt-5 flex gap-4'>
            {version === -1 ?
              product[0]?.color.map((value, index) => (
                <Button
                  isIconOnly
                  radius="full"
                  variant={`${color === index ? "bordered" : "solid"}`}
                  color="primary"
                  isDisabled={version === -1 ? true : false}
                  onClick={() => setColor(index)}
                  key={index}
                >
                  <Link href="#RAM" key={index}>
                    <Image
                      alt="img"
                      src={value.img}
                      fill
                    />
                  </Link>
                </Button>
              )) :
              product[version]?.color.map((value, index) => (
                <Button
                  isIconOnly
                  radius="full"
                  variant={`${color === index ? "bordered" : "solid"}`}
                  color="primary"
                  onClick={() => setColor(index)}
                  key={index}
                >
                  <Link href="#RAM" key={index}>
                    <Image
                      alt="img"
                      src={value.img}
                      fill
                    />
                  </Link>
                </Button>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}