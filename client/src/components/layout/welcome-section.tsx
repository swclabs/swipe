'use client';
import { motion } from "framer-motion"


export default function Welcome({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center">
        <div className=" sm:w-4/5 sm:p-12 py-10">
          <div className='flex justify-between gap-5 px-3'>
            <span className="text-4xl sm:text-7xl font-semibold">{title}</span>
            <h4 className="font-semibold text-xl sm:text-2xl text-right flex items-center">{subtitle}</h4>
          </div>
        </div>
      </div>
    </motion.div>
  )
}