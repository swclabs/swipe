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
import { useToast } from "@/components/ui/use-toast";
import { spec } from "node:test/reporters"

export function ProductSpecsDialog({ src }: { src: StockItemBody }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [idDelete, setIdDelete] = useState(-1);

  const deletefunc = (id: number) => {
    const func = async (id: number) => {
      const res = await InventoryService.DeleteInventory(id)
    }
    func(id)
  }
  const { toast } = useToast()
  const formik = useFormik({
    /*
      "id": "<string>",
      "available": "<string>",
      "currency_code": "<string>",
      "price": "<string>",
      "product_id": "<string>",
      "status": "<string>"
     */
    initialValues: {
      id: src.id,
      product_name: '',
      price: src.price,
      available: src.available,
      status: 'active',
      product_id: src.product_id,
      currency_code: 'VND',
      image: [],
      color_img: 'https://res.cloudinary.com/dqsiqqz7q/image/upload/v1728696770/swc-storage/l2er9ptyweeoxyx2zqmu.jpg',
      color: 'Black Titanium',
      specs: {
        ram: '16GB',
        ssd: '512GB',
        connection: '',
        desc: '',
      }
    },
    onSubmit: values => {
      // Fetch API to update the inventory
      const updateInventory = async () => {
        const res = await InventoryService.UpdateInventory(values);
        console.log(res);
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
                  <Label htmlFor="currency_code">Currency Code</Label>
                  <Input
                    id="currency_code"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.currency_code}
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
                  <Input
                    id="status"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.status}
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="status">Product ID</Label>
                  <Input
                    id="product_id"
                    className="col-span-2 h-8"
                    onChange={formik.handleChange}
                    value={formik.values.product_id}
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
            }}
          >
            Delete
          </Button>
        </DialogContent>
      </Dialog >
    </>
  )
}
