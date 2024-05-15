import { IProductDetail } from "@/types/products";
import { Button, Image } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IColorProps {
    product: IProductDetail[];
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

            <div className='pt-5 flex'>
                {product[selectVersion].color.map((value, index) => (
                    <Button
                        isIconOnly
                        radius="full"
                        key={index}
                        className="ml-4"
                        variant={`${color === index ? "bordered" : "solid"}`}
                        color="primary"
                        isDisabled={version === -1 ? true : false}
                        onClick={() => setColor(index)}
                    >
                        <Image
                            alt="img"
                            src={value.img}
                        />
                    </Button>
                ))}
            </div>
        </div>
    )
}