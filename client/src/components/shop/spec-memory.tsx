import React from 'react';
import { ProductDetail } from "@/types/products";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IStorageProps {
    product: ProductDetail[];
    version: number;
    color: number;
    setVersion: Dispatch<SetStateAction<number>>;
    setColor: Dispatch<SetStateAction<number>>;
}

const disableSpec = {
    "pointerEvents": "none",
    "opacity": "0.4",
}

const enableSpec = {}

export default function SpecMemory({ product, version, color, setColor }: IStorageProps) {
    const [select, setSelect] = useState<number>(-1)
    const [checkRam, setCheckRam] = useState<string[]>([])
    const tempRam: string[] = []

    useEffect(() => {
        setSelect(-1)
        setCheckRam(tempRam)
    }, [color, version])

    product[version]?.color[color]?.specs?.map((value, index) => {
        if (!tempRam.includes(value.RAM)) {
            tempRam.push(value.RAM)
        }
    })


    return (
        <div className=" container mt-10">
            {color !== -1 &&
                <div className=' font-semibold text-2xl'>
                    Memory. <span className=' text-gray-400'>Bạn cần bao nhiêu memory?</span>
                </div>
            }

            <div className='pt-5' style={version === -1 ? disableSpec : enableSpec}>
                {checkRam.map((value, index) =>
                    <button
                        className={`container ${select === index ? "border-blue-500" : "border-gray-400"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
                        key={index}
                        onClick={() => setSelect(index)}
                    >
                        <div className='flex justify-between p-4'>
                            <div className=' w-2/5 flex flex-col items-start justify-center'>
                                <div className=' font-semibold'>{value}</div>
                            </div>
                        </div>
                    </button>
                )
                }

            </div>
        </div >
    )
}