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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useCategories, useSuppliers } from "@/state/products";
import { ProductService } from "@/services/products";
import { useToast } from "@/hooks/use-toast";

interface ProductForm {
  category_id: number,
  description: string,
  name: string,
  price: string,
  supplier_id: number,
  status: string,
  specs: {
    display: string,
    screen: string,
    RAM: number[],
    SSD: number[],
  } | null
}

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [ssdcount, setSsdCount] = useState<number[]>([]);
  const AddSsdItem = () => {
    setSsdCount([...ssdcount, formik.values.specs?.SSD[ssdcount.length] ?? 0]);
  }

  const [ramcount, setRamCount] = useState<number[]>([]);
  const AddRamItem = () => {
    setRamCount([...ramcount, formik.values.specs?.RAM[ramcount.length] ?? 0]);
  }

  const deleteSsdItem = (index: number) => {
    const update = [...(formik.values.specs?.SSD || [])]
    update.splice(index, 1)
    console.log(update)
    setSsdCount(update)
    formik.setFieldValue("SSD", [...update])
  }

  const deleteRamItem = (index: number) => {
    const update = [...(formik.values.specs?.RAM || [])]
    update.splice(index, 1)
    console.log(update)
    setRamCount(update)
    formik.setFieldValue("RAM", [...update])
  }

  const { supplier, fetchSupplier } = useSuppliers()
  useEffect(() => {
    fetchSupplier()
  }, [])

  const { category, fetchCategory } = useCategories()
  useEffect(() => {
    fetchCategory()
  }, [])

  const { toast } = useToast()
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadedThumbnail, setUploadedThumbnail] = useState<File[]>([]);

  const formik = useFormik<ProductForm>({
    initialValues: {
      name: '',
      description: '',
      price: "",
      category_id: 0,
      supplier_id: 0,
      status: "",
      specs: {
        display: "",
        screen: "",
        RAM: [],
        SSD: [],
      }
    },
    onSubmit: values => {
      const postNewProduct = async () => {
        setLoading(!loading)
        try {
          const newProductRes = await ProductService.NewProduct(values)
          await ProductService.NewProductThumbnail(uploadedThumbnail, newProductRes.data.id)
          await ProductService.NewProductImage(uploadedFiles, newProductRes.data.id)
          toast({
            title: "Upload products successfully",
            description: newProductRes.data.msg,
          })
        }
        catch (e) {
          console.log(e)
          toast({
            title: "Update products failed",
            description: "Failure",
          })
        }
        setLoading(false)
      }
      postNewProduct()
    },
  });

  return (
    <ScrollArea className="h-full">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40 p-5">
          <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[1000px] w-full flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Upload New Product
                </h1>
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
                  <Button size="sm" type="submit" disabled={loading}>
                    Save Product {loading && <LoaderCircle className="h-4 w-4 animate-spin" />}
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 col-span-2 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Details</CardTitle>
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
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            defaultValue={formik.values.description}
                            className=" min-h-[6rem]"
                            onChange={(e) => {
                              formik.setFieldValue("description", e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-3">
                    <CardHeader>
                      <CardTitle>Properties</CardTitle>
                      <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="status">Status</Label>
                          <Select
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
                          <Label htmlFor="supplier">Suppliers</Label>
                          <Select
                            onValueChange={(value) => {
                              formik.setFieldValue("supplier_id", parseInt(value))
                            }}
                          >
                            <SelectTrigger id="status" aria-label="Select status">
                              <SelectValue placeholder="Select suppliers" />
                            </SelectTrigger>
                            <SelectContent>
                              {supplier.map((value, index) => (
                                <SelectItem value={value.id.toString()} key={index}>{value.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Label htmlFor="category">Category</Label>
                          <Select
                            onValueChange={(value) => {
                              formik.setFieldValue("category_id", parseInt(value))
                            }}
                          >
                            <SelectTrigger id="status" aria-label="Select status">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {category.map((value, index) => (
                                <SelectItem value={value.id.toString()} key={index}>{value.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-2">
                    <CardHeader>
                      <CardTitle>Specification</CardTitle>
                      <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
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
                              Screen
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="stock-1" className="sr-only">
                                Screen
                              </Label>
                              <Input
                                id="stock-1"
                                type="text"
                                defaultValue={formik.values.specs?.screen ?? ""}
                                onChange={(e) => {
                                  formik.setFieldValue("screen", e.target.value);
                                }}
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">
                              Display
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="stock-2" className="sr-only">
                                Display
                              </Label>
                              <Input
                                id="stock-2"
                                type="text"
                                defaultValue={formik.values.specs?.display ?? ""}
                                onChange={(e) => {
                                  formik.setFieldValue("display", e.target.value);
                                }}
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">
                              SSD
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="stock-3" className="sr-only">
                                SSD
                              </Label>
                              {ssdcount.map((value, index) => {
                                return (
                                  formik.values.specs !== null ?
                                    <div className=" flex gap-3 my-1" key={index}>
                                      <Input
                                        type="number"
                                        defaultValue={value}
                                        onChange={(e) => {
                                          if (!formik.values.specs) return
                                          if (formik.values.specs.SSD.length < index || formik.values.specs.SSD.length === 0) {
                                            formik.values.specs.SSD.length !== 0 ?
                                              formik.setFieldValue("SSD", [...formik.values.specs.SSD].push(parseInt(e.target.value))) :
                                              formik.setFieldValue("SSD", [parseInt(e.target.value)])
                                            return
                                          }
                                          const update = [...formik.values.specs.SSD]
                                          update.splice(index, 1, parseInt(e.target.value));
                                          formik.setFieldValue("SSD", [...update])
                                        }}
                                      />
                                      <ToggleGroup type="single">
                                        <ToggleGroupItem value="GB">GB</ToggleGroupItem>
                                        <ToggleGroupItem value="TB">TB</ToggleGroupItem>
                                      </ToggleGroup>
                                      <Button
                                        type="button"
                                        size="icon"
                                        variant="ghost"
                                        disabled={index === formik.values.specs.SSD.length - 1 ? false : true}
                                        onClick={() => deleteSsdItem(index)}
                                      >
                                        <Trash2 className=" w-4" />
                                      </Button>
                                    </div> : <></>
                                )
                              })}
                              <Button
                                variant="ghost"
                                className=" text-xs h-6 mt-1"
                                type="button"
                                onClick={AddSsdItem}
                              >
                                <Plus className=" w-4" /> Add more
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">
                              RAM
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="stock-3" className="sr-only">
                                RAM
                              </Label>
                              {ramcount.map((value, index) => {
                                return (
                                  formik.values.specs !== null ?
                                    <div className=" flex gap-3 my-1" key={index}>
                                      <Input
                                        type="number"
                                        defaultValue={value}
                                        onChange={(e) => {
                                          if (!formik.values.specs) return
                                          if (formik.values.specs.RAM.length < index || formik.values.specs.RAM.length === 0) {
                                            formik.values.specs.RAM.length !== 0 ?
                                              formik.setFieldValue("RAM", [...formik.values.specs.RAM].push(parseInt(e.target.value))) :
                                              formik.setFieldValue("RAM", [parseInt(e.target.value)])
                                            return
                                          }
                                          const update = [...formik.values.specs.RAM]
                                          update.splice(index, 1, parseInt(e.target.value));
                                          formik.setFieldValue("RAM", [...update])
                                        }}
                                      />
                                      <ToggleGroup type="single">
                                        <ToggleGroupItem value="GB">GB</ToggleGroupItem>
                                        <ToggleGroupItem value="IB">TB</ToggleGroupItem>
                                      </ToggleGroup>
                                      <Button
                                        type="button"
                                        size="icon"
                                        variant="ghost"
                                        disabled={index === formik.values.specs.RAM.length - 1 ? false : true}
                                        onClick={() => deleteRamItem(index)}
                                      >
                                        <Trash2 className=" w-4" />
                                      </Button>
                                    </div> : <></>
                                )
                              })}
                              <Button
                                variant="ghost"
                                className=" text-xs h-6 mt-1"
                                type="button"
                                onClick={AddRamItem}
                              >
                                <Plus className=" w-4" /> Add more
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 col-span-2 lg:gap-8">
                  <Card>
                    <CardHeader x-chunk="dashboard-07-chunk-1">
                      <CardTitle>Thumbnail</CardTitle>
                      <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <ImageUploader
                          uploadedFiles={uploadedThumbnail}
                          setUploadedFiles={setUploadedThumbnail}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader x-chunk="dashboard-07-chunk-1">
                      <CardTitle>Images</CardTitle>
                      <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
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
                <Button size="sm" type="submit">Save Product</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ScrollArea >
  )
}
