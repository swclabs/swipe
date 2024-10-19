import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import accessoryData from "@/faker/accessory-news";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Accessory() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset
    }
  };
  return (
    <div className="w-full pb-[10px]">
      <div
        className=" relative flex 2xl:justify-between overflow-auto scroll-smooth"
        style={{ scrollbarWidth: "none" }}
        ref={ref}
      >
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className="flex snap-center">
          <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-black font-semibold text-2xl pt-2 pb-2">Đón máy mới về</h4>
              <h4 className="text-black font-normal text-sm">Khám phá màu sắc mới cho phụ kiện yêu thích của bạn</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/img/store/phukien1.jpg"
            />
          </Card>
        </div>
        {accessoryData.map((value, index) => (
          <div className=" flex snap-center" key={index}>
            <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
              <CardBody className="p-5">
                <div className=" flex-col h-full relative">
                  <Image
                    alt="img"
                    src={value.img}
                    className="z-0 w-full h-full object-cover"
                  />
                  <div className=" container">
                    <div className=" text-xs text-red-600 pb-1">{value.new}</div>
                    <div className=" font-medium">{value.name}</div>
                    <div className=" font-normal text-sm absolute bottom-0">{value.price}</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
      <div className=" flex justify-end">
        <Button radius="full" isIconOnly className=" mr-3" onClick={() => scroll(-400)}>
          <FaAngleLeft />
        </Button>
        <Button radius="full" isIconOnly className=" mr-10" onClick={() => scroll(400)}>
          <FaAngleRight />
        </Button>
      </div>
    </div>
  )
}