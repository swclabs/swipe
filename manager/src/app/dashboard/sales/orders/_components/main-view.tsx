"use client"
import { useEffect, useState } from "react";
import Content from "./card/card-content";
import CardInfo from "./card/card-info";
import Header from "./header";
import { Order } from "@/types/orders";
import { Orders } from "@/services/orders";


export default function MainView() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [order, setOrder] = useState<Order>();
  useEffect(() => {
    const f = async () => {
      try {
        const response = await Orders.getOrderLimit(10);
        setOrders(response.data);
      }
      catch (error) {
        console.error(error);
      }
    }
    f();
  }, []);

  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Header orders={orders} />
        <Content orders={orders} setOrder={setOrder} setOrders={setOrders} />
      </div>
      {order && <CardInfo order={order} />}
    </>
  )
}