'use client';
import { Image } from "@nextui-org/react";
import { useState } from "react";

export default function Product() {
  const [activeTab, setActiveTab] = useState('products');

  const objectMapping = [
    {
      img: "/img/accessory/icon-category-new-arrivals.png",
      title: "Sản Phẩm Mới"
    },
    {
      img: "/img/accessory/icon-category-cases-protection.png",
      title: "Ốp Lưng & Vỏ Bảo Vệ"
    },
    {
      img: "/img/accessory/icon-category-charging-essentials.png",
      title: "Thiết Bị Sạc Thiết Yếu"
    },
    {
      img: "/img/accessory/icon-category-magsafe.png",
      title: "MagSafe"
    },
    {
      img: "/img/accessory/icon-category-audio-music.png",
      title: "Tai Nghe & Loa"
    },
    {
      img: "/img/accessory/icon-category-watch-bands.png",
      title: "Dây Đeo Apple Watch"
    },
    {
      img: "/img/accessory/icon-category-house-wifi.png",
      title: "Văn Phòng Tại Gia"
    },
    {
      img: "/img/accessory/icon-category-mice-keyboards.png",
      title: "Chuột & Bàn Phím"
    },
    {
      img: "/img/accessory/icon-category-airtag.png",
      title: "AirTag và Các Phụ Kiện  "
    },
    {
      img: "/img/accessory/icon-category-health-fitness.png",
      title: "Sức khỏe & Hoạt động tập luyện"
    },
    {
      img: "/img/accessory/icon-category-gaming.png",
      title: "Chơi Game"
    },
    {
      img: "/img/accessory/icon-category-creative-tools.png",
      title: "Công Cụ Sáng Tạo"
    },
    {
      img: "/img/accessory/icon-category-storage.png",
      title: "Dung lượng lưu trữ"
    },
  ]

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleExpandButton = () => {
    // console.log('Expand button clicked');
    setIsCollapsed(!isCollapsed);
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex gap-x-4 w-full justify-center items-center py-4">
        <button onClick={() => handleTabClick('products')}>Duyệt theo sản phẩm</button>
        <button onClick={() => handleTabClick('types')}>Xem Theo Thể Loại</button>
      </div>

      {
        activeTab === 'products' &&
        <div className="flex md:flex-row flex-col border-y-1 justify-between items-center py-8 w-3/5">
          <div className="flex md:flex-col flex-row md:justify-center items-center justify-start">
            <div className="flex items-center justify-center md:border rounded-full w-[143px] h-[143px] mb-4">
              <Image
                alt=""
                src="/img/accessory/icon-product-mac.png"
                className="w-[75px] h-[75px]"
              ></Image>
            </div>
            <div className="w-20 md:h-12 text-start">
              <p className="text-center">Mac</p>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:justify-center items-center justify-start">
            <div className="flex items-center justify-center md:border rounded-full w-[143px] h-[143px] mb-4">
              <Image
                alt="Mac"
                src="/img/accessory/icon-product-ipad.png"
                className="w-[75px] h-[75px]"
              ></Image>
            </div>
            {/* <p>TV & Nhà</p> */}
            <div className="w-20 md:h-12 text-start">
              <p className="text-center">iPad</p>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:justify-center items-center justify-start">
            <div className="flex items-center justify-center md:border rounded-full w-[143px] h-[143px] mb-4">
              <Image
                alt="Mac"
                src="/img/accessory/icon-product-iphone.png"
                className="w-[75px] h-[75px]"
              ></Image>
            </div>
            {/* <p>TV & Nhà</p> */}
            <div className="w-20 md:h-12 text-start">
              <p className="text-center">iPhone</p>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:justify-center items-center justify-start">
            <div className="flex items-center justify-center md:border rounded-full w-[143px] h-[143px] mb-4">
              <Image
                alt="Mac"
                src="/img/accessory/icon-product-watch.png"
                className="w-[75px] h-[75px]"
              ></Image>
            </div>
            {/* <p>TV & Nhà</p> */}
            <div className="w-20 md:h-12 text-start">
              <p className="text-center">Watch</p>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:justify-center items-center justify-start">
            <div className="flex items-center justify-center md:border rounded-full w-[143px] h-[143px] mb-4">
              <Image
                alt="Mac"
                src="/img/accessory/icon-product-tv.png"
                className="w-[75px] h-[75px]"
              ></Image>
            </div>
            {/* <p>TV & Nhà</p> */}
            <div className="w-20 md:h-12 text-start">
              <p className="text-center">TV & Nhà</p>
            </div>
          </div>
        </div>
      }
      {
        activeTab === 'types' &&
        <div className="flex flex-wrap justify-center items-center w-3/5 gap-8 border-y-1 py-8 relative">
          {objectMapping.filter((item, index) => isCollapsed ? index < 13 : index < 5).map((item, index) => (
            <div key={index} className="flex flex-row md:flex-col justify-center items-center w-[180px]">
              <div className="flex flex-row items-center md:justify-center md:border rounded-full w-[143px] h-[143px] mb-4 py-4">
                <Image
                  src={item.img}
                  className="w-[75px] h-[75px]"
                ></Image>
              </div>
              <div className="w-20 md:h-12 text-start">
                <p className="text-center">{item.title}</p>
              </div>
            </div>
          ))}
          <button className="expand-button w-32 bg-white text-blue-500 z-1 absolute bottom-0" onClick={handleExpandButton}>Xem tất cả</button>
        </div>
      }

    </div>
  )
}