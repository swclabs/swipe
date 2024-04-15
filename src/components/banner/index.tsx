import { motion } from "framer-motion";
import React, { useEffect, useState } from "react"

export default function Banner() {

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }} // Khởi tạo ẩn và nằm ngoài màn hình phía trên
            animate={{ opacity: 1, y: 0 }} // Hiệu ứng xuất hiện từ trên xuống dưới
            transition={{ duration: 1.5 }} // Thời gian hoàn thành hiệu ứng
        >
            <div className={`relative transition duration-1000 ease-in-out h-[70px]`}>
                <div className="flex justify-center h-full">
                    <p className="text-xs pl-6 pr-6 flex items-center">
                        Nhận 4.500.000 - 25.200.000đ dưới hình thức điểm tín dụng để mua iPhone 15 hoặc iPhone 15 Pro khi bạn trao đổi iPhone 11 trở lên.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}