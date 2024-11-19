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
import { useProduct } from "@/state/products";

export default function Page() {
  const { product, fetchProduct } = useProduct()
  useEffect(() => {
    fetchProduct()
  }, [])

  const { toast } = useToast()
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const formik = useFormik({
    initialValues: {
      product_name: '',
      price: '',
      available: '',
      status: 'active',
      product_id: 0,
      currency_code: 'VND',
      image: [],
      color_img: '',
      color: 'Black Titanium',
      specs: {
        ram: '512GB',
        ssd: '16GB',
        connection: '',
        desc: '',
      }
    },
    onSubmit: values => {
      const postNewInventory = async () => {
        const newInventoryRes = await InventoryService.NewInventory(values);
        newInventoryRes.status === 201 ?
          toast({
            title: "Update products information",
            description: newInventoryRes.data.msg,
          }) :
          toast({
            title: "Update products information",
            description: "Failure",
          });
      };
      postNewInventory();
      window.history.back();
    },
  });

  return (
    <ScrollArea className="h-full">
      <form onSubmit={formik.handleSubmit}>

        <div className="flex min-h-screen w-full flex-col bg-muted/40 p-5">
          <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[1000px] w-full flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
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
                    Save
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
                          <Label htmlFor="available">Product</Label>
                          {/* <Textarea
                                                        id="product_id"
                                                        defaultValue={formik.values.product_id}
                                                        className=" w-full"
                                                        onChange={(e) => {
                                                            formik.setFieldValue("product_id", e.target.value);
                                                        }}
                                                    /> */}
                          <select
                            className="text-sm border border-gray-300 rounded-md w-full p-2"
                            id="product_id"
                            defaultValue={"Select Product"}
                            onChange={(e) => {
                              formik.setFieldValue("product_id", parseInt(e.target.value));
                            }}
                          >
                            <option hidden disabled value="Select Product">Select Product</option>
                            {product?.body.map((value, index) => {
                              return (
                                <option
                                  className="text-sm"
                                  key={index}
                                  value={value.id}
                                >
                                  {value.name}
                                </option>
                              );
                            })}
                          </select>
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
                          <Input
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
                          {/* <Input
                                                        id="status"
                                                        defaultValue={formik.values.status}
                                                        className=" w-full"
                                                        onChange={(e) => {
                                                            formik.setFieldValue("status", e.target.value);
                                                        }}
                                                    /> */}
                          <Select
                            disabled
                            value={formik.values.status}
                            onValueChange={(value) => {
                              formik.setFieldValue("status", value);
                            }}
                          >
                            <SelectTrigger id="status" aria-label="Select status">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="draft">Draft</SelectItem>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="available">Color</Label>
                          <Input
                            id="color"
                            defaultValue={formik.values.color}
                            className=" w-full"
                            onChange={(e) => {
                              formik.setFieldValue("color", e.target.value);
                            }}
                          />
                        </div>
                        {/* <div className="grid gap-3">
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
                                                </div> */}
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-2">
                    <CardHeader>
                      <CardTitle>Specification</CardTitle>
                      <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Specs</TableHead>
                            <TableHead>Value</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-semibold">
                              SSD
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="stock-3" className="sr-only">
                                SSD
                              </Label>
                              <Input
                                id="ssd"
                                defaultValue={formik.values.specs.ssd}
                                className="w-full"
                                onChange={(e) => {
                                  formik.setFieldValue("ssd", e.target.value);
                                }}
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">
                              RAM
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="stock-3" className="sr-only">
                                RAM
                              </Label>
                              <Input
                                id="ram"
                                defaultValue={formik.values.specs.ram}
                                className="w-full"
                                onChange={(e) => {
                                  formik.setFieldValue("ram", e.target.value);
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
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