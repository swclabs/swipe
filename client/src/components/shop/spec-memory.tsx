import React from 'react';
import { ProductDetail, Specs } from "@/types/products";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface IStorageProps {
  product: ProductDetail<Specs>[];
  version: number;
  color: number;
  specs: Specs
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
  setSpecs: (specs: Specs) => void;
}

const disableSpec = {
  "pointerEvents": "none",
  "opacity": "0.4",
}

const enableSpec = {}

export default function SpecMemory({ product, version, color, specs, setSpecs }: IStorageProps) {
  const RAM = product[version]?.color[color]?.specs
    ?.reduce<string[]>((acc, curr) => {
      if (!acc.includes(curr.RAM)) {
        acc.push(curr.RAM);
      }
      return acc;
    }, []);
  return (
    <>
      {version !== -1 && color !== -1 &&
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
              {RAM?.map((value, index) =>
                <Link href="#RAM" key={index}>
                  <Button
                    variant="outline"
                    className={cn(specs.RAM === value ? "border-blue-500" : "border-gray-400")}
                    key={index}
                    onClick={() => setSpecs({ RAM: value, SSD: '', price: '' })}
                  >
                    {value}
                  </Button>
                </Link>
              )
              }

            </div>
          </div >
        </motion.div >
      }
    </>
  )
}