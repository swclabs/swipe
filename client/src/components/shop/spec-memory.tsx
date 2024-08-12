import React from 'react';
import { ProductDetail, Specs } from "@/types/products";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

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
  const RAM = Array.from(new Set(product[version]?.color[color]?.specs?.map((value) => value.RAM)))
  return (
    <>{version !== -1 && color !== -1 &&
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className=" container mt-10">
          <div className=' font-semibold text-2xl'>
            Memory. <span className=' text-gray-400'>Bạn cần bao nhiêu memory?</span>
          </div>

          <div className='pt-2 flex gap-2' style={version === -1 ? disableSpec : enableSpec}>
            {RAM.map((value, index) =>
              <Button
                variant="outline"
                className={cn(specs.RAM === value ? "border-blue-500" : "border-gray-400")}
                key={index}
                // disabled={specs.ram === value ? true : false}
                onClick={() => setSpecs({ RAM: value, SSD: '', price: '' })}
              >
                {value}
              </Button>
            )
            }

          </div>
        </div >
      </motion.div >
    }
    </>
  )
}