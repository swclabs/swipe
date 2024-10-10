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
import { StockItem } from "@/types/inventory"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import { InventoryService } from "@/services/inventory"
import { DeleteConfirmDialog } from "./responsive-dialog"
import React from "react"
import { useFormik } from "formik"
import { useToast } from "@/components/ui/use-toast";

export function ProductSpecsDialog({ src }: { src: StockItem }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [idDelete, setIdDelete] = useState(-1);

  const deletefunc = (id: number) => {
    console.log("Delete payment with ID: ", id);
    const func = async (id: number) => {
      const res = await InventoryService.DeleteInventory(id)
    }
    func(id)
  }
  const { toast } = useToast()
  const formik = useFormik({
    /*
    ID
    Color
    Ram
    SSD
    Price
    Available
    Status
     */
    initialValues: {
      id: src.id,
      color: src.specs.color,
      RAM: src.specs.ram,
      SSD: src.specs.ssd,
      price: src.price,
      available: src.available,
      status: src.status,
    },
    onSubmit: values => {
      // Fetch API to update the inventory
      console.log("test")
    },
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
            <Button variant="ghost" className="justify-start">
              {src.product_name}
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[60%]">
          <DialogHeader>
            <DialogTitle>{src.product_name}</DialogTitle>
            <DialogDescription>
              Product Specification
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex px-10">
              <div className="w-1/2">
                <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    {src.specs.image.map((value, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6 bg-gray-100 rounded-xl">
                              <Image
                                src={value}
                                width={500}
                                height={500}
                                alt="Product image"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="grid gap-0 p-5">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="id">ID</Label>
                  <Input
                    id="id"
                    defaultValue={src.id}
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="color">Color</Label>
                  <Input
                    id="color"
                    defaultValue={src.specs.color}
                    className="col-span-2 h-8"
                    disabled
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="ram">RAM</Label>
                  <Input
                    id="ram"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.RAM}
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="ssd">SSD</Label>
                  <Input
                    id="ssd"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.SSD}
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
                  <Input
                    id="status"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.available}
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Save changes</Button>
              <Button variant={"destructive"}
                onClick={() => {
                  setIsDeleteOpen(!isDeleteOpen)
                  setIdDelete(Number(src.id))
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
