'use client';

import {
  ChevronLeft,
  LoaderCircle,
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
import { useToast } from "@/hooks/use-toast";
import { ProductService } from "@/services/products";
import { InventoryService } from "@/services/inventory";
import { ProductResp } from "@/types/products";

export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<ProductResp>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const f = async () => {
      try {
        const res = await ProductService.GetProductInfo(parseInt(params.id));
        setProduct(res.data);
      }
      catch (e) {
        console.error(e);
      }
    }
    f()
  }, []);

  const { toast } = useToast()
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadColor, setUploadColor] = useState<File[]>([]);
  const formik = useFormik({
    initialValues: {
      product_name: '',
      price: '',
      available: '',
      status: 'active',
      product_id: parseInt(params.id),
      currency_code: 'VND',
      image: [],
      color_img: '',
      color: '',
      // specs: {
      //   ram: '',
      //   ssd: '',
      //   connection: '',
      //   desc: '',
      // }
      ram: '',
      ssd: '',
      connection: '',
      desc: '',
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const newInventoryRes = await InventoryService.NewInventory({ ...values, specs: { ram: values.ram, ssd: values.ssd, desc: values.desc, connection: values.connection } });
        await InventoryService.NewInventoryImage(uploadedFiles, newInventoryRes.data.id);
        await InventoryService.InventoryColorImage(uploadColor, newInventoryRes.data.id);
        toast({
          title: "Update products information",
          description: newInventoryRes.data.msg,
        })
      }
      catch (e) {
        console.error(e);
        toast({
          variant: "destructive",
          title: "Update products information",
          description: "Failure",
        });
      }
      setLoading(false);
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
                        Hủy bỏ
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Xác nhận hủy bỏ</DialogTitle>
                        <DialogDescription>
                          Xóa mọi thông tin trong biểu mẫu
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
                    disabled={loading}
                  >
                    Lưu {loading && <LoaderCircle className="h-4 w-4 animate-spin" />}
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 col-span-2 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Inventory Details</CardTitle>
                      <CardDescription>
                        Chi tiết kho hàng
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="available">Product</Label>
                          <Input
                            id="name"
                            type="text"
                            className="w-full"
                            value={product?.name}
                            disabled
                          />
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
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="disabled">Disabled</SelectItem>
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
                      </div>
                    </CardContent>
                  </Card>
                  {product && ['tablet', 'phone', 'laptop', 'desktop', 'watch'].includes(product.category) &&
                    <Card x-chunk="dashboard-07-chunk-2">
                      <CardHeader>
                        <CardTitle>Specification</CardTitle>
                        <CardDescription>
                          Thông số kỹ thuật
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
                                Connection
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="stock-3" className="sr-only">
                                  Connection
                                </Label>
                                <Input
                                  id="connection"
                                  defaultValue={formik.values.connection}
                                  className="w-full"
                                  onChange={(e) => {
                                    formik.setFieldValue("connection", e.target.value);
                                  }}
                                />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-semibold">
                                Description
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="stock-3" className="sr-only">
                                  Description
                                </Label>
                                <Input
                                  id="description"
                                  defaultValue={formik.values.desc}
                                  className="w-full"
                                  onChange={(e) => {
                                    formik.setFieldValue("desc", e.target.value);
                                  }}
                                />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  }
                </div>
                <div className="grid auto-rows-max items-start gap-4 col-span-2 lg:gap-8">
                  <Card>
                    <CardHeader x-chunk="dashboard-07-chunk-1">
                      <CardTitle>Inventory Images</CardTitle>
                      <CardDescription>
                        Hình ảnh sản phẩm
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
                        Ảnh màu sắc
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <ImageUploader
                          uploadedFiles={uploadColor}
                          setUploadedFiles={setUploadColor}
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