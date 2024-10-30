import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import { useCart } from "@/state/purchase";
import { formatNumber } from "@/utils/fmt";
import { Trash } from "lucide-react";
import { SessionProviderProps, signOut } from "next-auth/react";
import { useEffect } from "react";
import { FiBookmark, FiBox, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { PurchaseService } from "@/service/purchase";
import { logout } from "@/lib/auth";



function MenuShortcuts({ session }: { session: SessionProviderProps['session'] }) {
  return (
    <div className=' container pt-10 text-xs'>
      <p>Hồ sơ của tôi</p>
      <div className=' container flex flex-col'>
        <a className=' pt-2 font-semibold flex items-center' href="/orders">
          <FiBox />
          <p className="pl-2">
            Đơn hàng
          </p>
        </a>
        <a className=' pt-2 font-semibold flex items-center' href="/favorite">
          <FiBookmark />
          <p className=" pl-2">
            Mục đã lưu
          </p>
        </a>
        <a className=' pt-2 font-semibold flex items-center' href="/profile">
          <FiUser />
          <p className=" pl-2">
            Tài khoản
          </p>
        </a>
        {session ?
          <button className=' pt-2 font-semibold flex items-center' onClick={() => {
            logout()
            signOut({ callbackUrl: '/', redirect: true })
          }}>
            <FiLogOut />
            <p className=" pl-2">
              Đăng xuất
            </p>
          </button>
          :
          <a className=' pt-2 font-semibold flex items-center' href="/auth">
            <FiSettings />
            <p className=" pl-2">
              Đăng nhập
            </p>
          </a>}
      </div>
    </div >
  )
}


export default function Products({ session }: { session: SessionProviderProps['session'] }) {
  const {
    carts,
    setCart,
    fetchCart,
  } = useCart();
  useEffect(() => {
    fetchCart();
  }, []);

  const handleDelete = async (cart_id: number, inventory_id: number) => {
    try {
      await PurchaseService.deleteCart(inventory_id);
    }
    catch (e) {
      console.log(e);
    }
    if (carts) {
      setCart({
        user_id: carts.user_id,
        products: carts.products.filter((value) => value.cart_id !== cart_id)
      });
    }
  }
  if (!session) {
    return (
      <div className=' container'>
        <p className=' font-semibold text-xl'>Túi của bạn trống.</p>
        <div className=' pt-5 text-sm'>
          <Link href='/auth' className=' text-sm underline font-semibold'>Đăng nhập</Link> để xem sản phẩm của bạn
        </div>
        <MenuShortcuts session={session} />
      </div>
    )
  }
  return (
    <div className=' container'>
      <div className=" flex justify-between sticky top-[0px]">
        <p className=' font-semibold text-xl'>Giỏ hàng</p>
        <Link href={`/cart`}>
          <Button >Xem Giỏ hàng</Button>
        </Link>
      </div>
      <div className=' pt-5 text-sm'>
        {carts?.products.map((value, index) => (
          <div className="flex p-3 justify-between" key={index}>
            <div className=" flex items-center">
              <Image
                alt="img"
                src={value.image}
                width={50}
                height={50}
              />
              <div className=" flex flex-col pl-5 text-xs gap-y-1 items-start">
                <p className="font-semibold ">
                  {`${value.name} - ${value.color}`}
                </p>
                <div className="flex items-center gap-2 font-semibold">
                  {`x${value.quantity}`}
                  {value.specs.ram !== "" && <Badge variant="outline">{value.specs.ram}</Badge>}
                  {value.specs.ssd !== "" && <Badge variant="outline">{value.specs.ssd}</Badge>}
                  {value.specs.connection !== "" && <Badge variant="outline">{value.specs.connection}</Badge>}
                  {value.specs.desc !== "" && <Badge variant="outline">{value.specs.desc}</Badge>}
                </div>
                <p className="font-semibold">{`${formatNumber(parseInt(value.price))}`}đ</p>
              </div>
            </div>
            <div className="m-1">
              <button onClick={() => handleDelete(value.cart_id, value.inventory_id)}>
                <Trash className=" w-4 text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <MenuShortcuts session={session} />
    </div>
  )
}