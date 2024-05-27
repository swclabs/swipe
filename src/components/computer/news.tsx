'use client';
import { Card, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import productNews from "@/faker/product-news";
import ListCard from "../common/card-section";

export default function News() {
  return (
    <>
      <div className=" w-full">
        <div className="flex justify-center">
          <div className=" sm:w-4/5 sm:py-12 py-5">
            <span className=" text-xl sm:text-4xl font-semibold">Tìm hiểu về Mac</span>
          </div>
        </div>
      </div>
      <ListCard data={productNews} />
    </>
  )
}

export function SecondNews() {
  return (
    <>
      <div className=" w-full">
        <div className="flex justify-center">
          <div className=" sm:w-4/5 sm:py-12 py-5">
            <span className=" text-xl sm:text-4xl font-semibold">Ways to save. Find what works for you.</span>
          </div>
        </div>
      </div >
      <ListCard data={productNews} />
    </>
  )
}



