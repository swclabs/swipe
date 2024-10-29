import { Badge } from "../ui/badge";


export default function ShortCut() {
  return (
    <div className=" flex text-xl font-medium items-center gap-x-3">
      <div className=" sm:w-1/12 shrink-0 snap-center">
        <div className="shrink-0"></div>
      </div>
      Liên kết nhanh
      <div className=" flex gap-3 py-3">
        <Badge variant="secondary">Trạng thái đơn hàng</Badge>
        <Badge variant="secondary">Trợ giúp mua hàng</Badge>
        <Badge variant="secondary">Trả hàng</Badge>
        <Badge variant="secondary">Mục đã lưu</Badge>
      </div>
    </div>
  )
}