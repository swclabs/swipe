'use client';
import AddToCart from "@/app/shop/_components/add-to-cart";
import ShopDeviceCarousel from "@/app/shop/_components/carousel";
import Colors from "@/app/shop/_components/colors";
import ConnectionDetail from "@/app/shop/_components/connection";
import Version from "@/app/shop/_components/version";
import watchDetail from "@/faker/watch-detail";
import { useProducts } from "@/state/products";
import { SessionProviderProps } from "next-auth/react";
import { useEffect } from "react";

export default function WatchPageBody({ session, id }: { session: SessionProviderProps["session"], id: number }) {
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
      <div className=" container pt-10">
        <div className=" text-red-500 font-medium pt-5">Mới</div>
        <div className=" font-semibold text-5xl pt-2">
          Mua {details?.name}
        </div>
      </div>

      <div className="flex container flex-col md:flex-row pt-14 relative max-h-max">
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
        <div className=" md:w-1/3 py-5 md:py-0">
          {details && <Version product={details} />}

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
            <ConnectionDetail
              product={details}
              color={color}
              specs={specs}
              setSpecs={setSpecs}
              setColor={setColor}
            />
          }
        </div>
      </div>
      {
        details &&
        <AddToCart
          session={session}
          product={details}
          color={color}
          specs={specs}
          setSpecs={setSpecs}
          setColor={setColor}
        />
      }
      {/* <Comment /> */}
    </div>
  )
}