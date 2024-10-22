'use client'
import { ProductDetail, Specification } from "@/types/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/state/purchase";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { cn } from "@nextui-org/react";
import { useToast } from "@/hooks/use-toast";
interface IStorageProps {
  product: ProductDetail;
  color: number;
  specs: Specification;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}
export default function AddToCart({ product, color, specs, setSpecs }: IStorageProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const handleAddToCart = async (inventory_id: number, quantity: number) => {
    setLoading(true)
    await addToCart(inventory_id, quantity)
    toast({
      title: "Success",
      description: "Added to cart",
    })
    setLoading(false)
  }
  return (
    <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
      <div className=" container flex w-4/5 flex-col md:flex-row">
        <div className=" container font-semibold text-3xl p-10">
          {product.name} mới của bạn.
          <span className=" text-gray-400">Theo cách bạn muốn.</span>
        </div>
        <div className=" container p-10">
          <div className=" mb-2">{product.name} {specs.ssd} {product.color[0]?.name}</div>
          <div className=" font-semibold">Tổng cộng {specs.price}</div>
        </div>
        <div className=" container p-10">
          <div className=" font-semibold">Giao hàng:</div>
          <div className=" text-sm">Còn hàng</div>
          <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

          <Button className=" w-full"
            onClick={() => { handleAddToCart(specs.inventory_id, 1) }}
          // disabled={specs.ssd === "" ? true : false || loading}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </div>
  )
}


interface IConnectionProps {
  product: ProductDetail;
  color: number;
  specs: Specification;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}

export function AddWatchToCart({ product, color, specs, setSpecs }: IConnectionProps) {
  return (
    <>
      {
        product && product.color[color] && specs.connection != "" ?
          <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
            <div className=" container flex w-4/5 flex-col md:flex-row">
              <div className=" container font-semibold text-3xl p-10">
                {product?.name} mới của bạn.
                <span className=" text-gray-400">Theo cách bạn muốn.</span>
              </div>
              <div className=" container p-10">
                <div className=" mb-2">{product?.name} {specs.connection} {product.color[color].name}</div>
                <div className=" font-semibold">Tổng cộng {specs.price}</div>
              </div>
              <div className=" container p-10">
                <div className=" font-semibold">Giao hàng:</div>
                <div className=" text-sm">Còn hàng</div>
                <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

                <Button className=" w-full">Thêm vào giỏ hàng</Button>
              </div>
            </div>
          </div> :
          <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
            <div className=" container flex w-4/5 flex-col md:flex-row">
              <div className=" container font-semibold text-3xl p-10">
                {product?.name} mới của bạn.
                <span className=" text-gray-400">Theo cách bạn muốn.</span>
              </div>
              <div className=" container p-10">
                <div className=" mb-2">{product?.name} {specs.connection} {product?.color[0].name}</div>
                <div className=" font-semibold">Tổng cộng {specs.price}</div>
              </div>
              <div className=" container p-10">
                <div className=" font-semibold">Giao hàng:</div>
                <div className=" text-sm">Còn hàng</div>
                <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

                <Button disabled className=" w-full" onClick={() => console.log(specs)}>
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </div>
      }
    </>
  )
}