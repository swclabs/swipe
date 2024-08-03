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

export function ProductSpecsDialog({ src }: { src: StockItem }) {
  return (
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
                defaultValue={src.specs.ram}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="ssd">SSD</Label>
              <Input
                id="ssd"
                defaultValue={src.specs.ssd}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                defaultValue={src.price}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="available">Available</Label>
              <Input
                id="available"
                defaultValue={src.available}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                defaultValue={src.status}
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
