'use client';

import {
  ChevronLeft,
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
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import ImageUploader from "@/components/dashboard/image-upload"
import BreadCrumb from "@/components/dashboard/breadcrumb"

import { useFormik } from "formik"
import { useEffect, useState } from "react";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { ProductService } from "@/services/products";

const breadcrumbItems = [
  { title: "Products", link: "/dashboard/products" },
  { title: "Suppliers", link: "/dashboard/products/suppliers" },
  { title: "Upload", link: "/dashboard/products/suppliers/upload" }
];

export default function Page() {
  const { toast } = useToast()
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: values => {
      const postNewSupplier = async () => {
        const newCategory = await ProductService.PostCategory(values)
        newCategory.status === 201 ?
          toast({
            title: "Category information",
            description: newCategory.data.msg,
          }) :
          toast({
            title: "Category information",
            description: "Failure",
          })
      }
      postNewSupplier()
    },
  });


  return (
    <ScrollArea className="h-full">
      <div className=" pl-6 pt-6 bg-muted/40">
        <BreadCrumb items={breadcrumbItems} />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40 p-5">
          <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[1000px] w-full flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Upload New Suppliers
                </h1>
                <Badge variant="outline" className="ml-auto sm:ml-0">
                  products
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
                  <Button size="sm" type="submit">Save Product</Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 col-span-1 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Product Details</CardTitle>
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
                            defaultValue={formik.values.name}
                            onChange={(e) => {
                              formik.setFieldValue("name", e.target.value);
                            }}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="name">Description</Label>
                          <Input
                            id="description"
                            type="text"
                            className="w-full"
                            defaultValue={formik.values.description}
                            onChange={(e) => {
                              formik.setFieldValue("description", e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:hidden">
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
                <Button size="sm">Save Product</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ScrollArea >
  )
}
