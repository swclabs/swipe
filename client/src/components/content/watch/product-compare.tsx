// 'use client';
// import { Image } from "@nextui-org/react";
// import './style.css'

// export default function ProductCompare() {
//     return (
//         <div className="w-full pb-[10px] hover:pb-0 scrollbar hover:overflow-x-auto overflow-hidden bg-white">
//             <div className=" relative flex snap-x snap-mandatory 2xl:justify-between">

//                 <div className=" sm:w-1/12 shrink-0 snap-center">
//                     <div className="shrink-0"></div>
//                 </div>

//                 <div className='grid grid-cols-3 gap-6'>

//                     {/* Apple Watch SE */}
//                     <div className="container mx-auto w-80">
//                         <div className="product-tile-header">
//                             <a
//                                 href="/"
//                                 className="product-image-link"
//                             >
//                                 <Image
//                                     removeWrapper
//                                     alt="Card background"
//                                     className="z-0 w-full h-full object-cover"
//                                     src="/img/watch/compare_se_large.jpg"
//                                 />
//                             </a>

//                             <h1 className="text-center font-semibold text-2xl py-4">Apple Watch SE</h1>
//                             <p className="text-center">
//                                 Tất cả tính năng bạn cần.
//                                 <br />
//                                 Giá nhẹ nhàng.
//                             </p>
//                             <h4 className="font-semibold text-xl text-center py-2">Từ 6.399.000đ</h4>
//                             <a className="text-center py-4 text-blue-600" href="#">
//                                 <span className="buy"> Mua </span>
//                             </a>
//                         </div>

//                         <div className="border-b-1"></div>

//                         <div className="grid grid-rows-10 gap-4">
//                             <div className="h-32 flex flex-col items-center justify-center text-center">
//                                 <h4 className="font-semibold text-xl">
//                                     Vỏ nhôm
//                                     <br />
//                                     44mm hoặc 40mm</h4>
//                             </div>
//                             <div className="h-32 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_carbon_neutral_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">
//                                     Có sẵn các cách kết hợp
//                                     <br />
//                                     trung hòa carbon
//                                 </p>

//                             </div>
//                             <div className="h-44 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_retina_display_se_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-base text-sm">
//                                     Màn hình Retina
//                                     <br />
//                                     Lên đến 1.000 nit
//                                 </p>
//                             </div>
//                             <div className="h-56 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_s8_sip_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">S8 SiP</p>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                                 <p className="font-normal text-sm pb-2">Tìm iPhone</p>
//                             </div>
//                             <div className="h-96 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_heart_rate_notifications_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Thông báo
//                                     <br />
//                                     nhịp tim cao và thấp
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Thông báo
//                                     <br />
//                                     nhịp không đều
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Thông báo
//                                     <br />
//                                     thể chất tim mạch thấp
//                                 </p>
//                             </div>
//                             <div className="h-48 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_temperature_sensing_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                                 <p className="font-normal text-sm pb-2">Theo Dõi Chu Kỳ</p>
//                             </div>
//                             <div className="h-64 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_sos_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">SOS Khẩn Cấp</p>
//                                 <p className="font-normal text-sm pb-2">Gọi khẩn cấp quốc tế</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Phát Hiện Ngã và
//                                     <br />
//                                     Phát Hiện Va Chạm
//                                 </p>
//                                 <p className="font-base text-sm">-</p>
//                             </div>
//                             <div className="h-64 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_water_resistant_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Chống nước</p>
//                                 <p className="font-normal text-sm pb-2">Chống nước khi bơi</p>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                             </div>
//                             <div className="h-52 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_cellular_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">GPS</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Có kết nối bằng dữ liệu
//                                     <br />
//                                     di động
//                                 </p>
//                             </div>
//                             <div className="h-52 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_battery_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Lên đến 18 giờ</p>
//                                 <p className="font-normal text-sm pb-2">Chế Độ Nguồn Điện Thấp</p>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                             </div>
//                         </div>

//                         <div className="border-b-1"></div>
//                     </div>

//                     {/* Apple Watch series 9 */}
//                     <div className="container mx-auto w-80">
//                         <div className="product-tile-header">
//                             <a
//                                 href="/"
//                                 className="product-image-link"
//                             >
//                                 <Image
//                                     removeWrapper
//                                     alt="Card background"
//                                     className="z-0 w-full h-full object-cover"
//                                     src="/img/watch/compare_s9_large.jpg"
//                                 />
//                             </a>

//                             <h1 className="text-center font-semibold text-2xl py-4">Apple Watch Series 9</h1>
//                             <p className="text-center">
//                                 Cảm biến mạnh mẽ,
//                                 <br />
//                                 tính năng sức khỏe tiên tiến.
//                             </p>
//                             <h4 className="font-semibold text-xl text-center py-2">Từ 10.499.000đ</h4>
//                             <a className="text-center py-4 text-blue-600" href="#">
//                                 <span className="buy"> Mua </span>
//                             </a>
//                         </div>

//                         <div className="border-b-1"></div>

//                         <div className="grid grid-rows-10 gap-4">
//                             <div className="h-32 flex flex-col items-center justify-center text-center">
//                                 <h4 className="font-semibold text-xl">
//                                     Vỏ nhôm
//                                     <br />
//                                     hoặc thép không gỉ
//                                     <br />
//                                     45mm hoặc 41mm
//                                 </h4>
//                             </div>
//                             <div className="h-32 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_carbon_neutral_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">
//                                     Có sẵn các cách kết hợp
//                                     <br />
//                                     trung hòa carbon
//                                 </p>

//                             </div>
//                             <div className="h-44 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_retina_display_s9_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-base text-sm">
//                                     Màn hình Retina Luôn Bật
//                                     <br />
//                                     Lên đến 2.000 nit
//                                 </p>
//                             </div>
//                             <div className="h-56 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_s9_sip_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">S9 SiP</p>
//                                 <p className="font-normal text-sm pb-2">Thao tác chạm hai lần</p>
//                                 <p className="font-normal text-sm pb-2">Tìm Chính Xác
//                                     <br />
//                                     cho iPhone
//                                 </p>
//                             </div>
//                             <div className="h-96 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_heart_rate_notifications_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">
//                                     Ứng dụng
//                                     <br />
//                                     Ôxi Trong Máu
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">Ứng dụng ECG</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Thông báo
//                                     <br />
//                                     nhịp tim cao và thấp
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Thông báo
//                                     <br />
//                                     nhịp không đều
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Thông báo
//                                     <br />
//                                     thể chất tim mạch thấp
//                                 </p>
//                             </div>
//                             <div className="h-48 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_temperature_sensing_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Cảm biến nhiệt độ</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Theo Dõi Chu Kỳ
//                                     <br />
//                                     với các dự đoán
//                                     <br />
//                                     thời gian rụng trứng
//                                     <br />
//                                     qua dữ liệu hồi cứu
//                                 </p>
//                             </div>
//                             <div className="h-64 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_sos_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Cảm biến nhiệt độ</p>
//                                 <p className="font-normal text-sm pb-2">Gọi khẩn cấp quốc tế</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Phát Hiện Ngã và
//                                     <br />
//                                     Phát Hiện Va Chạm
//                                 </p>
//                                 <p className="font-base text-sm">-</p>
//                             </div>
//                             <div className="h-64 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_water_resistant_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Chống nước</p>
//                                 <p className="font-normal text-sm pb-2">Chống nước khi bơi</p>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                             </div>
//                             <div className="h-52 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_cellular_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">GPS</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Có kết nối bằng dữ liệu
//                                     <br />
//                                     di động
//                                 </p>
//                             </div>
//                             <div className="h-52 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_battery_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Lên đến 18 giờ</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Lên đến 36 giờ ở Chế Độ
//                                     <br />
//                                     Nguồn Điện Thấp
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">Sạc nhanh</p>
//                             </div>
//                         </div>

//                         <div className="border-b-1"></div>
//                     </div>

//                     {/* Apple Watch Ultra 2 */}
//                     <div className="container mx-auto w-80">
//                         <div className="product-tile-header">
//                             <a
//                                 href="/"
//                                 className="product-image-link"
//                             >
//                                 <Image
//                                     removeWrapper
//                                     alt="Card background"
//                                     className="z-0 w-full h-full object-cover"
//                                     src="/img/watch/compare_ultra2_large.jpg"
//                                 />
//                             </a>

//                             <h1 className="text-center font-semibold text-2xl py-4">Apple Watch Ultra 2</h1>
//                             <p className="text-center">
//                                 Ngầu và
//                                 <br />
//                                 giàu năng lực nhất.
//                             </p>
//                             <h4 className="font-semibold text-xl text-center py-2">Từ 21.999.000đ</h4>
//                             <a className="text-center py-4 text-blue-600" href="#">
//                                 <span className="buy"> Mua </span>
//                             </a>
//                         </div>

//                         <div className="border-b-1"></div>

//                         <div className="grid grid-rows-10 gap-4">
//                             <div className="h-32 flex flex-col items-center justify-center text-center">
//                                 <h4 className="font-semibold text-xl">
//                                     Vỏ titan
//                                     <br />
//                                     49mm
//                                 </h4>
//                             </div>
//                             <div className="h-32 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_carbon_neutral_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">
//                                     Có sẵn các cách kết hợp
//                                     <br />
//                                     trung hòa carbon
//                                 </p>

//                             </div>
//                             <div className="h-44 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_retina_display_ultra_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-base text-sm">
//                                     Màn hình Retina Luôn Bật
//                                     <br />
//                                     Lên đến 3.000 nit
//                                 </p>
//                             </div>
//                             <div className="h-56 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_s9_sip_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">S9 SiP</p>
//                                 <p className="font-normal text-sm pb-2">Thao tác chạm hai lần</p>
//                                 <p className="font-normal text-sm pb-2">Tìm Chính Xác
//                                     <br />
//                                     cho iPhone
//                                 </p>
//                             </div>
//                             <div className="h-96 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_heart_rate_notifications_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">
//                                     Ứng dụng
//                                     <br />
//                                     Ôxi Trong Máu
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">Ứng dụng ECG</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Thông báo
//                                     <br />
//                                     nhịp tim cao và thấp
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Thông báo
//                                     <br />
//                                     nhịp không đều
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Thông báo
//                                     <br />
//                                     thể chất tim mạch thấp
//                                 </p>
//                             </div>
//                             <div className="h-48 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_temperature_sensing_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Cảm biến nhiệt độ</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Theo Dõi Chu Kỳ
//                                     <br />
//                                     với các dự đoán
//                                     <br />
//                                     thời gian rụng trứng
//                                     <br />
//                                     qua dữ liệu hồi cứu
//                                 </p>
//                             </div>
//                             <div className="h-64 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_sos_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Cảm biến nhiệt độ</p>
//                                 <p className="font-normal text-sm pb-2">Gọi khẩn cấp quốc tế</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Phát Hiện Ngã và
//                                     <br />
//                                     Phát Hiện Va Chạm
//                                 </p>
//                                 <p className="font-base text-sm">Còi Báo</p>
//                             </div>
//                             <div className="h-64 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_water_resistant_100m_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Chống nước</p>
//                                 <p className="font-normal text-sm pb-2">Chống nước khi bơi</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Các môn thể thao
//                                     <br />
//                                     dưới nước tốc độ cao
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Lặn giải trí ở độ sâu
//                                     <br />
//                                     đến 40m
//                                 </p>
//                             </div>
//                             <div className="h-52 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_cellular_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">
//                                     GPS tần số kép
//                                     <br />
//                                     chuẩn xác
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Có kết nối bằng dữ liệu
//                                     <br />
//                                     di động
//                                 </p>
//                             </div>
//                             <div className="h-52 flex flex-col items-center justify-center text-center">
//                                 <img
//                                     className="object-center pb-5"
//                                     src="/img/watch/quicklook_battery_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Lên đến 36 giờ</p>
//                                 <p className="font-normal text-sm pb-2">
//                                     Lên đến 72 giờ ở Chế Độ
//                                     <br />
//                                     Nguồn Điện Thấp
//                                 </p>
//                                 <p className="font-normal text-sm pb-2">Sạc nhanh</p>
//                             </div>
//                         </div>

//                         <div className="border-b-1"></div>
//                     </div>

//                 </div>

//                 <div className=" sm:w-1/12 shrink-0 snap-center">
//                     <div className="shrink-0"></div>
//                 </div>

//             </div>

//             <div className="flex justify-center">
//                 <div className=" pt-12 pb-12">
//                     <a className="text-center text-blue-600 text-xl font-semibold" href="#">
//                         <span className="buy"> Mua Apple Watch </span>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }