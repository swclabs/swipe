import { Badge } from "@/components/ui/badge";
import { Button } from "@nextui-org/react";


export default function ShortCut() {
  return (
    <div className="flex w-full justify-center py-5">
      <div className="w-4/5">
        <h1 className=" text-2xl font-semibold">
          <span>Liên kết nhanh</span>
          <div className=" flex gap-3 py-3">
            <Badge variant="secondary">Trạng thái đơn hàng</Badge>
            <Badge variant="secondary">Trợ giúp mua hàng</Badge>
            <Badge variant="secondary">Trả hàng</Badge>
            <Badge variant="secondary">Mục đã lưu</Badge>
          </div>
        </h1>
      </div>
    </div>
  )
}