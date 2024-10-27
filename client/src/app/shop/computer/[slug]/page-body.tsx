'use client';
import AddToCart from "@/app/shop/_components/add-to-cart";
import ShopDeviceCarousel from "@/app/shop/_components/carousel";
import Colors from "@/app/shop/_components/colors";
import SpecMemory from "@/app/shop/_components/spec-memory";
import SpecSSD from "@/app/shop/_components/spec-ssd";
import Version from "@/app/shop/_components/version";
import { laptop } from "@/faker/mac-detail";
import { useProducts } from "@/state/products";
import { SessionProviderProps } from "next-auth/react";
import { useEffect } from "react";


export default function ComputerPageBody({ session, id }: { session: SessionProviderProps["session"], id: number }) {
  const {
    details,
    color,
    specs,
    setDetails,
    setColor,
    setSpecs,
  } = useProducts()

  useEffect(() => {
    setSpecs({ ram: "", ssd: "", price: "", connection: "", desc: "", inventory_id: -1 })
    setDetails(laptop[0])
  }, [])

  return (
    <div className=" container w-[87%] m-auto">
      <div className=" container pt-10">
        <div className=" text-red-500 font-medium pt-5">Mới</div>
        <div className=" font-semibold text-5xl pt-2">Mua {details?.name}</div>
        {details?.color[0].specs !== undefined &&
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
        <div className=" md:w-1/3 md:py-0 flex flex-col gap-y-8">
          {details && <Version product={details} />}

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
      {
        details &&
        <AddToCart
          session={session}
          product={details}
          color={color}
          specs={specs}
          setColor={setColor}
          setSpecs={setSpecs}
        />
      }
      {/* <Comment /> */}
    </div>
  )
}