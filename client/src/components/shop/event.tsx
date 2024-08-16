import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useRef } from "react";


export default function Event() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full pb-[10px] flex justify-center items-center">
      <div className="w-4/5">
        <div className="flex snap-center pb-8 gap-x-4">
          <Card className="flex justify-center items-center relative h-[480px] sm:w-[500px] w-[300px] pb-4">
            <CardHeader className="flex px-8 absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny w-[30%] pb-2">
                KHOẢN THANH TOÁN HÀNG THÁNG THẤP
              </p>
              <h4 className="text-2xl font-semibold w-[80%]">
                Trả Góp Hàng Tháng với MoMo.
              </h4>
              <p className="text-base pt-2 w-[80%]">
                Trả dần, thời hạn đến 24 tháng và chỉ trả trước 20%*
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/img/shop/watch-card-50-acmi-202403.jpg"
            />
          </Card>
          <Card className="flex justify-center items-center relative h-[480px] sm:w-[500px] w-[300px] pb-4">
            <CardHeader className="flex px-8 absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny w-[30%] pb-2">
                APPLE TRADE IN
              </p>
              <h4 className="text-2xl font-semibold w-[90%]">
                Đổi thiết bị cũ của bạn, nhận điểm tín dụng để mua thiết bị mới.
              </h4>

            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/img/shop/watch-card-50-tradein-202109.jpg"
            />
          </Card>
        </div>
      </div>
    </div>
  )
}