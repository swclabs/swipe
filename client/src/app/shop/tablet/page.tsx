"use client"
import Product from '@/components/content/tablet/product';
import Accessory from '@/components/content/accessories';
import Banner from "@/components/layout/banner";
import ShortCut from '@/components/layout/shortcut';
import Welcome from '@/components/layout/welcome-section';
export default function IpadPage() {
  return (
    <>
      <div className=" w-full">
        {/* <div className=' w-full flex justify-center p-5'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className='w-4/5'
          >
            <ProductIpadTypes />
          </motion.div>
        </div> */}
        <Banner />

        {/* Section Welcome */}
        <Welcome title='iPad' subtitle='Thỏa sức sáng tạo' />
        <Product />

        {/* <ProductCardCarousel carousel={product_carousel} /> */}
        <Accessory />
        <ShortCut />
      </div >
    </>
  );
}