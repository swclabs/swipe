import { Link } from "@nextui-org/react";


export default function NavbarItemStore() {
  return (
    <div className='medium-container'>
      <Link color="foreground" href="/shop">
        <p className=" text-xs ">Cửa hàng</p>
      </Link>
      <div className="overlay">
        <div className=' container p-8 flex  absolute'>
          <div className=' container'>
            <p className=' text-xs pb-3'>Mua hàng</p>
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
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Liên kết nhanh</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tình trạng đơn hàng</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Apple Trade In </Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tài chính</Link></li>
            </ul> */}
          </div>
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Mua tại cửa hàng đặc biệt</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Giáo dục</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Doanh nghiệp</Link></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}