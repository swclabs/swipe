import AccessoryAirtag from './_components/airtag-accessories';
import AccessoryIpad from '@/app/accessories/_components/ipad-accessories';
import AccessoryIphone from '@/app/accessories/_components/iphone-accessories';
import AccessoryMac from '@/app/accessories/_components/mac-accessories';
import AccessoryWatch from '@/app/accessories/_components/watch-accessories';
import Banner from "@/components/layout/banner";
import ShortCut from '@/components/layout/shortcut';
import Welcome from '@/components/layout/welcome-section';
import { Image } from '@nextui-org/react';

export default function Page() {
  return (
    <>
      <div className=" w-full">
        {/* <ProductBar /> */}
        <Banner />

        <Welcome title='Phụ Kiện' subtitle='Tìm phụ kiện cho thiết bị của bạn' />

        <AccessoryIphone />

        <div className="flex justify-center mt-12">
          <div className=" pt-12 pb-12">
            <span className=" text-xl sm:text-5xl font-medium">Dây Đeo Apple Watch</span>
          </div>
        </div>

        <AccessoryWatch />

        <div className="flex justify-center mt-12">
          <div className=" pt-12 pb-12">
            <span className=" text-xl sm:text-5xl font-medium">Phụ Kiện iPad Nổi Bật</span>
          </div>
        </div>

        <AccessoryIpad />

        <div className="flex justify-center mt-12">
          <div className=" pt-12 pb-12">
            <span className=" text-xl sm:text-5xl font-medium">Các Phụ Kiện Mac Nổi Bật</span>
          </div>
        </div>

        <AccessoryMac />

        <div className="flex justify-center mt-12">
          <div className=" pt-12 pb-12">
            <span className=" text-xl sm:text-5xl font-medium">AirTag</span>
          </div>
        </div>

        <AccessoryAirtag />
        <ShortCut />
        <div className='w-full bg-gray-100'>
          <div className='w-1/2 m-auto mt-12'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center w-[216px]'>
                <Image
                  alt=''
                  className='w-[44px] h-[56px] object-cover'
                  src="/img/accessory/icon-shipping-grey-2017.png"
                />
              </div>
              <div className='flex flex-col justify-center items-center text-center w-[216px]'>
                <h2 className='text-base font-semibold'>
                  Giao hàng miễn phí ngày làm việc tiếp theo
                </h2>
                <p className='text-sm font-light m-2'>
                  Chỉ khả dụng tại Thành Phố Hồ Chí Minh đối với một số sản phẩm Apple có sẵn nhất định được đặt hàng trước 15:00.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}