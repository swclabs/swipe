import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { Order } from "@/types/orders";
import { formatDate, formatNumber } from "@/utils/fmt";
import { ChevronLeft, ChevronRight, Copy, CreditCard, MoreVertical, Truck } from "lucide-react";
import { TrackOrder } from "../dropdown";
import { useEffect, useState } from "react";

export default function CardInfo({ order, setOrder }: { order: Order, setOrder: (order: Order) => void }) {
  return (
    <div className=" sticky top-5">
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Order {order.uuid}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>Date: {formatDate(order.time)}</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <TrackOrder order={order} setOrder={setOrder} />
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Order Details</div>
            <ul className="grid gap-3">
              {order.items.map((item, index) => (
                <li className="flex items-center justify-between" key={index}>
                  <span className="text-muted-foreground">
                    {item.name} x<span>{item.quantity}</span>
                  </span>
                  <span>{formatNumber(parseInt(item.total_amount))}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatNumber(parseInt(order.total_amount))}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>0</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>0</span>
              </li>
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>{formatNumber(parseInt(order.total_amount))}</span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <div className="font-semibold">Shipping Information</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>{order.address.street}</span>
                <span>{order.address.ward}</span>
                <span>{order.address.district}, {order.address.city}</span>
              </address>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Billing Information</div>
              <div className="text-muted-foreground">
                Same as shipping address
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd>{order.user.first_name} {order.user.last_name}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">{order.user.email}</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">{order.user.phone}</a>
                </dd>
              </div>
            </dl>
          </div>
          {/* <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Payment Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-1 text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
            </dl>
          </div> */}
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">{formatDate(order.time)}</time>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}