import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductDetail, Specification } from "@/types/products";
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
              size="icon"
              className={cn("rounded-full border-black", color === index ? "border-[2px]" : "border-0")}
              variant={`${color === index ? "outline" : "ghost"}`}
              onClick={() => {
                setColor(index);
                setSpecs({ ram: "", ssd: "", connection: "", price: "", inventory_id: -1, favorite: false, desc: "" });
              }}
              key={index}
            >
              <Image
                alt="img"
                src={value.img}
                className="rounded-full"
                height={40}
                width={40}
              />
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}