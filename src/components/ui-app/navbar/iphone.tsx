import { Link } from "@nextui-org/react";


export function NavbarItemIphone() {
    return (
        <div className='medium-container'>
            <Link color="foreground" href="/iphone">
                <p className=" text-xs">iPhone</p>
            </Link>
            <div className="overlay">
                <div className=' container p-8 flex absolute'>
                    <div className=' container'>
                        <p className=' text-xs pb-3'>Khám phá iPhone</p>
                        <ul>
                            <li className=' pt-1 pb-1'>
                                <Link className=' text-2xl font-semibold' color="foreground">
                                    Khám phá tất cả iPhone
                                </Link>
                            </li>
                            <li className=' pt-1 pb-1'>
                                <Link className=' text-2xl font-semibold' color="foreground">
                                    iPhone 15 Pro
                                </Link>
                            </li>
                            <li className=' pt-1 pb-1'>
                                <Link className=' text-2xl font-semibold' color="foreground">
                                    iPhone 15
                                </Link>
                            </li>
                            <li className=' pt-1 pb-1'>
                                <Link className=' text-2xl font-semibold' color="foreground">
                                    iPhone 14
                                </Link>
                            </li>
                            <li className=' pt-1 pb-1'>
                                <Link className=' text-2xl font-semibold' color="foreground">
                                    iPhone 13
                                </Link>
                            </li>
                            <li className=' pt-1 pb-1'>
                                <Link className=' text-2xl font-semibold' color="foreground">
                                    iPhone SE
                                </Link>
                            </li>
                        </ul>
                        <Link color="foreground" className=' text-xs pb-3'>So Sánh iPhone</Link>
                    </div>
                    <div className=' container'>
                        <p className=' text-xs pb-3'>Mua iPhone</p>
                        <ul>
                            <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Mua iPhone</Link></li>
                            <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Phụ kiện iPhone</Link></li>
                            <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Apple Trade In </Link></li>
                            <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Tài chính</Link></li>
                        </ul>
                    </div>
                    <div className=' container'>
                        <p className=' text-xs pb-3'>Tìm hiểu thêm về iPhone</p>
                        <ul>
                            <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Hỗ Trợ iPhone</Link></li>
                            <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>AppleCare+ cho iPhone</Link></li>
                            <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>iOS 17</Link></li>
                            <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>Các ứng dụng của Apple</Link></li>
                            <li className=' pt-0.5 pb-0.5'><Link color="foreground" href='#' className=' text-xs font-medium'>iCloud+</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}