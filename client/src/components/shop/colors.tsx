import { ProductDetail } from "@/types/products";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IColorProps {
    product: ProductDetail[];
    version: number;
    color: number;
    setVersion: Dispatch<SetStateAction<number>>;
    setColor: Dispatch<SetStateAction<number>>;
}

export default function Colors({ product, version, color, setVersion, setColor }: IColorProps) {
    const [selectVersion, setSelectVersion] = useState<number>(0)

    useEffect(() => {
        if (version !== -1)
            setSelectVersion(version)
    }, [version])

    return (
        <div className=" container mt-10">
            <div className=' font-semibold text-2xl'>
                Màu. <span className=' text-gray-400'>Chọn màu bạn yêu thích</span>
            </div>

            <div className='pt-5 flex gap-4'>
                {product[selectVersion].color.map((value, index) => (
                    <Button
                        isIconOnly
                        radius="full"
                        key={index}
                        variant={`${color === index ? "bordered" : "solid"}`}
                        color="primary"
                        isDisabled={version === -1 ? true : false}
                        onClick={() => setColor(index)}
                    >
                        <Image
                            alt="img"
                            src={value.img}
                            fill
                        />
                    </Button>
                ))}
            </div>
        </div>
    )
}