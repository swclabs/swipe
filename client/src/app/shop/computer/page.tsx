"use client"
import { ProductDesktopCard, ProductDisplayCard, ProductLaptopCard } from '@/app/computer/_components/product-card';
import Accessory from '@/components/content/accessories';
import Banner from '@/components/layout/banner';
import Welcome from '@/components/layout/welcome-section';
import { desktop, display, laptop } from '@/faker/mac';

export default function Page() {
  return (
    <div className=' w-full'>
      {/* <div className=' w-full flex justify-center p-2'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className='w-4/5'
        >
          <ComputerNavbar />
        </motion.div>
      </div> */}
      <Banner />
      <Welcome title='Shop Mac' subtitle='If you can dream it, Mac can do it' />

      {/* <ProductTabs /> */}

      {/* <div className=" w-full" id='laptop'>
        <div className="flex">
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          <div className=" sm:w-4/5 sm:py-12 py-5 px-2">
            <p className=" text-xl sm:text-3xl font-semibold">Laptop</p>
            <p className=' text-sm font-light'>Nhanh và tiện lợi</p>
          </div>
        </div>
      </div> */}
      <ProductLaptopCard product={laptop} />

      {/* <div className=" w-full" id='desktop'>
        <div className="flex">
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          <div className=" sm:w-4/5 sm:py-12 py-5 px-2">
            <p className=" text-xl sm:text-3xl font-semibold">Desktop</p>
            <p className=' text-sm font-light'>Sức mạnh tối đa</p>
          </div>
        </div>
      </div> */}
      <ProductDesktopCard product={desktop} />

      {/* <div className=" w-full" id='display'>
        <div className="flex">
          <div className=" sm:w-1/12 shrink-0 snap-center">
            <div className="shrink-0"></div>
          </div>
          <div className=" sm:w-4/5 sm:py-12 py-5 px-2">
            <p className=" text-xl sm:text-3xl font-semibold">Display</p>
            <p className=' text-sm font-light'>Sắc màu rực rỡ</p>
          </div>
        </div>
      </div> */}
      <ProductDisplayCard product={display} />

      <Accessory />
      {/* <ProductCardCarousel carousel={product_carousel} /> */}
    </div>
  )
}