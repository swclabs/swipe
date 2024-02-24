"use client";
import React, { useEffect, useState } from "react"

export default function Banner() {
    const [backgroundColor, setBackgroundColor] = useState('bg-blue-600');
    const [height, setHeight] = useState('h-0');
    const [text, setText] = useState('text-white')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setBackgroundColor('bg-white');
            setText('text-black')
        }, 700);
        return () => clearTimeout(timeoutId);

    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setHeight('h-[70px] ');
        }, 400);
        return () => clearTimeout(timeoutId);

    }, []);

    return (
        <div className={`${height} ${text} relative transition duration-1000 ease-in-out ${backgroundColor}`}>
            <div className="flex justify-center h-full">
                <p className="text-xs pl-6 pr-6 flex items-center">
                    Nhận 4.500.000 - 25.200.000đ dưới hình thức điểm tín dụng để mua iPhone 15 hoặc iPhone 15 Pro khi bạn trao đổi iPhone 11 trở lên.
                </p>
            </div>
        </div>
    )
}