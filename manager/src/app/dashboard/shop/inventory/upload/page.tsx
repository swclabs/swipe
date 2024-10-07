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

const breadcrumbItems = [{ title: "Inventory", link: "/dashboard/shop" }, { title: "Upload", link: "/dashboard/inventory/upload" }];

export default function Page() {
    const { toast } = useToast()
    const formik = useFormik({
        /*
            id: string;
            product_name: string;
            product_id: string;
            status: string;
            price: string;
            available: string;
            currency_code: string;
            specs: Specs;

            interface Specs {
                color: string;
                ram: string;
                ssd: string;
                color_image: string;
                image: string[];
            }
        */
        initialValues: {
            id: '',
            product_name: '',
            price: '',
            description: '',
            available: '',
            status: 'active',
            product_id: '',
            currency_code: '',
            specs: {
                color: '',
                ram: '',
                ssd: '',
                color_image: '',
                image: []
            }
        },
        onSubmit: values => {
            const postNewInventory = async () => {
                const newInventoryRes = await InventoryService.NewInventory(values)
                newInventoryRes.status === 201 ?
                    toast({
                        title: "Update products information",
                        // description: newInventoryRes.data.msg,
                    }) :
                    toast({
                        title: "Update products information",
                        description: "Failure",
                    })
            }
            postNewInventory()
            console.log("test")
        },
    });

    return (

        <ScrollArea className="h-full">
            <div className=" pl-6 pt-6 bg-muted/40">
                <BreadCrumb items={breadcrumbItems} />
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex items-center gap-4 py-4 px-4">
                    {/* <Button variant="outline" size="icon" className="h-7 w-7">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Back</span>
                    </Button> */}
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
                        <Button size="sm" type="submit">Save</Button>
                    </div>
                </div>
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
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    className="w-full"
                                    defaultValue={formik.values.product_name}
                                    onChange={(e) => {
                                        formik.setFieldValue("name", e.target.value);
                                    }}
                                />
                            </div>
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
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    defaultValue={formik.values.description}
                                    className=" min-h-[6rem]"
                                    onChange={(e) => {
                                        formik.setFieldValue("description", e.target.value);
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
                        </div>
                    </CardContent>
                </Card>
            </form>
        </ScrollArea>
    )
}