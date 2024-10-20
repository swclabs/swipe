'use client';
import ShopDeviceCarousel from "@/components/content/shop/carousel";
import Colors from "@/components/content/shop/colors";
import Version from "@/components/content/shop/version";
import { useEffect } from "react";
import { laptop } from "@/faker/mac-detail";
import SpecMemory from "@/components/content/shop/spec-memory";
import SpecSSD from "@/components/content/shop/spec-ssd";
import { useProducts } from "@/state/products";
import AddToCart from "@/components/content/shop/add-to-cart";
import Comment from "@/components/content/shop/comment";


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
          product={details}
          color={color}
          specs={specs}
          setColor={setColor}
          setSpecs={setSpecs}
        />
      }
      <Comment />
    </div>
  )
}