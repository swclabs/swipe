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

//                 <div className='grid grid-cols-5'>

//                     {/*Iphone 15 Pro */}
//                     <div className="container mx-auto">
//                         <div className="product-tile-header">
//                             <a
//                                 href="/iphone-15-pro"
//                                 className="product-image-link"
//                             >
//                                 <Image
//                                     removeWrapper
//                                     alt="Card background"
//                                     className="z-0 w-full h-full object-cover"
//                                     src="/img/iphone/iphone_15_pro_large.png"
//                                 />
//                             </a>

//                             {/* <div className="product-tile-swatches">
//                                 <img src="/img/iphone/iphone_15_pro_swatch.png"></img>
//                             </div> */}

//                             <h1 className="text-center font-semibold text-2xl py-4">iPhone 15 Pro</h1>
//                             <p className="text-center"> Một iPhone cực đỉnh. </p>
//                             <h4 className="font-semibold text-xl text-center py-2">Từ 28.999.000đ hoặc 1.033.000đ/th. trong 24 tháng*</h4>
//                             <a className="text-center py-4 text-blue-600" href="/shop/goto/buy_iphone/iphone_15_pro">
//                                 <span className="buy"> Mua </span>
//                             </a>
//                         </div>

//                         <div className="border-b-4"></div>

//                         <div className="grid grid-rows-3 grid-flow-col gap-4">
//                             <div className="h-20 flex flex-col items-center justify-center py-20">
//                                 <img
//                                     className="object-center"
//                                     src="/img/iphone/product_tile_icon_a17_pro_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">A17 Pro chip with 6-core GPU</p>
//                             </div>
//                             <div className="h-20 flex flex-col items-center justify-center py-20">
//                                 <img
//                                     className="object-center"
//                                     src="/img/iphone/product_tile_icon_iphone_15_pro_camera_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Hệ thống camera chuyên nghiệp</p>
//                                 <p className="font-normal text-sm pb-2">Camera Chính 48MP tiên tiến nhất của chúng tôi</p>
//                                 <p className="font-normal text-sm pb-2">Camera Telephoto 3x hoặc 5x</p>
//                                 <p className="font-normal text-sm pb-2">Camera Ultra Wide</p>
//                             </div>
//                             <div className="h-20 flex flex-col items-center justify-center py-20">
//                                 <img
//                                     className="object-center"
//                                     src="/img/iphone/product_tile_icon_battery_100_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Up to 29 hours video playback</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Iphone 15 */}
//                     <div className="container mx-auto">

//                         <div className="product-tile-header">
//                             <a
//                                 href="/iphone-15-pro"
//                                 className="product-image-link"
//                             >
//                                 <Image
//                                     removeWrapper
//                                     alt="Card background"
//                                     className="z-0 w-full h-full object-cover"
//                                     src="/img/iphone/iphone_15_large.png"
//                                 />
//                             </a>

//                             {/* <div className="product-tile-swatches">
//                                 <img src="/img/iphone/iphone_15_swatch.png"></img>
//                             </div> */}

//                             <h1 className="text-center font-semibold text-2xl py-4">iPhone 15</h1>
//                             <p className="text-center"> Siêu mạnh mẽ trên mọi mặt. </p>
//                             <h4 className="font-semibold text-xl text-center py-2">Từ 22.999.000đ hoặc 819.000đ/th. trong 24 tháng*</h4>
//                             <a className="text-center py-4 text-blue-600" href="/shop/goto/buy_iphone/iphone_15">
//                                 <span className="buy">Mua</span>
//                             </a>
//                         </div>

//                         <div className="border-b-4"></div>


//                         <div className="grid grid-rows-3 grid-flow-col gap-4">
//                             <div className="h-20 flex flex-col items-center justify-center py-20">

//                                 <img
//                                     className="object-center"
//                                     src="/img/iphone/product_tile_icon_a16_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Chip A16 Bionic với GPU 5 lõi</p>
//                             </div>
//                             <div className="h-20 flex flex-col items-center justify-center py-20">
//                                 <img
//                                     className="object-center"
//                                     src="/img/iphone/product_tile_icon_iphone_15_camera_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Hệ thống camera kép tiên tiến</p>
//                                 <p className="font-normal text-sm pb-2">Camera Chính 48MP</p>
//                                 <p className="font-normal text-sm pb-2">Telephoto 2x</p>
//                                 <p className="font-normal text-sm pb-2">UCamera Ultra Wide</p>
//                             </div>
//                             <div className="h-20 flex flex-col items-center justify-center py-20">
//                                 <img
//                                     className="object-center"
//                                     src="/img/iphone/product_tile_icon_battery_100_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Thời gian xem video lên đến 26 giờ</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Iphone 14 */}
//                     <div className="container mx-auto">

//                         <div className="product-tile-header">
//                             <a
//                                 href="/iphone-15-pro"
//                                 className="product-image-link"
//                             >
//                                 <Image
//                                     removeWrapper
//                                     alt="Card background"
//                                     className="z-0 w-full h-full object-cover"
//                                     src="/img/iphone/iphone_14_large.png"
//                                 />
//                             </a>

//                             {/* <div className="product-tile-swatches">
//                                 <img src="/img/iphone/iphone_14_swatch.png"></img>
//                             </div> */}

//                             <h1 className="text-center font-semibold text-2xl py-4">iPhone 14</h1>
//                             <p className="text-center"> Luôn tuyệt vời như thế. </p>
//                             <h4 className="font-semibold text-xl text-center py-2">Từ 19.999.000đ hoặc 712.000đ/th. trong 24 tháng*</h4>
//                             <a className="text-center py-4 text-blue-600" href="/shop/goto/buy_iphone/iphone_14">
//                                 <span className="buy">Mua</span>
//                             </a>
//                         </div>

//                         <div className="border-b-4"></div>


//                         <div className="grid grid-rows-3 grid-flow-col gap-4">
//                             <div className="h-20 flex flex-col items-center justify-center py-20">
//                                 <img
//                                     className="object-center"
//                                     src="/img/iphone/product_tile_icon_a15_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Chip A15 Bionic với GPU 5 lõi</p>
//                             </div>
//                             <div className="h-20 flex flex-col items-center justify-center py-20">
//                                 <img
//                                     className="object-center"
//                                     src="/img/iphone/product_tile_icon_iphone_15_camera_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Hệ thống camera kép</p>
//                                 <p className="font-normal text-sm pb-2">Camera Chính 12MP</p>
//                                 <p className="font-normal text-sm pb-2">-</p>
//                                 <p className="font-normal text-sm pb-2">Camera Ultra Wide</p>
//                             </div>
//                             <div className="h-20 flex flex-col items-center justify-center py-20">
//                                 <img
//                                     className="object-center"
//                                     src="/img/iphone/product_tile_icon_battery_100_large.png"
//                                 >
//                                 </img>
//                                 <p className="font-normal text-sm pb-2">Thời gian xem video lên đến 26 giờ</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Iphone 13 */}
//                     <div className="container mx-auto">

//                         <div className="product-tile-header">
//                             <a
//                                 href="/iphone-15-pro"
//                                 className="product-image-link"
//                             >
//                                 <Image
//                                     removeWrapper
//                                     alt="Card background"
//                                     className="z-0 w-full h-full object-cover"
//                                     src="/img/iphone/iphone_13_large.png"
//                                 />
//                             </a>

//                             {/* <div className="product-tile-swatches">
//                                 <img src="/img/iphone/iphone_15_swatch.png"></img>
//                             </div> */}

//                             <h1 className="text-center font-semibold text-2xl py-4">iPhone 13</h1>
//                             <p className="text-center"> Hội tụ mọi điều tuyệt diệu. </p>
//                             <h4 className="font-semibold text-xl text-center py-2">Từ 17.299.000đ hoặc 616.000đ/th. trong 24 tháng*</h4>
//                             <a className="text-center py-4 text-blue-600" href="/shop/goto/buy_iphone/iphone_13">
//                                 <span className="buy">Mua</span>
//                             </a>
//                         </div>
//                         <div className="border-b-4"></div>
//                         <div className="product-tile-plus product-tile-padding">
//                             <div className="grid grid-rows-3 grid-flow-col gap-4">
//                                 <div className="h-20 flex flex-col items-center justify-center py-20">
//                                     <img
//                                         className="object-center"
//                                         src="/img/iphone/product_tile_icon_a15_large.png"
//                                     >
//                                     </img>
//                                     <p className="font-normal text-sm pb-2">Chip A15 Bionic với GPU 4 lõi</p>
//                                 </div>
//                                 <div className="h-20 flex flex-col items-center justify-center py-20">
//                                     <img
//                                         className="object-center"
//                                         src="/img/iphone/product_tile_icon_iphone_15_camera_large.png"
//                                     >
//                                     </img>
//                                     <p className="font-normal text-sm pb-2">Hệ thống camera kép</p>
//                                     <p className="font-normal text-sm pb-2">Camera Chính 12MP</p>
//                                     <p className="font-normal text-sm pb-2">—</p>
//                                     <p className="font-normal text-sm pb-2">Camera Ultra Wide</p>
//                                 </div>
//                                 <div className="h-20 flex flex-col items-center justify-center py-20">
//                                     <img
//                                         className="object-center"
//                                         src="/img/iphone/product_tile_icon_battery_100_large.png"
//                                     >
//                                     </img>
//                                     <p className="font-normal text-sm pb-2">Thời gian xem video lên đến 19 giờ</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Iphone SE */}
//                     <div className="container mx-auto">

//                         <div className="product-tile-header">
//                             <a
//                                 href="/iphone-15-pro"
//                                 className="product-image-link"
//                             >
//                                 <Image
//                                     removeWrapper
//                                     alt="Card background"
//                                     className="z-0 w-full h-full object-cover"
//                                     src="/img/iphone/iphone_se_large.png"
//                                 />
//                             </a>

//                             {/* <div className="product-tile-swatches">
//                                 <img src="/img/iphone/iphone_se_swatch.png"></img>
//                             </div> */}

//                             <h1 className="text-center font-semibold text-2xl py-4">iPhone SE</h1>
//                             <p className="text-center"> Thực sự mạnh mẽ. Thực sự giá trị. </p>
//                             <h4 className="font-semibold text-xl text-center py-2">Từ 11.999.000đ hoặc 427.000đ/th. trong 24 tháng*</h4>
//                             <a className="text-center py-4 text-blue-600" href="/shop/goto/buy_iphone/iphone_se">
//                                 <span className="buy">Mua</span>
//                             </a>
//                         </div>

//                         <div className="border-b-4"></div>

//                         <div className="product-tile-plus product-tile-padding">
//                             <div className="grid grid-rows-3 grid-flow-col gap-4">
//                                 <div className="h-20 flex flex-col items-center justify-center py-20">
//                                     <img
//                                         className="object-center"
//                                         src="/img/iphone/product_tile_icon_a16_large.png"
//                                     >
//                                     </img>
//                                     <p className="font-normal text-sm pb-2">Chip A15 Bionic với GPU 4 lõi</p>
//                                 </div>
//                                 <div className="h-20 flex flex-col items-center justify-center py-20">
//                                     <img
//                                         className="object-center"
//                                         src="/img/iphone/product_tile_icon_iphone_se_camera_large.png"
//                                     >
//                                     </img>
//                                     <p className="font-normal text-sm pb-2">Hệ thống camera đơn</p>
//                                     <p className="font-normal text-sm pb-2">Camera Chính 12MP</p>
//                                     <p className="font-normal text-sm pb-2">-</p>
//                                     <p className="font-normal text-sm pb-2">-</p>
//                                 </div>
//                                 <div className="h-20 flex flex-col items-center justify-center py-20">
//                                     <img
//                                         className="object-center"
//                                         src="/img/iphone/product_tile_icon_battery_100_large.png"
//                                     >
//                                     </img>
//                                     <p className="font-normal text-sm pb-2">Thời gian xem video lên đến 15 giờ</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className=" sm:w-1/12 shrink-0 snap-center">
//                     <div className="shrink-0"></div>
//                 </div>

//             </div>
//         </div>
//     )
// }