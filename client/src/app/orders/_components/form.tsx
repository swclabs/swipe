'use client';
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Address } from "@/service/address";
import { Orders } from "@/service/orders";
import { useAddress } from "@/state/address";
import { useCart } from "@/state/purchase";
import { Province } from "@/types/address";
import { formatNumber } from "@/utils/fmt";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "first name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "last name must be at least 2 characters.",
  }),
  street: z.string().min(2, {
    message: "street must be at least 2 characters.",
  }),
  ward: z.string().min(2, {
    message: "street must be at least 2 characters.",
  }),
  district: z.string().min(2, {
    message: "street must be at least 2 characters.",
  }),
  province: z.string().min(2, {
    message: "street must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string(),
})

type OrderFormSchema = z.infer<typeof formSchema>

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const

export default function OrderForm() {
  const { toast } = useToast()
  const form = useForm<OrderFormSchema>({
    resolver: zodResolver(formSchema)
  })
  async function onSubmit(values: OrderFormSchema) {
    try {
      if (carts && carts.products.length > 0) {
        await Orders.createOrders({
          address: {
            street: values.street,
            ward: values.ward,
            district: values.district,
            city: values.province,
          },
          customer: {
            email: values.email,
            first_name: values.firstname,
            last_name: values.lastname,
            phone: values.phone,
          },
          delivery: {
            status: "pending",
            method: "COD",
            note: "",
            sent_date: "",
          },
          product: carts.products.map((product) => ({
            code: `${product.category}#${product.inventory_id}`,
            quantity: product.quantity,
          }))
        })
        window.location.href = "/orders"
        return
      }
      throw new Error("No product in cart")
    }
    catch (error) {
      toast({
        variant: "destructive",
        title: "Order failed",
        description: "Please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  const { carts } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const { total, quantity } = carts?.products?.reduce(
      (acc, product) => {
        acc.quantity += product.quantity;
        acc.total += parseFloat(product.price) * product.quantity;
        return acc;
      },
      { total: 0, quantity: 0 }
    ) || { total: 0, quantity: 0 };

    setQuantity(quantity);
    setTotalPrice(total);
  }, [carts]);

  const {
    province,
    district,
    setDistrict,
    setProvince,
    provinces,
    fetchProvinces,
    districts,
    fetchDistricts,
    wards,
    fetchWards,
  } = useAddress()

  useEffect(() => {
    fetchProvinces()
  }, [])

  useEffect(() => {
    if (province !== -1) {
      fetchDistricts(province)
    }
  }, [province])

  useEffect(() => {
    if (district !== -1) {
      fetchWards(district)
    }
  }, [district])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
        <div className="lg:flex w-full">
          <div className=" lg:w-3/5 py-5 flex-col flex">
            <h2 className=" py-5 font-semibold text-lg">Enter your name and address</h2>
            <div className="space-y-5">

              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="First name*" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Last name*" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? provinces.find(
                                (province) => province.ProvinceName === field.value
                              )?.ProvinceName
                              : "Select Province"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[400px] p-0">
                        <Command>
                          <CommandInput placeholder="Search Province..." />
                          <CommandList>
                            <CommandEmpty>No province found.</CommandEmpty>
                            <CommandGroup>
                              {provinces.map((province) => (
                                <CommandItem
                                  value={province.ProvinceName}
                                  key={province.ProvinceID}
                                  onSelect={() => {
                                    setProvince(province.ProvinceID)
                                    form.setValue("province", province.ProvinceName)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      province.ProvinceName === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {province.ProvinceName}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? districts.find(
                                (district) => district.DistrictName === field.value
                              )?.DistrictName
                              : "Select district"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[400px] p-0">
                        <Command>
                          <CommandInput placeholder="Search district..." />
                          <CommandList>
                            <CommandEmpty>No district found.</CommandEmpty>
                            <CommandGroup>
                              {districts.map((district) => (
                                <CommandItem
                                  value={district.DistrictName}
                                  key={district.DistrictID}
                                  onSelect={() => {
                                    setDistrict(district.DistrictID)
                                    form.setValue("district", district.DistrictName)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      district.DistrictName === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {district.DistrictName}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ward"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? wards.find(
                                (ward) => ward.WardName === field.value
                              )?.WardName
                              : "Select ward"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[400px] p-0">
                        <Command>
                          <CommandInput placeholder="Search ward..." />
                          <CommandList>
                            <CommandEmpty>No ward found.</CommandEmpty>
                            <CommandGroup>
                              {wards.map((ward) => (
                                <CommandItem
                                  value={ward.WardName}
                                  key={ward.WardCode}
                                  onSelect={() => {
                                    form.setValue("ward", ward.WardName)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      ward.WardName === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {ward.WardName}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Street*" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <h2 className=" font-semibold text-lg">What is your contact information?</h2>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email*" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone*" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          <div className=" text-sm flex flex-col gap-y-2 py-5 lg:w-2/5">
            <h2 className=" font-semibold text-lg py-5">Summary</h2>
            <div className="w-full flex justify-between font-medium">
              <p className="">Subtotal</p>
              <p className="">{formatNumber(totalPrice)}đ</p>
            </div>
            <div className="w-full flex justify-between font-medium">
              <p className="">Quantity</p>
              <p className="">{quantity}</p>
            </div>
            <div className="w-full flex justify-between font-medium">
              <p className="">Estimate Delivery</p>
              <p className="">0đ</p>
            </div>
            <div className="w-full flex justify-between font-medium">
              <p className="">Discount</p>
              <p className="">0đ</p>
            </div>
            <div className=" text-sm flex flex-col gap-y-2 border-y-1 py-5">
              <div className="w-full flex justify-between font-medium">
                <p className="">Total</p>
                <p className="">{formatNumber(totalPrice)}đ</p>
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </Form>
  )
}