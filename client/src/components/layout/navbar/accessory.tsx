import { Link } from "@nextui-org/react";

export default function NavbarItemAccessory() {
  return (

    <div className='medium-container'>
      <Link color="foreground" href="/accessories">
        <p className=" text-xs">Phụ kiện</p>
      </Link>
      <div className="overlay">
        <div className=' container p-8 flex absolute'>
          <div className=' container'>
            <p className=' text-xs pb-3'>Mua phụ kiện</p>
            <ul>
              <li className=' pt-1 pb-1'>
                <Link className=' text-2xl font-semibold' color="foreground">
                  Khám phá tất cả Phụ kiện
                </Link>
              </li>
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
            {/* <p className=' text-xs pb-3'>Khám phá phụ kiện</p>
            <ul>
              <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Sản xuất bởi Apple</Link></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}