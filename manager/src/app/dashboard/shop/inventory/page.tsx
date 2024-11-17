'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Group, PlusCircle, Search, ShoppingBag, Package, Truck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useInventory } from "@/state/inventory";
import { useEffect } from "react";
import { InventoryTableComponent } from "./_components/table";



export default function Page() {

  // const deleteItem = (id: number) => {
  //   const func = async (id: number) => {
  //     const res = await InventoryService.DeleteInventory(id)
  //   }
  //   func(id)
  // }

  const { inventory, fetchInventory } = useInventory()
  useEffect(() => {
    fetchInventory()
  }, [])

  return (
    <ScrollArea className="h-full bg-muted/40">
      <div className="w-full px-6">
        <div className="w-full">
          <div className="flex items-center justify-between py-3">
            <h1 className=" text-2xl font-semibold">Inventory</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">
                  Items
                </CardTitle>
                <ShoppingBag />
              </CardHeader>
              <CardContent className="grid gap-1">
                <p className="text-xs text-muted-foreground">
                  Add new item
                </p>
                <a href="/dashboard/shop/inventory/upload">
                  <Button className="w-1/2" size="sm">
                    New
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">
                  Products
                </CardTitle>
                <Package />
              </CardHeader>
              <CardContent className="grid gap-1">
                <p className="text-xs text-muted-foreground">
                  Add new product
                </p>
                <Button className="w-1/2" size="sm">New</Button>
              </CardContent >
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">
                  Category
                </CardTitle>
                <Group />
              </CardHeader>
              <CardContent className="grid gap-1">
                <p className="text-xs text-muted-foreground">
                  Add new category
                </p>
                <Button className="w-1/2" size="sm">New</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">
                  Suppiler
                </CardTitle>
                <Truck />
              </CardHeader>
              <CardContent className="grid gap-1">
                <p className="text-xs text-muted-foreground">
                  Add new supplier
                </p>
                <Button className="w-1/2" size="sm">New</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="py-5 w-full">
          {/* <div className=" text-sm font-semibold text-gray-500 flex space-x-3">
            <Badge variant={"secondary"}>All</Badge>
            <Badge variant={"default"}>Active</Badge>
            <Badge variant={"outline"}>Draft</Badge>
            <Badge variant={"destructive"}>Archived</Badge>
          </div> */}
          <InventoryTableComponent />
        </div>
      </div>
    </ScrollArea >
  )
}