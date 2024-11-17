'use client';
import { ScrollArea } from "@/components/ui/scroll-area"
import BreadCrumb from "@/components/dashboard/breadcrumb"
import { useProduct } from "@/state/products"
import { useEffect } from "react"
import { ProductService } from "@/services/products";
import { ProductDataTable } from "./_components/table";

const breadcrumbItems = [
  { title: "Product", link: "/dashboard/shop/product" }
];


export default function Page() {
  return (
    <ScrollArea className="h-full bg-muted/40">
      <div className="w-full px-6">
        <div className="w-full">
          <div className="flex items-center justify-between py-3">
            <h1 className=" text-2xl font-semibold">Products</h1>
          </div>
        </div>
        <div className="py-5 w-full">
          <ProductDataTable />
        </div>
      </div>
    </ScrollArea >
  )
}
