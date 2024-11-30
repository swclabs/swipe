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
import { spec } from "node:test/reporters"
import { Pencil } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProductSpecsDialog({ src }: { src: StockItemBody }) {
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
      id: src.id,
      product_name: src.product_name,
      price: src.price,
      available: src.available,
      status: src.status,
      product_id: src.product_id,
      currency_code: src.currency_code,
      image: [],
      color_img: src.color_img,
      color: src.color,
      specs: src.specs
    },
    onSubmit: async (values) => {
      // Fetch API to update the inventory
      values.id = values.id.toString();
      values.product_id = values.product_id.toString();
      console.log(values);
      try {
        const resp = await InventoryService.UpdateInventory(values);
        toast({
          title: "Inventory updated",
          description: "The inventory has been updated successfully",
        })
      }
      catch (e) {
        console.log(e);
        toast({
          title: "Error",
          description: "An error occurred while updating the inventory",
        });
      }
    }
  });

  return (
    <>
      <DeleteConfirmDialog
        id={idDelete}
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        deletefunc={deletefunc}
      />
      <Dialog>
        <DialogTrigger asChild>
          <div className=" flex items-center">
            <Button size="icon" variant="outline"><Pencil className=" text-blue-500" /></Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[70%] h-[70vh]">
          <DialogHeader>
            <DialogTitle>{src.product_name}</DialogTitle>
            <DialogDescription>
              Product Specification
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex px-10">
              <div className="w-1/2">
                <Carousel className="w-[80%] md:max-w-md sm:max-w-sm">
                  <CarouselContent>
                    {src.image.map((value, index) => (
                      <CarouselItem key={index}>
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center bg-gray-100 rounded-xl">
                              <Image loader={() => value} src={value} alt="Product Image" width={500} height={500} />
                            </CardContent>
                          </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious type="button" />
                  <CarouselNext type="button" />
                </Carousel>
              </div>
              <div className="grid gap-0 p-5">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="id">ID</Label>
                  <Input
                    id="id"
                    defaultValue={src.id}
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
                    value={formik.values.product_name}
                    disabled
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="color">Color</Label>
                  <Input
                    id="color"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.color}
                    disabled
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="currency_code">Currency Code</Label>
                  <Input
                    id="currency_code"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.currency_code}
                    disabled
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
                  <Label htmlFor="available">Available</Label>
                  <Input
                    id="available"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.available}

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

            <DialogFooter>
              <Button type="submit">
                Save changes
              </Button>
              <Button
                type="button"
                variant={"destructive"}
                onClick={() => {
                  setIsDeleteOpen(!isDeleteOpen)
                  setIdDelete(src.id)
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
