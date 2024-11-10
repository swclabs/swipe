
"use client"
import {
  File,
  ListFilter,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Order } from "@/types/orders"
import { formatNumber } from "@/utils/fmt"
import { useEffect, useState } from "react"
import { filterDatesByCurrentMonth, filterDatesByCurrentWeek } from "@/utils/date"
import SearchByEmail from "../search"

interface IContentProps {
  orders: Order[]
  setOrder: (orders: Order) => void
  setOrders : (orders: Order[]) => void
}

export default function Content({ orders, setOrder, setOrders }: IContentProps) {

  const [orderWeek, setOrderWeek] = useState<Order[]>([])
  const [orderMonth, setOrderMonth] = useState<Order[]>([])

  useEffect(() => {
    setOrderWeek(filterDatesByCurrentWeek(orders))
    setOrderMonth(filterDatesByCurrentMonth(orders))
  }, [orders])

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
        <SearchByEmail orders={orders} setOrders={setOrders} />
        </div>
      </div>
      <TabsContent value="all">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              Recent orders from your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Type
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Status
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date
                  </TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow className="cursor-pointer	" key={index} onClick={() => {
                    setOrder(order)
                  }}>
                    <TableCell>
                      <div className="font-medium">{order.user.first_name} {order.user.last_name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {order.user.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {order.delivery.method}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="outline">
                        {order.delivery.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {order.time}
                    </TableCell>
                    <TableCell className="text-right">{formatNumber(parseInt(order.total_amount))} đ</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="week">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              Recent orders from your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Type
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Status
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date
                  </TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderWeek.map((order, index) => (
                  <TableRow key={index} onClick={() => {
                    setOrder(order)
                  }}>
                    <TableCell>
                      <div className="font-medium">{order.user.first_name} {order.user.last_name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {order.user.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {order.delivery.method}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="outline">
                        {order.delivery.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {order.time}
                    </TableCell>
                    <TableCell className="text-right">{formatNumber(parseInt(order.total_amount))} đ</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="month">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              Recent orders from your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Type
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Status
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date
                  </TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderMonth.map((order, index) => (
                  <TableRow key={index} onClick={() => {
                    setOrder(order)
                  }}>
                    <TableCell>
                      <div className="font-medium">{order.user.first_name} {order.user.last_name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {order.user.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {order.delivery.method}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="outline">
                        {order.delivery.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {order.time}
                    </TableCell>
                    <TableCell className="text-right">{formatNumber(parseInt(order.total_amount))} đ</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

  )
}