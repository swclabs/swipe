'use client'
import { ProductDesktopCard, ProductDisplayCard, ProductLaptopCard } from '@/app/computer/_components/product-card';
import { ComputerCardsCarousel } from '@/app/computer/_components/cards-carousel';
import Banner from "@/components/layout/banner";
import ShortCut from '@/components/layout/shortcut';
import Welcome from '@/components/layout/welcome-section';
// import { desktop, display, laptop } from '@/faker/mac';
import { mac_carousel, mac_carousel_1, mac_carousel_2, mac_carousel_3 } from '@/faker/mac_carousel';
import { ProductType } from '@/types/products';
import { useEffect, useState } from 'react';
import { ProductService } from '@/service/products';

export default function Page() {

  const [laptop, setLaptop] = useState<ProductType[]>([]);
  const [desktop, setDesktop] = useState<ProductType[]>([]);
  const [display, setDisplay] = useState<ProductType[]>([]);

  useEffect(() => {
    const f = async () => {
      try {
        const fetchLaptop = await ProductService.getProductByType('laptop');
        const fetchDesktop = await ProductService.getProductByType('desktop');
        const fetchDisplay = await ProductService.getProductByType('display');
        setLaptop(fetchLaptop.data);
        setDesktop(fetchDesktop.data);
        setDisplay(fetchDisplay.data);
      }
      catch (e) {
        console.log(e);
      }
    }
    f();
  }, []);

  return (
    <div className='w-full'>
      <Banner />
      <Welcome title='Mac' subtitle='Nếu bạn dám mơ, Mac có thể thực hiện' />
      <ComputerCardsCarousel carousel={mac_carousel} />
      <ProductLaptopCard product={laptop} />
      <ProductDesktopCard product={desktop} />
      <ProductDisplayCard product={display} />
      <ComputerCardsCarousel carousel={mac_carousel_1} />
      <ComputerCardsCarousel carousel={mac_carousel_2} />
      <ComputerCardsCarousel carousel={mac_carousel_3} />
      <ShortCut />
    </div>
  )
}