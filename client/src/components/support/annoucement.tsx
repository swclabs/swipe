'use client';
import './style.css';

export default function Annoucement() {

    return (
        <div className='w-full pt-8 pb-8'>
            <div className='w-1/2 m-auto px-16 py-8 flex flex-col gap-y-4 rounded-lg bg-red-50'>
                <h2 className='text-3xl font-semibold'>Thận trọng với linh kiện giả</h2>
                <p>
                    Một số bộ chuyển đổi điện và pin giả của bên thứ ba có thể không được thiết kế đúng cách và có nguy cơ gây ra các sự cố về an toàn.
                    Để đảm bảo nhận được pin chính hãng của Apple trong quá trình thay thế pin, bạn nên tìm đến <span className='text-blue-500'>Nhà cung cấp dịch vụ ủy quyền của Apple. </span>
                    Nếu cần bộ chuyển đổi thay thế để sạc thiết bị Apple, bạn nên mua bộ chuyển đổi điện của Apple.
                </p>
                <p>
                    Ngoài ra, màn hình thay thế không chính hãng có thể làm giảm chất lượng hình ảnh và hoạt động không đúng cách.
                    Dịch vụ sửa chữa màn hình được Apple chứng nhận sẽ do các chuyên gia đáng tin cậy thực hiện, sử dụng linh kiện chính hãng của Apple.
                </p>
            </div >
        </div >

    )
}