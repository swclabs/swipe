'use client';
import ShopDeviceCarousel from "@/components/shop/carousel";
import Colors from "@/components/shop/colors";
import SpecMemory from "@/components/shop/spec-memory";
import SpecSSD from "@/components/shop/spec-ssd";
import Version from "@/components/shop/version";
import iphoneDetail from "@/faker/iphone-detail";
import { useProducts } from "@/state/products";
import { Suspense, useEffect, useState } from "react";
import AddToCart from "@/components/shop/add-to-cart";
import Comment from "@/components/shop/comment";


export default function Page({ params }: { params: { slug: number } }) {
  const {
    details,
    color,
    specs,
    setColor,
    setSpecs,
    fetchProduct
  } = useProducts()

  useEffect(() => {
    setSpecs({ ram: "", ssd: "", price: "", connection: "", desc: "" })
    fetchProduct(params.slug)
  }, [])

  return (
    <div className=" container w-[87%] m-auto">
      <div className=" container pt-10">
        <div className=" text-red-500 font-medium pt-5">Mới</div>
        <div className=" font-semibold text-5xl pt-2">Mua {details?.name}</div>
        {details?.color[0]?.specs !== undefined &&
          <div className=" font-base text-xs pt-2">{details?.color[0].specs[0]?.price}</div>
        }
      </div>

      <div className="flex container flex-col md:flex-row pt-14 relative max-h-max">
        <div className="container md:pr-14 w-full md:w-2/3">
          <div className=" w-full sticky top-[100px]">
            {details &&
              <ShopDeviceCarousel
                product={details}
                color={color}
                setColor={setColor}
              />
            }
          </div>
        </div>
        <div className=" md:w-1/3 py-5 md:py-0">
          {details &&
            <Version
              product={details}
            />
          }

          <div className=' mt-5 text-xs'>
            Trả góp theo tháng với phí dịch vụ thực 1.67%, sau khi thanh toán lần đầu 20%.
            Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.
          </div>

          {details &&
            <Colors
              product={details}
              color={color}
              setColor={setColor}
            />
          }

          {details &&
            <SpecMemory
              product={details}
              color={color}
              specs={specs}
              setSpecs={setSpecs}
              setColor={setColor}
            />
          }

          {details &&
            <SpecSSD
              product={details}
              color={color}
              specs={specs}
              setColor={setColor}
              setSpecs={setSpecs}
            />
          }
        </div>
      </div>
      {details &&
        <AddToCart
          product={details}
          color={color}
          specs={specs}
          setColor={setColor}
          setSpecs={setSpecs}
        />}
      <Comment />
    </div >
  )
}