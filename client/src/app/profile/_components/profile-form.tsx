"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label";
import Image from "next/image";
import {useEffect, useState} from "react";
import {User} from "@/types/users";
import UserService from "@/service/users";
import {LoaderCircle} from "lucide-react";
import {useToast} from "@/hooks/use-toast";
import {ToastAction} from "@/components/ui/toast";

const formSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
})

export function ProfileForm() {
  const [user, setUser] = useState<User | null>(null);
  const {toast} = useToast();
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await UserService.getUser()
        setUser(resp.data)
      } catch (e) {
        console.log(e)
      }
    }
    f()
  }, [])

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    values.email = user?.email
    console.log(values)
    try {
      const resp = await UserService.updateUser({
        email: user?.email ?? "",
        first_name: values.firstname ?? "",
        last_name: values.lastname ?? "",
        phone_number: values.phone ?? ""
      })
      setUser({
        first_name: values.firstname ?? (user?.first_name ?? ""),
        last_name: values.lastname ?? (user?.last_name ?? ""),
        phone_number: values.phone ?? (user?.phone_number ?? ""),
        email: values.email ?? (user?.email ?? ""),
        id: user?.id ?? "",
        image: user?.image ?? "",
        username: user?.username ?? "",
      })
      toast({
        variant: "default",
        title: "Success",
        description: "User information update successfully",
      })
    }
    catch (e){
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  if(!user) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <LoaderCircle className="animate-spin" />
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-5">
        <div className="flex">
          <div className="space-y-2 flex-1">
            <FormField
              control={form.control}
              name="firstname"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input placeholder="firstname" {...field} defaultValue={user?.first_name}/>
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input placeholder="lastname" {...field} defaultValue={user?.last_name} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} type="email" defaultValue={user?.email} disabled/>
                  </FormControl>
                  <FormDescription>
                    This is your email.
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Mobile phone</FormLabel>
                  <FormControl>
                    <Input placeholder="phone" {...field} type="number" defaultValue={user?.phone_number}/>
                  </FormControl>
                  <FormDescription>
                    This is your mobile phone.
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className=" flex-1 flex justify-center">
            <div className=" max-w-[300px] flex space-y-5 flex-col">
              <Label htmlFor="picture">Profile Picture</Label>
              <div className="flex">
                <Image
                  className="rounded-full"
                  alt="avt"
                  width={150}
                  height={150}
                  src="/avt.png"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Upload</Label>
                <Input id="picture" type="file"/>
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" className="my-3">Submit</Button>
      </form>
    </Form>
  )
}
