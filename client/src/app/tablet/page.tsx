"use client"
import Product from '@/components/content/tablet/product';
import Accessory from '@/components/content/accessories';
import { ShopCardsCarousel } from '@/app/shop/_components/cards-carousel';
import Banner from "@/components/layout/banner";
import ShortCut from '@/components/layout/shortcut';
import Welcome from '@/components/layout/welcome-section';
import { shop_carousel } from '@/faker/shop_carousel';

function Page() {
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

        <ShopCardsCarousel carousel={shop_carousel} />

        {/* <div className=' bg-gray-50 flex justify-center'>
          <div className=' md:w-4/5 w-2/3'>
            <div className=" text-xl sm:text-2xl font-semibold pt-10">Mọi phiên bản. <span className='font-medium text-gray-500'> Hãy chọn mẫu bạn thích.</span></div>
            <ShopTablet data={ipad} href='/shop/tablet' />

            <span className=" text-xl sm:text-2xl font-semibold"> Phụ kiện. <span className='font-medium text-gray-500'> Những phụ kiện kết hợp hoàn hảo với thiết bị yêu thích của bạn.</span></span>
            <AccessoryCard data={iPhoneAccessories} />
          </div>
        </div> */}
        <Product />
        <Accessory />
        <ShortCut />
      </div >
    </>
  );
}

export default Page;