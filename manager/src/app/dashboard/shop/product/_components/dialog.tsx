'use client';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { StockItem, StockItemBody } from "@/types/inventory"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import { InventoryService } from "@/services/inventory"
import { DeleteConfirmDialog } from "./responsive-dialog"
import React from "react"
import { useFormik } from "formik"
import { Pencil } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductResp } from "@/types/products"
import { ProductService } from "@/services/products";
import { Textarea } from "@/components/ui/textarea";

export function ProductSpecsDialog({ original }: { original: ProductResp }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [idDelete, setIdDelete] = useState("");

  const deletefunc = (id: string) => {
    const func = async (id: string) => {
      const res = await InventoryService.DeleteInventory(id)
    }
    func(id)
  }
  const onStatusChange = (status: string) => {
    formik.setFieldValue("status", status)
  }
  const { toast } = useToast()
  const formik = useFormik({
    initialValues: {
      ...original,
    },
    onSubmit: async (values) => {
      try {
        await ProductService.UpdateProduct(values);
        console.log(values);
        toast({
          title: "Product updated",
          description: "The product has been updated successfully",
        })
      }
      catch (e) {
        console.log(e);
        toast({
          title: "Error",
          variant: "destructive",
          description: "An error occurred while updating the inventory",
        });
      }
    }
  });

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className=" flex items-center">
            <Button size="icon" variant="outline"><Pencil className=" text-blue-500" /></Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[50%] min-h-[50vh] max-h-max">
          <DialogHeader>
            <DialogTitle>{original.name}</DialogTitle>
            <DialogDescription>
              Product Specification
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex px-10 justify-between">
              <div className="flex aspect-square items-center justify-center p-6 bg-gray-100 rounded-xl">
                <Image
                  loader={() => original.image}
                  src={original.image}
                  alt="Product Image"
                  width={100}
                  height={100}
                  className=" w-full"
                />
              </div>
              <div className=" container">
                <div className="grid p-5 gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="id">ID</Label>
                    <Input
                      id="id"
                      defaultValue={formik.values.id}
                      className="col-span-2 h-8"
                      disabled
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      className="col-span-2 h-8"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      className="col-span-2 h-8"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      className="col-span-2 h-8"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="status">Status</Label>
                    <Select onValueChange={onStatusChange} defaultValue={formik.values.status}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="disabled">Disabled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">
                Save changes
              </Button>
              <Button
                type="button"
                variant={"destructive"}
                onClick={() => {
                  setIsDeleteOpen(!isDeleteOpen)
                  setIdDelete(original.id.toString())
                }}
              >
                Delete
              </Button>
            </DialogFooter>
          </form>

        </DialogContent>
      </Dialog >
    </>
  )
}
