import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import UserRegisterForm from "@/components/forms/user-register-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function Page() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 hidden top-4 md:right-8 md:top-8",
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-black dark:border-r lg:flex">
        <div className="absolute inset-0 bg-gray-50" />
        <div className=" flex flex-col gap-2 my-auto">
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image src="/logo.png" height="50" width="150" alt="" />
          </div>
          <div className="relative z-20">
            <h1 className="text-4xl font-semibold tracking-tight">
              Welcome to our platform
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Create an account to get started
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
          </div>
          <UserRegisterForm />
        </div>
      </div>
    </div>
  );
}
