"use client"

import { Orders } from "@/service/orders"
import { useEffect, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Order } from "@/types/orders"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { formatNumber } from "@/utils/fmt"

export default function Page() {
  const [order, setOrder] = useState<Order[]>([])
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await Orders.getOrderLimit(100)
        setOrder(resp.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    f()
  }, [])
  const sumary = (order: Order) => {
    const { total, quantity } = order?.items?.reduce(
      (acc, product) => {
        acc.quantity += product.quantity;
        acc.total += parseFloat(product.total_amount);
        return acc;
      },
      { total: 0, quantity: 0 }
    ) || { total: 0, quantity: 0 };
    return { total, quantity }
  }
  return (
    <div className="w-full max-h-max min-h-screen">
      <div className=" flex lg:pt-10">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className="flex flex-col w-full justify-center">
          <div className=" w-full py-10 font-semibold text-xl border-b-1">
            Đơn hàng của bạn
          </div>
          <div className=" flex flex-col">
            {order?.map((item, index) => (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className=" flex gap-x-3 items-center">
                      {item.uuid}
                      <Badge variant="outline">{item.time}</Badge>
                      <Badge variant="outline">{item.delivery.status.toUpperCase()}</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className=" flex flex-col w-full justify-center">
                      <div className="lg:flex lg:flex-row flex-col w-full justify-center pt-5 gap-x-5">
                        <div className=" flex-1 flex flex-col gap-y-2">
                          <h2 className=" font-semibold border-b-1 text-lg">Sản phẩm</h2>
                          <div className=" flex flex-col gap-y-3">
                            {
                              item.items.map((item, index) => (
                                <div className="flex items-center gap-x-3" key={index}>
                                  <div className="p-2">
                                    <Image
                                      alt="product"
                                      src={`${item.image}`}
                                      width={80}
                                      height={80}
                                    />
                                  </div>
                                  <div className=" flex flex-col">
                                    <p className="font-medium text-lg">{item.name}</p>
                                    <p className=" text-sm">Price: {formatNumber(parseInt(item.total_amount))}đ</p>
                                    <p className=" text-sm">Quantity: {item.quantity}</p>
                                  </div>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                        <div className=" sm:w-1/12 shrink-0 snap-center">
                          <div className="shrink-0"></div>
                        </div>
                        <div className=" flex-1 flex flex-col gap-y-2">
                          <h2 className=" font-semibold border-b-1 text-lg">Thông tin vận chuyển</h2>
                          <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5">
                            <div className="w-full flex justify-between items-center">
                              <p className="">First name</p>
                              <p className=" font-medium">{item?.user.first_name}</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Last name</p>
                              <p className="font-medium">{item?.user.last_name}</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Mobile</p>
                              <p className=" font-medium">{item?.user.phone}</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Email</p>
                              <p className=" font-medium">{item?.user.email}</p>
                            </div>
                          </div>
                          <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5 items-center">
                            <div className="w-full flex justify-between items-center">
                              <p className="">Street</p>
                              <p className="font-medium">{item?.address.street}</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Ward</p>
                              <p className="font-medium">{item?.address.ward}</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">District</p>
                              <p className=" font-medium">{item?.address.district}</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">City</p>
                              <p className=" font-medium">{item?.address.city}</p>
                            </div>
                          </div>
                        </div>
                        <div className=" sm:w-1/12 shrink-0 snap-center">
                          <div className="shrink-0"></div>
                        </div>
                        <div className=" flex-1 flex flex-col gap-y-2">
                          <h2 className=" font-semibold border-b-1 text-lg">Tổng quan</h2>
                          <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5 items-center">
                            <div className="w-full flex justify-between items-center">
                              <p className="">Order Date</p>
                              <p className="font-medium">{item?.time}</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Order Time</p>
                              <p className="font-medium">{item?.time}</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Order ID</p>
                              <p className="font-medium">{item?.uuid}</p>
                            </div>
                          </div>
                          <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5 items-center">
                            <div className="w-full flex justify-between items-center">
                              <p className="">Subtotal</p>
                              <p className="font-medium">{formatNumber(sumary(item).total)}đ</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Quantity</p>
                              <p className="font-medium">{sumary(item).quantity}</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Estimate Delivery</p>
                              <p className="font-medium">0đ</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Discount</p>
                              <p className="font-medium">-{formatNumber(sumary(item).total - parseInt(item.total_amount))}đ</p>
                            </div>
                          </div>
                          <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5 items-center">
                            <div className="w-full flex justify-between items-center">
                              <p className="">Total</p>
                              <p className="font-medium">{formatNumber(parseInt(item.total_amount))}đ</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                              <p className="">Phương thức thanh toán</p>
                              <p className="font-medium">{item?.payment_method}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
    </div >
  )
}