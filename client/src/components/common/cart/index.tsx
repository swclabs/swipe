import Image from "next/image";
import Link from "next/link";

import cartData from "@/faker/cart";
import { Button } from "@nextui-org/react";


import { FiUser } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { useEffect, useState } from "react";



function MenuShortcuts() {
  return (
    <div className=' container pt-10 text-xs'>
      <p>Hồ sơ của tôi</p>
      <div className=' container flex flex-col'>
        <a className=' pt-2 font-semibold flex items-center'>
          <FiBox />
          <p className="pl-2">
            Đơn hàng
          </p>
        </a>
        <a className=' pt-2 font-semibold flex items-center'>
          <FiBookmark />
          <p className=" pl-2">
            Mục đã lưu
          </p>
        </a>
        <a className=' pt-2 font-semibold flex items-center'>
          <FiUser />
          <p className=" pl-2">
            Tài khoản
          </p>
        </a>
        <a className=' pt-2 font-semibold flex items-center' href="/auth">
          <FiSettings />
          <p className=" pl-2">
            Đăng nhập
          </p>
        </a>
      </div>
    </div>
  )
}

interface Body {
  user?: {
    email: string
  },
  expires?: string,
  iat?: number,
  exp?: number
}

export default function Products() {
  const [data, setData] = useState<Body>({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/auth/session');
      const body = await res.json();
      if (typeof body !== 'object') {
        setData(JSON.parse(body));
      }
    };
    fetchData();
  }, []);
  // console.log(data.user);
  if (data.user === undefined) {
    return (
      <div className=' container'>
        <p className=' font-semibold text-xl'>Túi của bạn trống.</p>
        <div className=' pt-5 text-sm'>
          <Link href='/auth' className=' text-sm underline font-semibold'>Đăng nhập</Link> để xem sản phẩm của bạn
        </div>
        <MenuShortcuts />
      </div>
    )
  }
  return (
    <div className=' container'>
      <div className=" flex justify-between sticky top-[0px] bg-gray-50">
        <p className=' font-semibold text-xl'>Giỏ hàng</p>
        <Link href={`/shop/bag`}>
          <Button color="primary" radius="full">Xem Giỏ hàng</Button>
        </Link>
      </div>
      <div className=' pt-5 text-sm'>
        {cartData.map((value, index) => (
          <div className=" flex p-3" key={index}>
            <Image
              alt="img"
              src={value.img}
              width={70}
              height={70}
            />
            <div className=" flex items-center pl-5 font-semibold text-xs">
              <p>{`${value.name} - ${value.title}`}</p>
            </div>
          </div>
        ))}
      </div>
      <MenuShortcuts />
    </div>
  )
}

export function LoggedIn() {
  return (
    <div className=' container'>
      <div className=" flex justify-between sticky top-[0px] bg-gray-50">
        <p className=' font-semibold text-xl'>Giỏ hàng</p>
        <Link href={`/shop/bag`}>
          <Button color="primary" radius="full">Xem Giỏ hàng</Button>
        </Link>
      </div>
      <div className=' pt-5 text-sm'>
        {cartData.map((value, index) => (
          <div className=" flex p-3" key={index}>
            <Image
              alt="img"
              src={value.img}
              width={70}
              height={70}
            />
            <div className=" flex items-center pl-5 font-semibold text-xs">
              <p>{`${value.name} - ${value.title}`}</p>
            </div>
          </div>
        ))}
      </div>
      <MenuShortcuts />
    </div>
  )
}