import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-full flex justify-center">
      <div className=" max-h-max w-4/5">
        <div className="flex py-16 gap-5 max-h-max flex-col-reverse md:flex-row justify-between">
          <div className=" max-w-max">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
            <p className="text-xs font-semibold pt-3">Swipe@2024</p>
          </div>
          <div className=" flex gap-5 md:flex-row flex-col w-full">
            <div className=" sm:w-1/12 shrink-0 snap-center">
              <div className="shrink-0"></div>
            </div>
            <div className=" sm:w-1/12 shrink-0 snap-center">
              <div className="shrink-0"></div>
            </div>
            <div className=" sm:w-1/12 shrink-0 snap-center">
              <div className="shrink-0"></div>
            </div>
            <div className="container">
              <p className=" text-xs font-semibold">Shop</p>
              <ul className=" pt-3 font-normal text-xs">
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>Phụ kiện</li>
              </ul>
            </div>

            <div className="container">
              <p className=" text-xs font-semibold">Help</p>
              <ul className=" pt-3 font-normal text-xs">
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>Phụ kiện</li>
              </ul>
            </div>

            <div className="container">
              <p className=" text-xs font-semibold">About Swipe</p>
              <ul className=" pt-3 font-normal text-xs">
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>Phụ kiện</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}