'use client';

import {
    File,
    ListFilter,
    PlusCircle,
} from "lucide-react"


import { Button } from "@/components/ui/button"
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
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import BreadCrumb from "@/components/dashboard/breadcrumb"
import { TabsContentWithStatus } from "@/components/products/product"
import { useProduct } from "@/state/products"
import { useEffect } from "react"

const breadcrumbItems = [
    { title: "Products", link: "/dashboard/products" },
    { title: "All", link: "/dashboard/products/product-all" }
];


export default function Page() {
    const { product, fetchProduct } = useProduct()
    useEffect(() => {
        fetchProduct()
    }, [])


    console.log(product)

    return (
        <ScrollArea className="h-full">
            <div className=" pl-6 pt-6 bg-muted/40">
                <BreadCrumb items={breadcrumbItems} />
            </div>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="draft">Draft</TabsTrigger>
                                <TabsTrigger value="archived" className="hidden sm:flex">
                                    Archived
                                </TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm" className="h-8 gap-1">
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                Filter
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>
                                            Active
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Draft
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Archived
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button size="sm" variant="outline" className="h-8 gap-1">
                                    <File className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Export
                                    </span>
                                </Button>
                                <a href="/dashboard/products/product-all/upload">
                                    <Button size="sm" className="h-8 gap-1">
                                        <PlusCircle className="h-3.5 w-3.5" />
                                        <div className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                            Add Product
                                        </div>
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <TabsContent value="all">
                            {product != null && <TabsContentWithStatus input={product} status="all" />}
                        </TabsContent>
                        <TabsContent value="draft">
                            {product != null && <TabsContentWithStatus input={product} status="draft" />}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </ScrollArea>
    )
}
