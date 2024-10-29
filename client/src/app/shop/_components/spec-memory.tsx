import React from 'react';
import { ProductDetail, Specification } from "@/types/products";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface IStorageProps {
  product: ProductDetail;
  color: number;
  specs: Specification;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}
const disableSpec = {
  "pointerEvents": "none",
  "opacity": "0.4",
}

const enableSpec = {}

const GetByRam = (product: ProductDetail, color: number) => {
  return product.color[color]?.specs
    ?.reduce<string[]>((acc, curr) => {
      if (!acc.includes(curr.ram)) {
        acc.push(curr.ram);
      }
      return acc;
    }, []);
}

export default function SpecMemory({ product, color, specs, setSpecs }: IStorageProps) {
  return (
    <>
      <div className=" container" id='RAM'>
        <div className=' font-semibold text-2xl'>
          Memory. <span className=' text-gray-400'>Bạn cần bao nhiêu memory?</span>
        </div>

        <div className='pt-2 flex gap-2'>
          {
            color === -1 ?
              GetByRam(product, 0)?.map((value, index) =>
                <Button
                  variant="outline"
                  className={cn("border-[1.5px]", specs.ram === value ? "border-blue-500" : "border-gray-400")}
                  key={index}
                  onClick={() => setSpecs({ ram: value, ssd: '', price: '', connection: "", desc: "", inventory_id: -1 })}
                  disabled={color === -1 ? true : false}
                >
                  {value}
                </Button>
              ) :
              GetByRam(product, color)?.map((value, index) =>
                <Button
                  variant="outline"
                  className={cn("border-[1.5px]", specs.ram === value ? "border-blue-500" : "border-gray-400")}
                  key={index}
                  onClick={() => setSpecs({ ram: value, ssd: '', price: '', connection: "", desc: "", inventory_id: -1 })}
                  disabled={color === -1 ? true : false}
                >
                  {value}
                </Button>
              )
          }

        </div>
      </div >
    </>
  )
}