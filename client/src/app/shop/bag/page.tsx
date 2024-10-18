"use client"
import { Link } from '@nextui-org/react';
import { VscSymbolMethod } from "react-icons/vsc";
import { cartData } from '@/faker/cart';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { formatNumber } from '@/utils/fmt';

function BagPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    cartData.products.forEach((value) => {
      total += parseFloat(value.price);
    });
    setTotalPrice(total);
  }, []);


  return (
    <>
      <div className=" w-full bg-white">
        <div className='w-4/5 m-auto'>

          <div className="flex justify-center items-center mt-4 mb-12">
            <p className="text-base">Xin lưu ý rằng chúng tôi không chấp nhận đổi trả đối với các đơn hàng trực tuyến.</p>

          </div>

          <div className="flex flex-col justify-center items-center mb-4 sticky">
            <p className="text-xl sm:text-4xl font-semibold">Tổng giá trị giỏ hàng của bạn là {formatNumber(totalPrice)}</p>
            <p className='text-base mt-4'>Vận chuyển miễn phí đối với mọi đơn hàng.</p>
            <Link href="#" className='w-72 mt-6 mb-12'>
              <Button color="primary" className="w-full">Thanh toán</Button>
            </Link>
          </div>

          <div className=' flex flex-col gap-y-5'>
            {cartData.products.map((value, index) => (
              <div className="flex flex-col" key={index}>
                <div className="flex lg:flex-row flex-col justify-between">
                  <div className='flex items-center gap-10 lg:flex-row flex-col'>
                    <Image
                      alt="img"
                      src={value.image}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className='flex flex-col p-5 lg:w-2/3'>
                    <div className='pb-4 border-b-1'>
                      <div className='flex justify-between sticky py-2'>
                        <p className='text-2xl font-medium'>{value.name}</p>
                        <p className='text-2xl font-medium'>{formatNumber(parseInt(value.price))}đ</p>
                      </div>
                    </div>

                    <div className=' flex flex-col gap-y-2'>
                      <div className=' font-semibold text-sm gap-3 flex pt-3'>
                        <Badge variant="outline">{value.category}</Badge>
                        {value.specs.ram !== "" && <Badge variant="outline">{value.specs.ram}</Badge>}
                        {value.specs.ssd !== "" && <Badge variant="outline">{value.specs.ssd}</Badge>}
                        {value.specs.connection !== "" && <Badge variant="outline">{value.specs.connection}</Badge>}
                        {value.specs.desc !== "" && <Badge variant="outline">{value.specs.desc}</Badge>}
                      </div>
                      <div className='flex flex-row gap-2 items-center'>
                        <VscSymbolMethod size={20} />
                        <p className=' text-sm'>Đặt hàng hôm nay. Giao hàng đến:</p>
                        <Badge variant="secondary">Thành phố Hồ Chí Minh</Badge>
                      </div>
                      <p className='text-sm'>Th 2 20/05/2024 — Miễn Phí</p>
                      <p className='text-sm font-semibold'>x{value.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-col w-full items-end'>
            <div className='flex flex-col w-3/4 mt-8 border-b-1 gap-y-2'>
              <div className='grid grid-cols-2'>
                <p className='text-base'>Tổng giá trị:</p>
                <div className='flex justify-end'>
                  <p className='text-base'>{formatNumber(totalPrice) + "đ"}</p>
                </div>
              </div>
              <div className='grid grid-cols-2 mb-2'>
                <p className='text-base'>Vận chuyển</p>
                <div className='flex justify-end'>
                  <p className='text-base'>MIỄN PHÍ</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-3/4 mt-4'>
              <div className='grid grid-cols-2'>
                <div>
                  <p className='text-2xl font-semibold'>Thanh toán toàn bộ</p>
                </div>
                <div className='flex flex-col items-end'>
                  <p className='text-2xl font-semibold'>{formatNumber(totalPrice) + "đ"}</p>
                </div>
              </div>
              <div className='flex justify-end'>
                <p className='text-sm font-light'>Bao gồm thuế GTGT</p>
              </div>
            </div>

            <div className='flex flex-col w-3/4 mt-4'>
              <div className='flex justify-end'>
                <Link href="#" className='w-72 mt-6 mb-12'>
                  <Button color="primary" size="sm" className=' w-full'>Thanh toán</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default BagPage;