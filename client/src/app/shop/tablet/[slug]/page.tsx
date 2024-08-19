'use client';
import ShopDeviceCarousel from "@/components/shop/carousel";
import Colors from "@/components/shop/colors";
import Spec from "@/components/shop/spec";
import SpecMemory from "@/components/shop/spec-memory";
import SpecSSD from "@/components/shop/spec-ssd";
import Version from "@/components/shop/version";
import ipadDetail from "@/faker/ipad-details";
import { useProductWithSpecs } from "@/state";
import { ProductDetail, Specs } from "@/types/products";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


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
  } = useProductWithSpecs()


  useEffect(() => {
    setSpecs({ RAM: "", SSD: "", price: "" })
    setDetails(ipadDetail)
  }, [])
  console.log(specs)
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
            <ShopDeviceCarousel product={details}
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

          <SpecMemory
            product={details}
            color={color}
            version={version}
            specs={specs}
            setSpecs={setSpecs}
            setColor={setColor}
            setVersion={setVersion}
          />

          <SpecSSD
            product={details}
            version={version}
            color={color}
            specs={specs}
            setColor={setColor}
            setVersion={setVersion}
            setSpecs={setSpecs}
          />
        </div>
      </div>
      {details[version] && details[version].color[color] && specs.SSD !== "" &&
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
            <div className=" container flex w-4/5 flex-col md:flex-row">
              <div className=" container font-semibold text-3xl p-10">
                {details[version]?.name} mới của bạn.
                <span className=" text-gray-400">Theo cách bạn muốn.</span>
              </div>
              <div className=" container p-10">
                <div className=" mb-2">{details[version]?.name} {specs.SSD} {details[version].color[color].name}</div>
                <div className=" font-semibold">Tổng cộng {specs.price}</div>
              </div>
              <div className=" container p-10">
                <div className=" font-semibold">Giao hàng:</div>
                <div className=" text-sm">Còn hàng</div>
                <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

                <Button className=" w-full" color="primary">thêm vào giỏ hàng</Button>
              </div>
            </div>
          </div>
        </motion.div>
      }
    </div>
  )
}