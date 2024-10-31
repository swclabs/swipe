"use client"
import AccessoryIphone from '@/app/accessories/_components/iphone-accessories';
import Banner from '@/components/layout/banner';
import Welcome from '@/components/layout/welcome-section';


export default function Page() {
  return (
    <div className='w-full min-h-screen'>
      <Banner />
      <Welcome title='Phụ kiện' subtitle='Thỏa sức lựa chọn' />
      <AccessoryIphone />
    </div>
  );
}