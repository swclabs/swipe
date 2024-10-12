'use client';
import { AddWatchToCart } from "@/components/shop/add-to-cart";
import ShopDeviceCarousel, { ShopAccessoryCarousel } from "@/components/shop/carousel";
import Colors from "@/components/shop/colors";
import Comment from "@/components/shop/comment";
import ConnectionDetail from "@/components/shop/connection";
import Spec from "@/components/shop/spec";
import SpecMemory from "@/components/shop/spec-memory";
import SpecSSD from "@/components/shop/spec-ssd";
import Version from "@/components/shop/version";
import ipadDetail from "@/faker/ipad-details";
import watchDetail from "@/faker/watch-detail";
import { useProducts } from "@/state/products";
import { ProductDetail } from "@/types/products";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";


export default function Page({ params }: { params: { slug: string } }) {
  const {
    details,
    version,
    color,
    specs,
    setVersion,
    setDetails,
    setColor,
    setSpecs,
  } = useProducts()
  useEffect(() => {
    setDetails(watchDetail)
  }, [])
  return (
    <div className=" container w-[87%] m-auto">
      <div className=" container pt-10">
        <div className=" text-red-500 font-medium pt-5">Mới</div>
        <div className=" font-semibold text-5xl pt-2">
          Mua {version === -1 ? details[0]?.name : details[version]?.name}
        </div>
      </div>

      <div className="flex container flex-col md:flex-row pt-14 relative max-h-max">
        <div className="container md:pr-14 w-full md:w-2/3">
          <div className=" w-full sticky top-[100px]">
            <ShopAccessoryCarousel product={details}
              version={version}
              color={color}
              setColor={setColor}
              setVersion={setVersion}
            />
          </div>

        </div>
        <div className=" md:w-1/3 py-5 md:py-0">
          <Version
            product={details}
            version={version}
            setVersion={setVersion}
          />

          <div className=' mt-5 text-xs'>
            Trả góp theo tháng với phí dịch vụ thực 1.67%, sau khi thanh toán lần đầu 20%.
            Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.
          </div>

          <Colors
            product={details}
            version={version}
            color={color}
            setColor={setColor}
            setVersion={setVersion}
          />

          <ConnectionDetail
            product={details}
            version={version}
            color={color}
            specs={specs}
            setSpecs={setSpecs}
            setColor={setColor}
            setVersion={setVersion}
          />
        </div>
      </div>
      <AddWatchToCart
        product={details}
        version={version}
        color={color}
        specs={specs}
        setSpecs={setSpecs}
        setVersion={setVersion}
        setColor={setColor}
      />
      <Comment />
    </div>
  )
}