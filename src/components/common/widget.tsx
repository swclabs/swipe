'use client';
import ListCard from "./card-section";
import { Widgets } from '@/types';

export default function Widget({ data }: { data: Widgets }) {
  return (
    <>
      <div className=" w-full">
        <div className="flex justify-center">
          <div className=" sm:w-4/5 sm:py-12 py-5">
            <span className=" text-xl sm:text-4xl font-semibold">{data.headline}</span>
          </div>
        </div>
      </div>
      <ListCard data={data.body} />
    </>
  )
}



