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
import { spec } from "node:test/reporters"

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
    id: string;
    product_name: string;
    product_id: string;
    status: string;
    price: string;
    available: string;
    currency_code: string;
    specs: Specs;
     */
    initialValues: {
      id: src.id,
      product_name: src.product_name,
      product_id: src.product_id,
      status: src.status,
      price: src.price,
      available: src.available,
      currency_code: src.currency_code,
      ram: src.specs.ram,
      ssd: src.specs.ssd,
      image: src.image,
    },
    onSubmit: values => {
      // Fetch API to update the inventory
      console.log("test")
      const updateInventory = async () => {
        const updatedValues = {
          ...values,
          specs: src.specs // Add the missing 'specs' property
        };
        const res = await InventoryService.NewInventory(updatedValues);
        res.status === 201 ?
          toast({
            title: "Inventory updated",
            description: "The inventory has been updated successfully",
          }) :
          toast({
            title: "Error",
            description: "An error occurred while updating the inventory",
          });
      };
      updateInventory();
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
                    {src.image.map((value, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6 bg-gray-100 rounded-xl">
                              {/* <Image
                                src={value}
                                width={500}
                                height={500}
                              /> */}
                              <Image loader={() => value} src={value} alt="Product Image" width={500} height={500} />
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
                {/* <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="color">Color</Label>
                  <Input
                    id="color"
                    defaultValue={src.specs.color}
                    className="col-span-2 h-8"
                    disabled
                  />
                </div> */}
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="ram">RAM</Label>
                  <Input
                    id="ram"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.ram}
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="ssd">SSD</Label>
                  <Input
                    id="ssd"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.ssd}
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
            </DialogFooter>
          </form>
          <Button variant={"destructive"}
            onClick={() => {
              setIsDeleteOpen(!isDeleteOpen)
              setIdDelete(src.id)
              // deletefunc(src.id)
            }}
          >
            Delete
          </Button>
        </DialogContent>
      </Dialog >
    </>
  )
}
