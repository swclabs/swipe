import Link from "next/link";


export default function NotLoggedIn() {
    return (
        <div className=' container'>
            <p className=' font-semibold text-xl'>Túi của bạn trống.</p>
            <div className=' pt-5 text-sm'>
                <Link href='/auth/login' className=' text-sm underline font-semibold'>Đăng nhập</Link> để xem sản phẩm của bạn
            </div>
            <div className=' container pt-10 text-xs'>
                <p>Hồ sơ của tôi</p>
                <div className=' container flex flex-col'>
                    <a className=' pt-2 font-semibold'>Đơn hàng</a>
                    <a className=' pt-2 font-semibold'>Mục đã lưu</a>
                    <a className=' pt-2 font-semibold'>Tài khoản</a>
                    <a className=' pt-2 font-semibold'>Đăng nhập</a>
                </div>
            </div>
        </div>
    )
}