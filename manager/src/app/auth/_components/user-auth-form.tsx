"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  pwd: z.string().min(2),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema)
  });
  const onSubmit = async (data: UserFormValue) => {
    const resp = await signIn("credentials", {
      email: data.email,
      password: data.pwd,
      redirect: false,
      callbackUrl: callbackUrl ?? "/dashboard",
    });
    setLoading(true);
    if (!resp || resp.error) {
      // console.log(resp);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setLoading(false);
      return
    }
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1000);
  };
  const onClickGoogle = async () => {
    await signIn("google", { redirect: true, callbackUrl: callbackUrl ?? "/" });
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
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

          <Button
            disabled={loading}
            className="ml-auto w-full gap-1"
            type="submit"
            size="sm"
          >
            Login
            {loading && <LoaderCircle className="h-4 w-4 animate-spin" />}
          </Button>
        </form>
      </Form>
    </>
  );
}
