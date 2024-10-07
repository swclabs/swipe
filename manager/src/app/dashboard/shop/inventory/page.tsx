'use client'
import { SelectDemo } from "@/components/inventory/select";
import { InventoryTableComponent } from "@/components/inventory/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Group, PlusCircle, Search, ShoppingBag, Package, Truck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"



export default function Page() {

  // const deleteItem = (id: number) => {
  //   const func = async (id: number) => {
  //     const res = await InventoryService.DeleteInventory(id)
  //   }
  //   func(id)
  // }

  return (
    <ScrollArea className="h-full bg-muted/40">
      <div className="container">
        <div className=" container">
          <div className="flex items-center justify-between py-3">
            <h1 className=" text-2xl font-semibold">Inventory</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">
                  Items
                </CardTitle>
                <ShoppingBag />
              </CardHeader>
              <CardContent className="grid gap-1">
                <p className="text-xs text-muted-foreground">
                  Add new item
                </p>

                {/* <Dialog>
                  <DialogTrigger asChild>
                    <Button className=" w-1/2" size="sm">New</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add new item</DialogTitle>
                      <DialogDescription>
                        Add your items to here. Click save when you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Price
                        </Label>
                        <Input id="username" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Available
                        </Label>
                        <Input id="username" className="col-span-3" />
                      </div>

                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog> */}
                <a href="/dashboard/shop/inventory/upload">
                  <Button className="w-1/2" size="sm">
                    New
                  </Button>
                </a>

                {/* <Button onPress={onOpen}>New</Button>
                <Modal
                  backdrop="opaque"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                  }}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                          </p>
                          <p>
                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>
                            Close
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            Action
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>*/}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">
                  Products
                </CardTitle>
                <Package />
              </CardHeader>
              <CardContent className="grid gap-1">
                <p className="text-xs text-muted-foreground">
                  Add new product
                </p>
                <Button className="w-1/2" size="sm">New</Button>
              </CardContent >
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">
                  Category
                </CardTitle>
                <Group />
              </CardHeader>
              <CardContent className="grid gap-1">
                <p className="text-xs text-muted-foreground">
                  Add new category
                </p>
                <Button className="w-1/2" size="sm">New</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">
                  Suppiler
                </CardTitle>
                <Truck />
              </CardHeader>
              <CardContent className="grid gap-1">
                <p className="text-xs text-muted-foreground">
                  Add new supplier
                </p>
                <Button className="w-1/2" size="sm">New</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className=" container py-5">
          <div className=" text-sm font-semibold text-gray-500 flex space-x-3">
            <Badge variant={"secondary"}>All</Badge>
            <Badge variant={"default"}>Active</Badge>
            <Badge variant={"outline"}>Draft</Badge>
            <Badge variant={"destructive"}>Archived</Badge>
          </div>
          <InventoryTableComponent />
        </div>
      </div>
    </ScrollArea >
  )
}