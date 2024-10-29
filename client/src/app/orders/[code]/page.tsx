'use client'

import { Orders } from "@/service/orders"
import { Order } from "@/types/orders"
import { formatNumber } from "@/utils/fmt"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function Page({ params }: { params: { code: string } }) {
  const [order, setOrder] = useState<Order | null>(null)
  useEffect(() => {
    const f = async () => {
      try {
        const { data } = await Orders.getOrders(params.code)
        setOrder(data)
      }
      catch (error) {
        console.log(error)
      }
    }
    f()
  }, [])
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const { total, quantity } = order?.items?.reduce(
      (acc, product) => {
        acc.quantity += product.quantity;
        acc.total += parseFloat(product.total_amount);
        return acc;
      },
      { total: 0, quantity: 0 }
    ) || { total: 0, quantity: 0 };

    setQuantity(quantity);
    setTotalPrice(total);
  }, [order]);

  return (
    <div className="w-full h-screen">
      <div className=" flex">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className=" flex flex-col w-full justify-center">
          <div className=" w-full py-10 font-semibold text-xl border-b-1">
            Đơn hàng
          </div>
          <p className=" text-sm font-light"> Đơn hàng được tạo vào lúc {order?.time}</p>
          <div className="lg:flex lg:flex-row flex-col w-full justify-center pt-5 gap-x-5">
            <div className=" flex-1 flex flex-col gap-y-2">
              <h2 className=" font-semibold border-b-1 text-lg">Sản phẩm</h2>
              <div className=" flex flex-col gap-y-3">
                {order &&
                  order.items.map((item, index) => (
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
                  <p className=" font-medium">{order?.user.first_name}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">Last name</p>
                  <p className="font-medium">{order?.user.last_name}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">Mobile</p>
                  <p className=" font-medium">{order?.user.phone}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">Email</p>
                  <p className=" font-medium">{order?.user.email}</p>
                </div>
              </div>
              <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5 items-center">
                <div className="w-full flex justify-between items-center">
                  <p className="">Street</p>
                  <p className="font-medium"></p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">Ward</p>
                  <p className="font-medium">{order?.address.ward}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">District</p>
                  <p className=" font-medium">{order?.address.district}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">City</p>
                  <p className=" font-medium">{order?.address.city}</p>
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
                  <p className="font-medium">{order?.time}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">Order Time</p>
                  <p className="font-medium">{order?.time}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">Order ID</p>
                  <p className="font-medium">{order?.uuid}</p>
                </div>
              </div>
              <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5 items-center">
                <div className="w-full flex justify-between items-center">
                  <p className="">Subtotal</p>
                  <p className="font-medium">{formatNumber(totalPrice)}đ</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">Quantity</p>
                  <p className="font-medium">{quantity}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">Estimate Delivery</p>
                  <p className="font-medium">0đ</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="">Discount</p>
                  <p className="font-medium">0đ</p>
                </div>
              </div>
              <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5 items-center">
                <div className="w-full flex justify-between items-center">
                  <p className="">Total</p>
                  <p className="font-medium">{formatNumber(totalPrice)}đ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
    </div>
  )
}