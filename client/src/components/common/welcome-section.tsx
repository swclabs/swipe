import { motion } from "framer-motion"


export default function Welcome({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex justify-center">
        <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
          <div className='grid grid-cols-2 gap-4'>
            <span className=" text-xl sm:text-7xl font-semibold">{title}</span>
            <h4 className="font-semibold text-2xl text-right py-12">{subtitle}</h4>
          </div>
        </div>
      </div>
    </motion.div>
  )
}