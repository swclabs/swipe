'use client';
import Welcome from "@/components/layout/welcome-section";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { FormField, FormItem } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import iphone from "@/faker/iphone";
import { cn } from "@/lib/utils";
import { ProductService } from "@/service/products";
import { ProductItem } from "@/types/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from 'next/router';

const formSchema = z.object({
  product_id: z.number(),
})

type CompareProduct = z.infer<typeof formSchema>


export default function Page() {
  const formFirstProduct = useForm<CompareProduct>({
    resolver: zodResolver(formSchema)
  })
  const formSecondProduct = useForm<CompareProduct>({
    resolver: zodResolver(formSchema)
  })
  const [searchFirstProduct, setSearchFirstProduct] = useState<ProductItem[]>([]);
  const [searchSecondProduct, setSearchSecondProduct] = useState<ProductItem[]>([]);
  const [firstProduct, setFirstProduct] = useState<ProductItem | null>(null);
  const [secondProduct, setSecondProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const f = async () => {
      try {
        const resp = await ProductService.getListProduct()
        setSearchFirstProduct(resp.data.body)
        setSearchSecondProduct(resp.data.body)
      }
      catch (e) {
        console.log(e)
      }
    }
    f()
  }, [])

  async function onSubmit(data: CompareProduct) { }

  console.log(searchFirstProduct)
  return (
    <div className=" min-h-screen">
      <Welcome title='So sánh' subtitle='So sánh các sản phẩm mà bạn thích' />
      <div className=" flex justify-center py-5">
        <div className="flex w-[80%] space-x-3">
          <div className=" container flex flex-col">
            <div className=" font-medium text-xl">So sánh sản phẩm</div>
            <div className=" mt-auto container flex flex-col space-y-3">
              <div className=" font-medium text-sm bg-gray-100">Màn hình</div>
              <div className=" font-medium text-sm bg-gray-100">Kích thước màn hình</div>
              <div className=" font-medium text-sm flex space-x-2 bg-gray-100">
                RAM
              </div>
              <div className=" font-medium text-sm flex space-x-2 bg-gray-100">
                SSD
              </div>
            </div>
          </div>
          <div className=" container flex flex-col space-y-3">
            <Form {...formFirstProduct}>
              <FormField
                control={formFirstProduct.control}
                name="product_id"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          role="combobox"
                          className={cn(
                            "justify-between w-full font-medium text-xl",
                          )}
                        >
                          {field.value
                            ? searchFirstProduct.find(
                              (item) => item.id === field.value
                            )?.name
                            : "Chọn sản phẩm"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[400px] p-0">
                        <Command>
                          <CommandInput placeholder="Search Province..." />
                          <CommandList>
                            <CommandEmpty>Không tìm thấy sản phẩm</CommandEmpty>
                            <CommandGroup>
                              {searchFirstProduct.map((val, idx) =>
                                <CommandItem
                                  value={val.name}
                                  key={idx}
                                  onSelect={() => {
                                    formFirstProduct.setValue("product_id", val.id)
                                    setFirstProduct(val)
                                  }}
                                >
                                  {val.name}
                                </CommandItem>)
                              }
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </Form>
            {firstProduct &&
              <>
                <div className=" container h-[150px] justify-center flex">
                  <Image src={firstProduct.image} alt={firstProduct.name} width={100} height={100} />
                </div>
                <div className=" font-medium text-sm">{firstProduct.price}</div>
                <div className=" font-medium text-sm bg-gray-100">{firstProduct.specs.display}</div>
                <div className=" font-medium text-sm bg-gray-100">{firstProduct.specs.screen}</div>
                <div className=" font-medium text-sm flex space-x-2 bg-gray-100">
                  {firstProduct.specs.RAM.map((val, idx) => <span key={idx}>{val}GB</span>)}
                </div>
                <div className=" font-medium text-sm flex space-x-2 bg-gray-100">
                  {firstProduct.specs.SSD.map((val, idx) => <span key={idx}>{val}GB</span>)}
                </div>
              </>
            }
          </div>
          <div className=" container flex flex-col space-y-3">
            <Form {...formSecondProduct}>
              <FormField
                control={formSecondProduct.control}
                name="product_id"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          role="combobox"
                          className={cn(
                            "justify-between w-full font-medium text-xl",
                          )}
                        >
                          {field.value
                            ? searchSecondProduct.find(
                              (item) => item.id === field.value
                            )?.name
                            : "Chọn sản phẩm"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[400px] p-0">
                        <Command>
                          <CommandInput placeholder="Search Province..." />
                          <CommandList>
                            <CommandEmpty>Không tìm thấy sản phẩm</CommandEmpty>
                            <CommandGroup>
                              {searchSecondProduct.map((val, idx) =>
                                <CommandItem
                                  value={val.name}
                                  key={idx}
                                  onSelect={() => {
                                    formSecondProduct.setValue("product_id", val.id)
                                    setSecondProduct(val)
                                  }}
                                >
                                  {val.name}
                                </CommandItem>)
                              }
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </Form>
            {secondProduct &&
              <>
                <div className=" container h-[150px] flex justify-center">
                  <Image src={secondProduct.image} alt={secondProduct.name} width={100} height={100} />
                </div>
                <div className=" font-medium text-sm">{secondProduct.price}</div>
                <div className=" font-medium text-sm bg-gray-100">{secondProduct.specs.display}</div>
                <div className=" font-medium text-sm bg-gray-100">{secondProduct.specs.screen}</div>
                <div className=" font-medium text-sm flex space-x-2 bg-gray-100">
                  {secondProduct.specs.RAM.map((val, idx) => <span key={idx}>{val}GB</span>)}
                </div>
                <div className=" font-medium text-sm flex space-x-2 bg-gray-100">
                  {secondProduct.specs.SSD.map((val, idx) => <span key={idx}>{val}GB</span>)}
                </div>
              </>
            }
          </div>
        </div>
      </div>
      <div className=" flex justify-center py-5">
        <div className="flex w-[80%] space-x-3">
          <div className=" container flex flex-col">

          </div>
          <div className=" container flex flex-col space-y-3">
            {firstProduct && <Link href={`/shop/phone/${firstProduct.id}`}><Button>Đi tới sản phẩm</Button></Link>}
          </div>
          <div className=" container flex flex-col space-y-3">
            {secondProduct && <Link href={`/shop/phone/${secondProduct.id}`}><Button>Đi tới sản phẩm</Button></Link>}
          </div>
        </div>
      </div>
    </div>
  )
}