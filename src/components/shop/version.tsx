import { IProductDetail } from "@/types/products";
import { Dispatch, SetStateAction, useState } from "react";

interface IVersionProps {
    product: IProductDetail[];
    version: number;
    setVersion: Dispatch<SetStateAction<number>>;
}

export default function Version({ product, version, setVersion }: IVersionProps) {

    const select = (index: number) => {
        setVersion(index)
    }

    return (
        <div className=" container mt-5">
            <div className=' font-semibold text-2xl'>
                Phiên bản. <span className=' text-gray-400'>Mẫu nào phù hợp nhất với bạn?</span>
            </div>

            <div className='pt-5'>
                {product.map((value, index) => (
                    <button
                        className={`container ${version === index ? "border-blue-500" : "border-gray-400"} border-2 rounded-xl mt-5 h-[100px]`}
                        key={index}
                        onClick={() => select(index)}
                    >
                        <div className='flex justify-between p-4'>
                            <div className=' w-2/5 flex flex-col items-start justify-center'>
                                <div className=' font-semibold'>{value.name}</div>
                                <div className=' text-xs'>Màn hình {value.screen}</div>
                            </div>
                            <div className=' w-2/5 text-xs text-right'>
                                Từ {value.SSD[0]?.price}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}