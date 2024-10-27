'use client';
import ShopDeviceCarousel from "@/app/shop/_components/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import watchDetail from "@/faker/watch-detail";
import { useProducts } from "@/state/products";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { CiDeliveryTruck } from "react-icons/ci";


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
    setDetails(watchDetail[0])
  }, [])
  return (
    <div className=" container w-[87%] m-auto">
      <div className="flex container flex-col md:flex-row pt-14 relative max-h-max my-5">
        <div className="container md:pr-14 w-full md:w-2/3">
          <div className=" w-full sticky top-[100px]">
            {details &&
              <ShopDeviceCarousel
                product={details}
                color={color}
                setColor={setColor}
              />}
          </div>
        </div>
        <div className=" md:w-1/3 p-5 md:py-0">
          <h1 className=" font-semibold text-3xl py-4">
            AirPods (thế hệ thứ 2)
          </h1>
          <div className=" text-xl">
            3.499.000đ
          </div>
          <div className=" flex gap-3 pt-4">
            <Badge variant="secondary">Phụ kiện</Badge>
            <Badge variant="secondary">Airpods</Badge>
          </div>
          <Separator className="my-5" />
          <div className=" flex w-full items-center gap-5 mt-5">
            <CiDeliveryTruck size={50} className=" font-light" />
            <div className=" text-left flex-1">
              <p className=" font-semibold">
                Giao hàng:
              </p>
              <p className=" text-sm font-light">
                Còn hàng
              </p>
              <p className=" text-sm font-light">
                Vận chuyển miễn phí
              </p>
            </div>
          </div>
          <div className=" flex w-full mt-5">
            <Button color="primary" fullWidth >Thêm vào giỏ hàng</Button>
          </div>
        </div>
      </div>
      {/* <Comment /> */}
    </div>
  )
}