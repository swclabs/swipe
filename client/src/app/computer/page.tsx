import { ProductDesktopCard, ProductDisplayCard, ProductLaptopCard } from '@/app/computer/_components/product-card';
import { ComputerCardsCarousel } from '@/app/computer/_components/cards-carousel';
import Banner from "@/components/layout/banner";
import ShortCut from '@/components/layout/shortcut';
import Welcome from '@/components/layout/welcome-section';
import { desktop, display, laptop } from '@/faker/mac';
import { mac_carousel, mac_carousel_1, mac_carousel_2, mac_carousel_3 } from '@/faker/mac_carousel';

export default async function Page() {
  return (
    <div className='w-full'>
      <Banner />
      <Welcome title='Mac' subtitle='If you can dream it, Mac can do it' />
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