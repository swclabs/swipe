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
import FilterBox from "./_components/filter-box";



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
        <div className="py-5 w-full">
          <InventoryTableComponent />
        </div>
      </div>
    </ScrollArea >
  )
}