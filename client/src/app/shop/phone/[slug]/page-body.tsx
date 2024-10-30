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
    <div className=" flex justify-center max-h-max">
      <div className=" flex flex-col gap-2">
        <div className=" container pt-10">
          <div className=" text-red-500 font-medium pt-5">Mới</div>
          <div className=" font-semibold text-5xl pt-2">Mua {details?.name}</div>
          {details?.color[0]?.specs !== undefined &&
            <div className=" font-base text-xs pt-2">{details?.color[0].specs[0]?.price}</div>
          }
        </div>
        <div className="flex container flex-col md:flex-row pt-14 relative">
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
          <div className=" md:w-1/3 py-5 md:py-0 flex flex-col gap-y-8">
            {details &&
              <Version
                product={details}
              />
            }
            <div className="flex gap-x-1 items-center">
              <p className=" text-xs">Bạn đã mua sản phẩm, đánh giá ngay</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="ghost"><Star /></Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you are done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">

                  </div>
                  <DialogFooter>
                    <Button type="submit">Send</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

            </div>
            {/* <div className=' mt-5 text-xs'>
            Trả góp theo tháng với phí dịch vụ thực 1.67%, sau khi thanh toán lần đầu 20%.
            Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.
          </div> */}

            {details &&
              <Colors
                product={details}
                color={color}
                setColor={setColor}
                setSpecs={setSpecs}
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
    </div >
  )
}