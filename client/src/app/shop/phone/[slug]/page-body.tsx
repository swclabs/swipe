'use client';
import AddToCart from "@/app/shop/_components/add-to-cart";
import ShopDeviceCarousel from "@/app/shop/_components/carousel";
import Colors from "@/app/shop/_components/colors";
import SpecMemory from "@/app/shop/_components/spec-memory";
import SpecSSD from "@/app/shop/_components/spec-ssd";
import Version from "@/app/shop/_components/version";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useProducts } from "@/state/products";
import { formatNumber } from "@/utils/fmt";
import { LoaderCircle, Star } from "lucide-react";
import { SessionProviderProps } from "next-auth/react";
import { useEffect } from "react";

export default function PhonePageBody({ session, id }: { session: SessionProviderProps["session"], id: number }) {
  const {
    details,
    color,
    specs,
    setColor,
    setSpecs,
    fetchProduct
  } = useProducts()
  useEffect(() => {
    setSpecs({ ram: "", ssd: "", price: "", connection: "", desc: "", inventory_id: -1, favorite: false })
    fetchProduct(id)
  }, [])

  if (!details) {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <LoaderCircle className="animate-spin" />
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
            <div className=" font-medium pt-2">{formatNumber(parseInt(details?.color[0].specs[0]?.price))}đ</div>
          }
        </div>

        <div className="flex flex-col md:flex-row relative max-h-max space-x-10 w-full py-10">
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