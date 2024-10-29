
"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PurchaseService } from "@/service/purchase";
import Coupon from "@/types/coupons";
import { useEffect, useState } from "react";

interface ICoupons { code: string, discount: number }

interface ICouponsProps {
  coupon: ICoupons;
  setCoupon: (coupon: ICoupons) => void;
}

export default function Coupons({ coupon, setCoupon }: ICouponsProps) {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const f = async () => {
    try {
      const resp = await PurchaseService.getCoupon();
      setCoupons(resp.data);
    }
    catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    f();
  }, []);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Coupons</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Coupons</DialogTitle>
          <DialogDescription>
            Use available coupons.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {coupons.map((value, index) => (
            <div key={index} className=" flex gap-x-3 items-center justify-between">
              <div className="">
                <p className=" font-semibold">{value.discount}% OFF</p>
                <p className=" text-xs">Expired at: {value.expired_at}</p>
              </div>
              <Button
                type="button"
                size="sm"
                variant={coupon.code === value.code ? "default" : "ghost"}
                onClick={() => {
                  if (coupon.code === value.code) {
                    setCoupon({ code: "", discount: 0 });
                    return;
                  }
                  setCoupon({ ...value });
                }}
              >
                {value.code}
              </Button>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}