"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { PurchaseService } from "@/service/purchase"
import { useCart } from "@/state/purchase"
import { formatNumber } from "@/utils/fmt"
import { BookmarkCheck, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page() {
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const { addToCart } = useCart()
  const add_to_cart = async (inventory_id: number) => {
    try {
      await addToCart(inventory_id, 1)
      toast({
        title: "Success",
        description: "Add to cart successfully",
      })
    }
    catch (e) {
      console.log(e)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add to cart",
      })
    }
  }
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await PurchaseService.getFavorite()
        setFavorites(resp.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    f()
  }, [])
  const { toast } = useToast()
  const save = async (inventory_id: number) => {
    setFavorites(favorites.filter((value) => value.color.specs.inventory_id !== inventory_id))
    try {
      await PurchaseService.addToFavorite(inventory_id);
      toast({
        title: "Success",
        description: "Saved to favorite",
      })
    }
    catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save to favorite",
      })
    }
  }

  return (
    <div className="w-full max-h-max mb-10">
      <div className=" flex">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className=" flex flex-col w-full justify-center">
          <div className=" w-full py-10 font-semibold text-xl border-b-1">
            Sản phẩm yêu thích
          </div>
          <div className="space-y-2">
            {favorites.map((value, index) => (
              <div className="flex flex-col py-3" key={index}>
                <div className="flex lg:flex-row flex-col items-center gap-x-5">
                  <div className='flex items-center bg-gray-100'>
                    <Image
                      alt="img"
                      src={value.color.images[0]}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className='flex flex-col w-full'>
                    <div className='border-b-1'>
                      <div className='flex justify-between sticky py-2'>
                        <div className=" flex flex-col space-y-2">
                          <p className='text-xl font-medium flex items-center gap-x-3'>{value.name} {value.category !== "" && <Badge variant="outline">{value.category.toUpperCase()}</Badge>}</p>
                          <p className='text-sm font-medium'>{value.color.color_name}</p>
                        </div>
                        <p className='text-xl font-medium'>{formatNumber(parseInt(value.color.specs.price))}đ</p>
                      </div>
                    </div>

                    <div className=' flex flex-col gap-y-2'>
                      <div className=" flex  items-center justify-between">
                        <div className=' font-semibold text-sm gap-3 flex pt-3'>
                          {value.color.specs.ram !== "" && <Badge variant="outline">{value.color.specs.ram}</Badge>}
                          {value.color.specs.ssd !== "" && <Badge variant="outline">{value.color.specs.ssd}</Badge>}
                          {value.color.specs.connection !== "" && <Badge variant="outline">{value.color.specs.connection}</Badge>}
                          {value.color.specs.desc !== "" && <Badge variant="outline">{value.color.specs.desc}</Badge>}
                        </div>
                        {(value.category === "laptop" || value.category === "desktop" || value.category === "display") ?
                          <Link href={`/shop/computer/${value.category}/${value.product_id}`}>
                            <p className=" font-medium underline">Đi tới cửa hàng</p>
                          </Link> :
                          <Link href={`/shop/${value.category}/${value.product_id}`}>
                            <p className=" font-medium underline">Đi tới cửa hàng</p>
                          </Link>
                        }
                      </div>
                      <div className='text-sm font-semibold flex gap-3 items-center'>
                        <Button variant="ghost" size="icon" onClick={() => save(value.color.specs.inventory_id)}>
                          <BookmarkCheck />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => add_to_cart(value.color.specs.inventory_id)}>
                          <ShoppingCart />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
    </div>
  )
}