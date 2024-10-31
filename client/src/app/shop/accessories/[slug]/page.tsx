'use client';
import ShopDeviceCarousel from "@/app/shop/_components/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { accessory_iphone } from "@/faker/accessory-details";
import { useProducts } from "@/state/products";
import { formatNumber } from "@/utils/fmt";
import { LoaderCircle, Truck } from "lucide-react";
import { useEffect } from "react";


export default function Page({ params }: { params: { slug: string } }) {
  const {
    details,
    color,
    specs,
    setDetails,
    setColor,
    setSpecs,
  } = useProducts()
  useEffect(() => {
    setDetails(accessory_iphone[0])
  }, [])

  if (!details) {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <LoaderCircle className="animate-spin" />
      </div>
    )
  }

  return (
    <div className=" w-full flex">
      <div className=" sm:w-1/12 shrink-0 snap-center">
        <div className="shrink-0"></div>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-x-10 w-full">
          <div className="w-full md:w-2/3 flex justify-center">
            <div className=" w-[300px] lg:w-[450px] sticky top-[100px]">
              {details &&
                <ShopDeviceCarousel
                  product={details}
                  color={color}
                  setColor={setColor}
                />}
            </div>
          </div>
          <div className="lg:w-1/3 md:py-0 p-5 lg:p-0">
            <h1 className=" font-semibold text-3xl py-4">
              {details.name}
            </h1>
            <div className=" text-xl font-semibold">
              {formatNumber(parseInt(details?.color[0]?.specs[0]?.price))}đ
            </div>
            <div className=" flex gap-3 pt-4">
              <Badge variant="secondary">Phụ kiện</Badge>
            </div>
            <Separator className="my-5" />
            <div className=" flex w-full gap-5 mt-5">
              <Truck size={25} />
              <div className=" text-left flex-1">
                <p className=" font-semibold">
                  Giao hàng:
                </p>
                <p className=" text-sm">
                  Còn hàng
                </p>
                <p className=" text-sm">
                  Vận chuyển miễn phí
                </p>
              </div>
            </div>
            <div className=" flex w-full mt-5 flex-col space-y-3">
              <Button className=" w-full" >Thêm vào giỏ hàng</Button>
              <Button className=" w-full" variant="secondary" >Lưu sản phẩm</Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:w-1/12 shrink-0 snap-center">
        <div className="shrink-0"></div>
      </div>
    </div>
  )
}