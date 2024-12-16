'use client';
import AddToCart from "@/app/shop/_components/add-to-cart";
import ShopDeviceCarousel from "@/app/shop/_components/carousel";
import Colors from "@/app/shop/_components/colors";
import ConnectionDetail from "@/app/shop/_components/connection";
import Version from "@/app/shop/_components/version";
import watchDetail from "@/faker/watch-detail";
import { useProducts } from "@/state/products";
import { LoaderCircle } from "lucide-react";
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
    fetchProduct,
  } = useProducts()
  useEffect(() => {
    fetchProduct(id);
    if (details) {
      setDetails(details)
    }
  }, [])

  if (!details) {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <LoaderCircle className="animate-spin" />
      </div>
    )
  }
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
        <div className=" md:w-1/3 py-5 md:py-0 flex flex-col space-y-5">
          {details && <Version product={details} />}

          {details &&
            <Colors
              product={details}
              color={color}
              setColor={setColor}
              setSpecs={setSpecs}
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