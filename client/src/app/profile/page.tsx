"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import UserLayout from "./layout"
import { User } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Add to calendar
    </Button>
  )
}

export default function UserPage() {
  return (
    <div className=" h-screen">
      <ToastDemo />
    </div>
  );
}