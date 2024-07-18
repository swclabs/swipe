'use client'
import { SearchDialog } from "@/components/inventory/dialog";
import { SelectDemo } from "@/components/inventory/select";
import { InventoryTableComponent } from "@/components/inventory/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusCircle, Search } from "lucide-react";


export default function Page() {
  return (
    <ScrollArea className="h-full bg-muted/40">
      <div className="container">
        <div className=" container">
          <div className="flex items-center justify-between py-3">
            <h1 className=" text-2xl font-semibold">Inventory</h1>
            <div className="flex space-x-3">
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <div className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add
                </div>
              </Button>
              <SearchDialog />
            </div>
          </div>
          <div className=" text-sm font-semibold text-gray-500 flex space-x-3 pb-3">
            <Badge variant={"secondary"}>All</Badge>
            <Badge variant={"default"}>Active</Badge>
            <Badge variant={"outline"}>Draft</Badge>
            <Badge variant={"destructive"}>Archived</Badge>
          </div>
          <div className=" flex space-x-3">
            <SelectDemo />
            <SelectDemo />
            <SelectDemo />
            <SelectDemo />
            <Button size={"default"}>Filter</Button>
          </div>
        </div>

        <div className=" container py-5">
          <InventoryTableComponent />
        </div>
      </div>
    </ScrollArea >
  )
}