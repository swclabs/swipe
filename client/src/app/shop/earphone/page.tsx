"use client"
import Product from '@/app/earphone/_components/product';
import Banner from '@/components/layout/banner';
import Welcome from '@/components/layout/welcome-section';


export default function Page() {
  return (
    <div className='w-full'>
      <Banner />
      <Welcome title='AirPods' subtitle='Tất cả các phiên bản' />
      <Product />
    </div>
  );
}