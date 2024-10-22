import { Link } from "@nextui-org/react";


export default function NavbarItemSupport() {
  return (
    <div className='medium-container'>
      <Link color="foreground" href="/support">
        <p className=" text-xs">Hỗ trợ</p>
      </Link>
      <div className="overlay">
        <div className=' container p-8 flex absolute'>
          <div className=' container'>
            <p className=' text-xs pb-3'>Khám phá Hỗ trợ</p>
            <ul>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
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
                  Apple Watch
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  AirPods
                </Link>
              </li>
            </ul>
          </div>
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Trợ giúp</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Cộng đồng</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Kiểm tra bảo hành</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Sửa chữa</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Liên hệ với chúng tôi</Link></li>
            </ul> */}
          </div>
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Chủ đề hữu ích</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Thanh toán</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tìm</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Trợ năng</Link></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}