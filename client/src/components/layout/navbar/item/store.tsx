import { Link } from "@nextui-org/react";


export default function NavbarItemStore() {
  return (
    <div className='medium-container'>
      <Link color="foreground" href="/shop" className="pb-[2px] hover:border-b-2 hover:pb-0 hover:border-black">
        <p className=" text-sm font-semibold">Cửa hàng</p>
      </Link>
      <div className="overlay">
        <div className=' container p-8 flex'>
          <div className=' container'>
            <p className=' text-sm pb-3'>Mua hàng</p>
            <ul>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Mua sản phẩm mới nhất
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground" href='/mac'>
                  Mac
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  iPad
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  iPhone
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Phụ kiện
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}