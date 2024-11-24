'use client';
import { ScrollArea } from "@/components/ui/scroll-area"
import BreadCrumb from "@/components/dashboard/breadcrumb"
import { useProduct } from "@/state/products"
import { useEffect } from "react"
import { ProductService } from "@/services/products";
import { CouponsDataTable } from "./_components/table";

const breadcrumbItems = [
  { title: "Product", link: "/dashboard/shop/product" }
];


export default function Page() {
  return (
    <ScrollArea className="h-full bg-muted/40">
      <div className="w-full px-6">
        <div className="py-5 w-full">
          <CouponsDataTable />
        </div>
      </div>
    </ScrollArea >
  )
}
