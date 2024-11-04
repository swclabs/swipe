import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star } from "lucide-react";


export default function RatingForm() {
  return (
    <div className="flex gap-x-1 items-center">
      <p className=" text-xs">Bạn đã mua sản phẩm, đánh giá ngay</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon" variant="ghost"><Star /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">

          </div>
          <DialogFooter>
            <Button type="submit">Send</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  )
}