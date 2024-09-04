import React from 'react';
import { ProductDetail, Storage } from "@/types/products";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface IStorageProps {
  product: ProductDetail<Storage>[];
  version: number;
  color: number;
  specs: Storage
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
  setSpecs: (specs: Storage) => void;
}

const disableSpec = {
  "pointerEvents": "none",
  "opacity": "0.4",
}

const enableSpec = {}

const GetByRam = (product: ProductDetail<Storage>[], version: number, color: number) => {
  return product[version]?.color[color]?.specs
    ?.reduce<string[]>((acc, curr) => {
      if (!acc.includes(curr.RAM)) {
        acc.push(curr.RAM);
      }
      return acc;
    }, []);
}

export default function SpecMemory({ product, version, color, specs, setSpecs }: IStorageProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className=" container mt-10" id='RAM'>
          <div className=' font-semibold text-2xl'>
            Memory. <span className=' text-gray-400'>Bạn cần bao nhiêu memory?</span>
          </div>

          <div className='pt-2 flex gap-2' style={version === -1 ? disableSpec : enableSpec}>
            {
              version == -1 || color == -1 ?
                GetByRam(product, 0, 0)?.map((value, index) =>
                  <Button
                    variant="outline"
                    className={cn("border-[1.5px]", specs.RAM === value ? "border-blue-500" : "border-gray-400")}
                    key={index}
                    onClick={() => setSpecs({ RAM: value, SSD: '', price: '' })}
                    disabled={color === -1 ? true : false}
                  >
                    <Link href="#RAM" key={index}>
                      {value}
                    </Link>
                  </Button>
                ) :
                GetByRam(product, version, color)?.map((value, index) =>
                  <Button
                    variant="outline"
                    className={cn("border-[1.5px]", specs.RAM === value ? "border-blue-500" : "border-gray-400")}
                    key={index}
                    onClick={() => setSpecs({ RAM: value, SSD: '', price: '' })}
                  >
                    <Link href="#RAM" key={index}>
                      {value}
                    </Link>
                  </Button>
                )
            }

          </div>
        </div >
      </motion.div >
    </>
  )
}