'use client';

import {
    ChevronLeft,
    Plus,
    Trash2,
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import ImageUploader from "@/components/dashboard/image-upload"
import BreadCrumb from "@/components/dashboard/breadcrumb"

import { useFormik } from "formik"
import { useEffect, useState } from "react";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useCategories, useSuppliers } from "@/state/products";
import { useToast } from "@/components/ui/use-toast";
import { ProductService } from "@/services/products";
import { InventoryService } from "@/services/inventory";
import { spec } from "node:test/reporters";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

const breadcrumbItems = [{ title: "Inventory", link: "/dashboard/shop" }, { title: "Upload", link: "/dashboard/inventory/upload" }];

export default function Page() {
    const { toast } = useToast()
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const formik = useFormik({
        /*
           {
                "available": "1000",
                "currency_code": "VND",
                "price": "40000000",
                "product_id": 6,
                "color": "Black Titanium",
                "specs": {
                    "connection": "",
                    "desc": "",
                    "ram": "16GB",
                    "ssd": "512GB"
                },
                "status": "active"
            }
        */
        initialValues: {
            product_name: '',
            price: '',
            available: '',
            status: 'active',
            product_id: '',
            currency_code: 'VND',
            image: [],
            color_img: '',
            color: '',
            specs: {
                ram: '',
                ssd: '',
                connection: '',
                desc: '',
            }
        },
        onSubmit: values => {
            const postNewInventory = async () => {
                const newInventoryRes = await InventoryService.NewInventory({
                    ...values,
                    product_id: Number(values.product_id),
                });
                newInventoryRes.status === 201 ?
                    toast({
                        title: "Update products information",
                        description: newInventoryRes.data.msg,
                    }) :
                    toast({
                        title: "Update products information",
                        description: "Failure",
                    });
                const newInventoryImages = await InventoryService.NewInventoryImage(uploadedFiles, newInventoryRes.data.id);
                newInventoryImages.status === 201 ?
                    toast({
                        title: "Update products images",
                        description: newInventoryImages.data.msg,
                    }) :
                    toast({
                        title: "Update products images",
                        description: "Failure",
                    });
            };
            postNewInventory();
        },
    });

    return (
        <ScrollArea className="h-full">
            <div className=" pl-6 pt-6 bg-muted/40">
                <BreadCrumb items={breadcrumbItems} />
            </div>
            <form onSubmit={formik.handleSubmit}>
                {/* <div className="flex items-center gap-4 py-4 px-4">
                    <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                        Upload New Inventory
                    </h1>
                    <Badge variant="outline" className="ml-auto sm:ml-0">
                        inventories
                    </Badge>
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="sm" type="button">
                                    Discard
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Confirm Discard</DialogTitle>
                                    <DialogDescription>
                                        Delete all items from the forms
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter className="sm:justify-end">
                                    <DialogClose asChild>
                                        <Button
                                            type="reset"
                                            variant="secondary"
                                            onClick={() => {
                                                formik.resetForm();
                                                window.location.reload();
                                            }}
                                        >
                                            Confirm
                                        </Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button type="button" variant="default">
                                            Close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        <Button
                            size="sm"
                            type="submit"
                        >
                            <a href="/dashboard/shop/inventory">
                                Save
                            </a>
                        </Button>
                    </div>
                </div> */}

                <div className="flex min-h-screen w-full flex-col bg-muted/40 p-5">
                    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <div className="mx-auto grid max-w-[1000px] w-full flex-1 auto-rows-max gap-4">
                            <div className="flex items-center gap-4">
                                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                                    Upload New Inventory
                                </h1>
                                <Badge variant="outline" className="ml-auto sm:ml-0">
                                    inventories
                                </Badge>
                                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" size="sm" type="button">
                                                Discard
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md">
                                            <DialogHeader>
                                                <DialogTitle>Confirm Discard</DialogTitle>
                                                <DialogDescription>
                                                    Delete all items from the forms
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter className="sm:justify-end">
                                                <DialogClose asChild>
                                                    <Button
                                                        type="reset"
                                                        variant="secondary"
                                                        onClick={() => {
                                                            formik.resetForm();
                                                            window.location.reload();
                                                        }}
                                                    >
                                                        Confirm
                                                    </Button>
                                                </DialogClose>
                                                <DialogClose asChild>
                                                    <Button type="button" variant="default">
                                                        Close
                                                    </Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <Button
                                        size="sm"
                                        type="submit"
                                    >
                                        <a href="/dashboard/shop/inventory">
                                            Save
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
                                <div className="grid auto-rows-max items-start gap-4 col-span-2 lg:gap-8">
                                    <Card x-chunk="dashboard-07-chunk-0">
                                        <CardHeader>
                                            <CardTitle>Inventory Details</CardTitle>
                                            <CardDescription>
                                                Lipsum dolor sit amet, consectetur adipiscing elit
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-6">
                                                <div className="grid gap-3">
                                                    <Label htmlFor="name">Price</Label>
                                                    <Input
                                                        id="name"
                                                        type="text"
                                                        className="w-full"
                                                        defaultValue={formik.values.price}
                                                        onChange={(e) => {
                                                            formik.setFieldValue("price", e.target.value);
                                                        }}
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="available">Available</Label>
                                                    <Textarea
                                                        id="available"
                                                        defaultValue={formik.values.available}
                                                        className=" w-full"
                                                        onChange={(e) => {
                                                            formik.setFieldValue("available", e.target.value);
                                                        }}
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="available">Status</Label>
                                                    <Textarea
                                                        id="status"
                                                        defaultValue={formik.values.status}
                                                        className=" w-full"
                                                        onChange={(e) => {
                                                            formik.setFieldValue("status", e.target.value);
                                                        }}
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="available">Color</Label>
                                                    <Textarea
                                                        id="color"
                                                        defaultValue={formik.values.color}
                                                        className=" w-full"
                                                        onChange={(e) => {
                                                            formik.setFieldValue("color", e.target.value);
                                                        }}
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="available">Product ID</Label>
                                                    <Textarea
                                                        id="product_id"
                                                        defaultValue={formik.values.product_id}
                                                        className=" w-full"
                                                        onChange={(e) => {
                                                            formik.setFieldValue("product_id", e.target.value);
                                                        }}
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="available">SSD</Label>
                                                    <Textarea
                                                        id="ssd"
                                                        defaultValue={formik.values.specs.ssd}
                                                        className=" w-full"
                                                        onChange={(e) => {
                                                            formik.setFieldValue("ssd", e.target.value);
                                                        }}
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="available">RAM</Label>
                                                    <Textarea
                                                        id="ram"
                                                        defaultValue={formik.values.specs.ram}
                                                        className=" w-full"
                                                        onChange={(e) => {
                                                            formik.setFieldValue("ram", e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="grid auto-rows-max items-start gap-4 col-span-2 lg:gap-8">
                                    <Card>
                                        <CardHeader x-chunk="dashboard-07-chunk-1">
                                            <CardTitle>Inventory Images</CardTitle>
                                            <CardDescription>
                                                Lipsum dolor sit amet, consectetur adipiscing elit
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-2">
                                                <ImageUploader
                                                    uploadedFiles={uploadedFiles}
                                                    setUploadedFiles={setUploadedFiles}
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader x-chunk="dashboard-07-chunk-1">
                                            <CardTitle>Color Images</CardTitle>
                                            <CardDescription>
                                                Lipsum dolor sit amet, consectetur adipiscing elit
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-2">
                                                <ImageUploader
                                                    uploadedFiles={uploadedFiles}
                                                    setUploadedFiles={setUploadedFiles}
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </ScrollArea>
    )
}