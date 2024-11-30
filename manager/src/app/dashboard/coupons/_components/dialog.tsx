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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import { InventoryService } from "@/services/inventory"
import { DeleteConfirmDialog } from "./responsive-dialog"
import React from "react"
import { useFormik } from "formik"
import { Pencil, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductResp } from "@/types/products"
import { ProductService } from "@/services/products";
import { Textarea } from "@/components/ui/textarea";
import { CouponsReq, CouponsResp } from "@/types/coupons";
import { CouponsService } from "@/services/coupons";



export function CreateCouponsDialog() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [idDelete, setIdDelete] = useState("");

  const deletefunc = (id: string) => {

  }
  const onStatusChange = (status: string) => {
    formik.setFieldValue("status", status)
  }
  const { toast } = useToast()
  const formik = useFormik<CouponsReq>({
    initialValues: {
      description: "",
      discount: 0,
      max_day: 0,
      max_use: 0,
      status: "disabled"
    },
    onSubmit: async (values) => {
      try {
        await CouponsService.createCoupons(values);
        console.log(values);
        toast({
          title: "Coupons created",
          description: "The coupons has been created successfully",
        })
      }
      catch (e) {
        console.log(e);
        toast({
          title: "Error",
          variant: "destructive",
          description: "An error occurred while creating the coupons",
        });
      }

      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  });

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className=" flex items-center">
            <Button size="icon" variant="outline"><Plus className=" text-blue-500" /></Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[50%] min-h-[50vh] max-h-max">
          <DialogHeader>
            <DialogTitle>Create Coupons</DialogTitle>
            <DialogDescription>
              Product Specification
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex px-10 justify-between">
              <div className=" container w-full">
                <div className="grid p-5 gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="discount">Discount</Label>
                    <Input
                      id="discount"
                      type="number"
                      className="col-span-2 h-8"
                      onChange={formik.handleChange}
                      value={formik.values.discount}
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
                    <Label htmlFor="max_day">Max day</Label>
                    <Input
                      id="max_day"
                      type="number"
                      className="col-span-2 h-8"
                      onChange={formik.handleChange}
                      value={formik.values.max_day}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="max_use">Max use</Label>
                    <Input
                      id="max_use"
                      type="number"
                      className="col-span-2 h-8"
                      onChange={formik.handleChange}
                      value={formik.values.max_use}
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
            </DialogFooter>
          </form>

        </DialogContent>
      </Dialog >
    </>
  )
}
