import { Link } from "@nextui-org/react";


export default function NavbarItemAirPod() {
  return (
    <div className='medium-container'>
      <Link color="foreground" href="/earphone" className="pb-[2px] hover:border-b-2 hover:pb-0 hover:border-black">
        <p className="text-sm font-semibold">AirPods</p>
      </Link>
      <div className="overlay">
        <div className=' container p-8 flex absolute'>
          <div className=' container'>
            <p className=' text-xs pb-3'>Khám phá AirPods</p>
            <ul>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Khám phá tất cả AirPods
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  AirPods Pro (Thế Hệ thứ 2)
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  AirPods (Thế Hệ thứ 2)
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  AirPods (Thế Hệ thứ 3)
                </Link>
              </li>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  AirPods Max
                </Link>
              </li>
            </ul>
            {/* <Link color="foreground" className=' text-xs pb-3'>So Sánh AirPods</Link> */}
          </div>
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Mua Apple AirPods</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mua AirPods</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Phụ kiện AirPods</Link></li>
            </ul> */}
          </div>
          <div className=' container'>
            {/* <p className=' text-xs pb-3'>Tìm hiểu thêm về AirPods</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Hỗ Trợ AirPods</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AppleCare+ cho AirPods</Link></li>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AirPods Music</Link></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}