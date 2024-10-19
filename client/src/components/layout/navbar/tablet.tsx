import { Link } from "@nextui-org/react";


export function NavbarItemIpad() {
  return (
    <div className='large-container'>
      <Link color="foreground" href="/tablet">
        <p className=" text-xs">iPad</p>
      </Link>
      <div className="overlay">
        <div className=' container p-8 flex absolute'>
          <div className=' container'>
            <p className=' text-xs pb-3'>Khám phá iPad</p>
            <ul>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Khám phá tất cả iPad
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  iPad Air
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  iPad Pro
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  iPad
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  iPad mini
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Apple Pencil
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Bàn phím
                </Link>
              </li>
            </ul>
            {/* <Link color="foreground" className=' text-xs pb-3'>So Sánh iPad</Link> */}
          </div>
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Mua iPad</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mua iPad</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Phụ kiện iPad</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Apple Trade In </Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tài chính</Link></li>
            </ul> */}
          </div>
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Tìm hiểu thêm về iPhone</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Hỗ Trợ iPad</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AppleCare+ cho iPad</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>iPadOS 17</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Các ứng dụng của Apple</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>iCloud+</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Giáo dục</Link></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}