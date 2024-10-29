"use client"
import Product from '@/app/phone/_components/product';
import Accessory from '@/components/content/accessories';
import Banner from "@/components/layout/banner";
import Welcome from '@/components/layout/welcome-section';

export default function Page() {
  return (
    <>
      <div className=" w-full">
        {/* <div className=' w-full flex justify-center p-5 bg-gray-50'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='w-4/5'
          >
            <ProductIphoneTypes />
          </motion.div>
        </div> */}
        <Banner />

        <Welcome title='iPhone' subtitle='Được thiết kế mà ai cũng mê' />

        <Product />
        <Accessory />
        {/* <ProductCardCarousel carousel={product_carousel} /> */}
      </div>
    </>
  );
}