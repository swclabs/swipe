"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/state/purchase";
import { formatNumber } from "@/utils/fmt";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Page() {
  const { carts, fetchCart, setCart } = useCart();
  useEffect(() => {
    fetchCart();
  }, []);
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const { total, quantity } = carts?.products?.reduce(
      (acc, product) => {
        acc.quantity += product.quantity;
        acc.total += parseFloat(product.price) * product.quantity;
        return acc;
      },
      { total: 0, quantity: 0 }
    ) || { total: 0, quantity: 0 };

    setQuantity(quantity);
    setTotalPrice(total);
  }, [carts]);

  const handleDelete = (cart_id: number) => {
    if (carts) {
      setCart({
        user_id: carts.user_id,
        products: carts.products.filter((value) => value.cart_id !== cart_id)
      });
    }
  }

  const up = (cart_id: number) => {
    if (carts) {
      setCart({
        user_id: carts.user_id,
        products: carts.products.map((value) => {
          if (value.cart_id === cart_id) {
            value.quantity += 1;
          }
          return value;
        })
      });
    }
  }

  const down = (cart_id: number) => {
    if (carts) {
      setCart({
        user_id: carts.user_id,
        products: carts.products.map((value) => {
          if (value.cart_id === cart_id) {
            if (value.quantity > 1)
              value.quantity -= 1;
          }
          return value;
        })
      });
    }
  }

  return (
    <div className="w-full h-screen">
      <div className=" flex lg:pt-10">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className=" flex w-full">
          <div className=" lg:w-3/5 py-5 flex-col flex">
            <h2 className=" py-5 font-semibold text-lg">Bag</h2>
            <div className="space-y-5">
              {carts?.products.map((value, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex lg:flex-row flex-col justify-between">
                    <div className='flex items-center gap-10 lg:flex-row flex-col'>
                      <Image
                        alt="img"
                        src={value.image}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className='flex flex-col p-5 lg:w-2/3'>
                      <div className='border-b-1'>
                        <div className='flex justify-between sticky py-2'>
                          <div className=" flex flex-col gap-y-2">
                            <p className='text-xl font-medium'>{value.name}</p>
                            <p className='text-sm font-medium'>{value.color}</p>
                          </div>
                          <p className='text-xl font-medium'>{formatNumber(parseInt(value.price) * value.quantity)}đ</p>
                        </div>
                      </div>

                      <div className=' flex flex-col gap-y-2'>
                        <div className=' font-semibold text-sm gap-3 flex pt-3'>
                          <Badge variant="outline">{value.category.toUpperCase()}</Badge>
                          {value.specs.ram !== "" && <Badge variant="outline">{value.specs.ram}</Badge>}
                          {value.specs.ssd !== "" && <Badge variant="outline">{value.specs.ssd}</Badge>}
                          {value.specs.connection !== "" && <Badge variant="outline">{value.specs.connection}</Badge>}
                          {value.specs.desc !== "" && <Badge variant="outline">{value.specs.desc}</Badge>}
                        </div>
                        <div className='text-sm font-semibold flex gap-3 items-center'>
                          <div className=" flex items-center gap-x-3">
                            <Button variant="ghost" size="icon" onClick={() => down(value.cart_id)}>
                              <Minus size={13} />
                            </Button>
                            {value.quantity}
                            <Button variant="ghost" size="icon" onClick={() => up(value.cart_id)}>
                              <Plus size={13} />
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => {
                            handleDelete(value.cart_id);
                          }}>
                            <Trash size={13} className=" text-red-600" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          <div className=" text-sm flex flex-col gap-y-2 py-5 lg:w-2/5">
            <h2 className=" font-semibold text-lg py-5">Summary</h2>
            <div className="w-full flex justify-between font-medium">
              <p className="">Subtotal</p>
              <p className="">{formatNumber(totalPrice)}đ</p>
            </div>
            <div className="w-full flex justify-between font-medium">
              <p className="">Quantity</p>
              <p className="">{quantity}</p>
            </div>
            <div className="w-full flex justify-between font-medium">
              <p className="">Estimate Delivery</p>
              <p className="">0đ</p>
            </div>
            <div className="w-full flex justify-between font-medium">
              <p className="">Discount</p>
              <p className="">0đ</p>
            </div>
            <div className=" text-sm flex flex-col gap-y-2 border-y-1 py-5">
              <div className="w-full flex justify-between font-medium">
                <p className="">Total</p>
                <p className="">{formatNumber(totalPrice)}đ</p>
              </div>
            </div>
            <Input placeholder="Add coupon" />
            <Button variant="secondary" type="submit">Add Coupon</Button>
            <Link href="/orders/new"><Button className=" w-full">Thanh Toán</Button></Link>
          </div>
        </div>
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div >
    </div >
  )
}