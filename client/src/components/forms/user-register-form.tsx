"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Manager } from "@/service/manager";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "../hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  pwd: z.string().min(6),
  confirm_pwd: z.string().min(6),
  first_name: z.string().min(2),
  last_name: z.string().min(2),
  phone: z.string().regex(phoneRegex, 'Invalid Number!')
});

type UserRegisterFormValue = z.infer<typeof formSchema>;

const formCheckEmailSchema = z.object({
  email: z.string().email({
    message: "Your email address is invalid",
  }),
})
type UserCheckEmailValue = z.infer<typeof formCheckEmailSchema>;

export default function UserRegisterForm() {
  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useForm<UserRegisterFormValue>({
    resolver: zodResolver(formSchema),
  });
  const formEmail = useForm<UserCheckEmailValue>({
    resolver: zodResolver(formCheckEmailSchema),
  });

  const onSubmit = async (data: UserRegisterFormValue) => {
    setLoading(true);
    // console.log(data);
  };

  const emailSubmit = async (data: UserCheckEmailValue) => {
    // const resp = await Manager.auth(data.email);
    // if (resp.status === 200) {
    //   setValidEmail(true);
    //   setEmail(data.email);
    // }
    // else {
    //   toast({
    //     variant: "destructive",
    //     title: "Email is already registered",
    //     description: "Please try again with a different email.",
    //     action: <ToastAction altText="Try again">Try again</ToastAction>,
    //   })
    // }
    toast({
      variant: "destructive",
      title: "Email is already registered",
      description: "Please try again with a different email.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
  }

  return (
    <>
      <div className={cn(!validEmail ? "" : "hidden", "space-y-2 w-full")}>
        <Form {...formEmail}>
          <form onSubmit={formEmail.handleSubmit(emailSubmit)} className="space-y-2 w-full">
            <FormField
              control={formEmail.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className=" w-full" size="sm" type="submit">Continue</Button>
          </form>
        </Form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or
            </span>
          </div>
        </div>
        <Button size="sm" className="ml-auto w-full gap-2" variant="secondary" >
          <div className=" w-5">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GoogleColorLogoIcon" xmlns="http://www.w3.org/2000/svg"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path><path fill="none" d="M1 1h22v22H1z"></path></svg>
          </div>
          Continue with Google
        </Button>
      </div>

      <div className={cn(!validEmail ? "hidden" : "")}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-1 w-full"
          >
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  disabled
                  defaultValue={email}
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormField
              control={form.control}
              name="pwd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password..."
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirm_pwd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password..."
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your password..."
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your password..."
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your password..."
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={loading} className="ml-auto w-full" type="submit" size="sm">
              Register
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}