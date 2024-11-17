"use client"

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Truck } from "lucide-react"
import { useEffect } from "react"
import { Orders } from "@/services/orders"
import { Order } from "@/types/orders"


export function TrackOrder({ order, setOrder }: { order: Order, setOrder: (order: Order) => void }) {
  const sync = async (order_code: string, status: string) => {
    try {
      await Orders.updateStatus({
        order_code: order_code,
        status: status,
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline" className="h-8 gap-1">
          <Truck className="h-3.5 w-3.5" />
          <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
            Track Order
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={order.delivery.status.toLowerCase() === "cancelled"}
          onClick={() => {
            setOrder({ ...order, delivery: { ...order.delivery, status: "cancelled" } })
            sync(order.uuid, "cancelled")
          }}
        >
          <p className=" font-semibold text-red-500">Cancelled</p>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={order.delivery.status.toLowerCase() === "active"}
          onClick={() => {
            setOrder({ ...order, delivery: { ...order.delivery, status: "active" } })
            sync(order.uuid, "active")
          }}
        >
          <p className=" font-semibold text-blue-700">Active</p>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={order.delivery.status.toLowerCase() === "shipping"}
          onClick={() => {
            setOrder({ ...order, delivery: { ...order.delivery, status: "shipping" } })
            sync(order.uuid, "shipping")
          }}
        >
          <p className=" font-semibold text-green-500">Shipping</p>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={order.delivery.status.toLowerCase() === "delivered"}
          onClick={() => {
            setOrder({ ...order, delivery: { ...order.delivery, status: "delivered" } })
            sync(order.uuid, "delivered")
          }}
        >
          <p className=" font-semibold text-yellow-500">Delivered</p>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
