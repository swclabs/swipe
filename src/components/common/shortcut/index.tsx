import { Button } from "@nextui-org/react";


export default function ShortCut() {
    return (
        <div className="flex w-full justify-center bg-gray-50 pt-5 pb-5">
            <div className="w-4/5">
                <h1 className=" text-2xl font-semibold">
                    <span>Liên kết nhanh</span>
                    <div className=" flex mt-5 mb-2">
                        <Button radius="full" className=" bg-gray-200 text-sm ml-2">
                            Trạng thái đơn hàng
                        </Button>
                        <Button radius="full" className=" bg-gray-200 text-sm ml-2">
                            Trợ giúp mua hàng
                        </Button>
                        <Button radius="full" className=" bg-gray-200 text-sm ml-2">
                            Trả hàng
                        </Button>
                        <Button radius="full" className=" bg-gray-200 text-sm ml-2">
                            Mục đã lưu
                        </Button>
                    </div>
                </h1>
            </div>
        </div>
    )
}