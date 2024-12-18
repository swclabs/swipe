"use client"
import { ProductDesktopCard, ProductDisplayCard, ProductLaptopCard } from '@/app/computer/_components/product-card';
import Accessory from '@/components/content/accessories';
import Banner from '@/components/layout/banner';
import Welcome from '@/components/layout/welcome-section';
import { desktop, display, laptop } from '@/faker/mac';

export default function Page() {
  return (
    <div className=' w-full'>
      <Banner />
      <Welcome title='Shop Mac' subtitle='Nếu bạn dám mơ, Mac có thể thực hiện' />
      <ProductLaptopCard product={laptop} />
      <ProductDesktopCard product={desktop} />
      <ProductDisplayCard product={display} />
      <Accessory />
    </div>
  )
}