'use client';
import AddToCart from "@/app/shop/_components/add-to-cart";
import ShopDeviceCarousel from "@/app/shop/_components/carousel";
import Colors from "@/app/shop/_components/colors";
import SpecMemory from "@/app/shop/_components/spec-memory";
import SpecSSD from "@/app/shop/_components/spec-ssd";
import Version from "@/app/shop/_components/version";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { display, laptop } from "@/faker/mac-detail";
import { useProducts } from "@/state/products";
import { formatNumber } from "@/utils/fmt";
import { LoaderCircle, Truck } from "lucide-react";
import { SessionProviderProps } from "next-auth/react";
import { useEffect } from "react";


export default function ComputerPageBody({ session, id, type }: { session: SessionProviderProps["session"], id: number, type: string }) {
  const {
    details,
    color,
    specs,
    setDetails,
    setColor,
    setSpecs,
  } = useProducts()

  useEffect(() => {
    setSpecs({ ram: "", ssd: "", price: "", connection: "", desc: "", inventory_id: -1, favorite: false })
    setDetails(laptop[0])
  }, [])

  if (!details) {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <LoaderCircle className="animate-spin" />
      </div>
    )
  }

  if (type === "display") {
    return (
      <div className=" w-full flex">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="flex flex-col lg:flex-row gap-x-10 w-full">
            <div className="w-full md:w-2/3">
              <div className="w-full sticky top-[100px]">
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
                <Badge variant="secondary">{type}</Badge>
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

  return (
    <div className=" w-full min-h-screen flex">
      <div className=" sm:w-1/12 shrink-0 snap-center">
        <div className="shrink-0"></div>
      </div>
      <div className=" w-full">
        <div className="w-full">
          <div className=" text-red-500 font-medium pt-5">Mới</div>
          <div className=" font-semibold text-5xl pt-2">Mua {details?.name}</div>
          {details?.color[0].specs !== undefined &&
            <div className=" font-base text-xs pt-2">{details?.color[0].specs[0]?.price}</div>
          }
        </div>

        <div className="flex flex-col md:flex-row relative max-h-max space-x-10 w-full">
          <div className="container w-full md:w-2/3">
            <div className="w-full sticky top-[100px]">
              {details &&
                <ShopDeviceCarousel
                  product={details}
                  color={color}
                  setColor={setColor}
                />
              }
            </div>

          </div>
          <div className=" md:w-1/3 md:py-0 flex flex-col gap-y-8">
            {details &&
              <>
                <Version product={details} />
                <Colors
                  product={details}
                  color={color}
                  setColor={setColor}
                  setSpecs={setSpecs}
                />
                <SpecMemory
                  product={details}
                  color={color}
                  specs={specs}
                  setSpecs={setSpecs}
                  setColor={setColor}
                />
                <SpecSSD
                  product={details}
                  color={color}
                  specs={specs}
                  setColor={setColor}
                  setSpecs={setSpecs}
                />
              </>
            }
          </div>
        </div>
        {details &&
          <AddToCart
            session={session}
            product={details}
            color={color}
            specs={specs}
            setColor={setColor}
            setSpecs={setSpecs}
          />
        }
      </div>
      <div className=" sm:w-1/12 shrink-0 snap-center">
        <div className="shrink-0"></div>
      </div>
    </div>
  )
}