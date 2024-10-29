"use client"
import Product from '@/components/content/watch/product';
import Banner from '@/components/layout/banner';
import Welcome from '@/components/layout/welcome-section';

export default function Page() {
  return (
    <div className='w-full'>
      {/* <div className=' w-full flex justify-center p-5 bg-gray-50'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className='w-4/5'
        >
          <ProductWatchTypes />
        </motion.div>
      </div> */}
      <Banner />
      <Welcome title='Watch' subtitle='Tất cả các phiên bản' />
      <Product />
    </div>
  );
}