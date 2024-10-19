import { Link } from "@nextui-org/react";

export default function NavbarItemWatch() {
  return (
    <div className='medium-container'>
      <Link color="foreground" href="/watch">
        <p className=" text-xs">Watch</p>
      </Link>
      <div className="overlay">
        <div className=' container p-8 flex absolute'>
          <div className=' container'>
            <p className=' text-xs pb-3'>Khám phá Watch</p>
            <ul>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Khám phá tất cả Watch
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Apple Watch Series 9
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Apple Watch Ultra 2
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Apple Watch SE
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Apple Watch Nike
                </Link>
              </li>
            </ul>
            {/* <Link color="foreground" className=' text-xs pb-3'>So Sánh Watch</Link> */}
          </div>
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Mua Apple Watch</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mua Watch</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Phụ kiện Watch</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Apple Trade In </Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tài chính</Link></li>
            </ul> */}
          </div>
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Tìm hiểu thêm về Watch</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Hỗ Trợ Watch</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AppleCare+ cho Watch</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>watchOS 10</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Các ứng dụng của Apple</Link></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}