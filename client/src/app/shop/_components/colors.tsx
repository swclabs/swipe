import { ProductDetail, Specification } from "@/types/products";
import { Button } from "@nextui-org/react";
import Image from "next/image";

interface IColorProps {
  product: ProductDetail;
  color: number;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}

export default function Colors({ product, color, setColor, setSpecs }: IColorProps) {
  return (
    <>
      <div className=" container" id="color">
        <div className=' font-semibold text-2xl'>
          Màu. <span className=' text-gray-400'>Chọn màu bạn yêu thích</span>
        </div>

        <div className='pt-5 flex gap-4'>
          {product.color.map((value, index) => (
            <Button
              isIconOnly
              radius="full"
              variant={`${color === index ? "bordered" : "solid"}`}
              color="primary"
              onClick={() => {
                setColor(index);
                setSpecs({ ram: "", ssd: "", connection: "", price: "", inventory_id: -1, favorite: false, desc: "" });
              }}
              key={index}
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
    </>
  )
}