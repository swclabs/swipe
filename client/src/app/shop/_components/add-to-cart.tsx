'use client'
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { PurchaseService } from "@/service/purchase";
import { useCart } from "@/state/purchase";
import { ProductDetail, Specification } from "@/types/products";
import { formatNumber } from "@/utils/fmt";
import { Bookmark, BookmarkCheck, ShoppingCart } from "lucide-react";
import { SessionProviderProps } from "next-auth/react";
import { useState } from "react";
interface IStorageProps {
  product: ProductDetail;
  color: number;
  specs: Specification;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
  session: SessionProviderProps["session"];
}
export default function AddToCart({ product, color, specs, setSpecs, session }: IStorageProps) {
  const { addToCart } = useCart()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const save = async (inventory_id: number) => {
    try {
      await PurchaseService.addToFavorite(inventory_id);
      toast({
        title: "Success",
        description: "Saved to favorite",
      })
      setSpecs({ ...specs, favorite: !specs.favorite })
    }
    catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save to favorite",
      })
    }
  }
  const handleAddToCart = async (inventory_id: number, quantity: number) => {
    setLoading(true)
    if (session) {
      await addToCart(inventory_id, quantity)
      toast({
        title: "Success",
        description: "Added to cart",
      })
    }
    else {
      toast({
        variant: "destructive",
        title: "Bạn cần đăng nhập",
        description: "Đăng nhập để thêm vào giỏ hàng",
      })
    }
    setLoading(false)
  }
  return (
    <div className=" bg-gray-50 max-h-max mt-10 rounded-xl flex justify-center mb-5">
      <div className=" container flex w-4/5 flex-col md:flex-row">
        <div className=" container font-semibold text-3xl p-10">
          {product.name} mới của bạn.
          <span className=" text-gray-400">Theo cách bạn muốn.</span>
        </div>
        <div className=" container p-10">
          <div className=" mb-2">{product.name} {specs.ssd} {product.color[0]?.name}</div>
          <div className=" font-semibold">Tổng cộng {formatNumber(parseInt(specs.price))}</div>
        </div>
        <div className=" container p-10">
          <div className=" font-semibold">Giao hàng:</div>
          <div className=" text-sm">Còn hàng</div>
          <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

          <Button className=" w-full gap-x-2 justify-between"
            onClick={() => { handleAddToCart(specs.inventory_id, 1) }}
            disabled={(color === -1 || (specs.ssd === "" && specs.connection === "")) ? true : false || loading}
          >
            Thêm vào giỏ hàng <ShoppingCart />
          </Button>
          <Button className=" w-full mt-2 gap-x-2 justify-between"
            variant="outline"
            disabled={(color === -1 || (specs.ssd === "" && specs.connection === "")) ? true : false || loading}
            onClick={() => save(specs.inventory_id)}
          >
            {specs.favorite ?
              <>
                Đã lưu
                <BookmarkCheck />
              </>
              :
              <>
                Lưu sản phẩm
                <Bookmark />
              </>
            }
          </Button>
        </div>
      </div>
    </div>
  )
}