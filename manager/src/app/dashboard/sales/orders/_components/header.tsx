import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Order } from "@/types/orders";
import { filterDatesByCurrentMonth, filterDatesByCurrentWeek } from "@/utils/date";
import { formatNumber } from "@/utils/fmt";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ orders }: { orders: Order[] }) {
  const [totalWeek, setTotalWeek] = useState<number>(0)
  const [totalMonth, setTotalMonth] = useState<number>(0)

  useEffect(() => {

    const week = filterDatesByCurrentWeek(orders)
    const month = filterDatesByCurrentMonth(orders)

    const sumOfWeek = week.reduce((acc, item) => acc + parseInt(item.total_amount), 0)
    const sumOfMonth = month.reduce((acc, item) => acc + parseInt(item.total_amount), 0)

    setTotalWeek(sumOfWeek)
    setTotalMonth(sumOfMonth)
  }, [orders])

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card
        className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
      >
        <CardHeader className="pb-3">
          <CardTitle>Your Orders</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Introducing Our Dynamic Orders Dashboard for Seamless
            Management and Insightful Analysis.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/dashboard/sales/orders/new"><Button>Create New Order</Button></Link>
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle className="text-2xl">{formatNumber(totalWeek)}đ</CardTitle>
          <CardContent className=" p-0">
            <div className="text-xs text-muted-foreground">
              Tổng giá trị đơn hàng trong tuần
            </div>
          </CardContent>
        </CardHeader>
      </Card>
      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription>This Month</CardDescription>
          <CardTitle className="text-2xl">{formatNumber(totalMonth)}đ</CardTitle>
          <CardContent className=" p-0">
            <div className="text-xs text-muted-foreground">
              Tổng giá trị đơn hàng trong tháng
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}