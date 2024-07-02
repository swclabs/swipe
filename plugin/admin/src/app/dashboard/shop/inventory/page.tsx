'use client'
import { SelectDemo } from "@/components/inventory/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";


export default function Page() {
  return (
    <ScrollArea className="h-full bg-muted/40">
      <div className="p-5">
        <h1 className=" text-2xl font-semibold py-3">Inventory</h1>
        <div className=" text-sm font-semibold text-gray-500 flex space-x-3 pb-3">
          <Badge>All</Badge> <Badge>Active</Badge> <Badge>Draft</Badge> <Badge>Archived</Badge>
        </div>
        <div className=" flex pb-3 w-[300px] items-center">
          <Button variant={"outline"} size={"default"} className="w-full justify-start">
            <div className="flex space-x-2 items-center">
              <Search className="w-4" />
              <div className=" text-sm">
                Search
              </div>
            </div>
          </Button>
        </div>
        <div className=" flex space-x-3">
          <SelectDemo />
          <SelectDemo />
          <SelectDemo />
          <SelectDemo />
          <Button size={"default"}>Filter</Button>
        </div>
      </div>
    </ScrollArea >
  )
}