import { ProductConnectionDetail, ProductDetail } from "@/types/products";

const watchDetail: ProductConnectionDetail[] = [
    {
        name: "Apple Watch SE",
        screen: "40 mm",
        img: [
            "/shop/watch/watch-se.jpg",
            "/shop/watch/watch-se-2.jpg",
            "/shop/watch/watch-se-3.jpg",

        ],
        color: [
            {
                name: "Pink",
                img: "/shop/watch/pink.jpg",
                product: [
                    "/shop/watch/watch-se.jpg",
                    "/shop/watch/watch-se-2.jpg",
                    "/shop/watch/watch-se-3.jpg",
                ],
                specs: [
                    {
                        name: "GPS",
                        desc: "Gọi điện và gửi tin nhắn với iPhone gần bạn",
                        price: "Từ 6.399.000đ"
                    }, {
                        name: "GPS + Cellular",
                        desc: "Gọi điện và gửi tin nhắn chỉ với Apple Watch.",
                        price: "Từ 7.699.000đ"
                    }
                ]
            },
        ]
    },
    {
        name: "Apple Watch SE",
        screen: "44 mm",
        img: [
            "/shop/watch/watch-se.jpg",
            "/shop/watch/watch-se-2.jpg",
            "/shop/watch/watch-se-3.jpg",

        ],
        color: [
            {
                name: "Pink",
                img: "/shop/watch/pink.jpg",
                product: [
                    "/shop/watch/watch-se.jpg",
                    "/shop/watch/watch-se-2.jpg",
                    "/shop/watch/watch-se-3.jpg",
                ],
                specs: [
                    {
                        name: "GPS",
                        desc: "Gọi điện và gửi tin nhắn với iPhone gần bạn",
                        price: "Từ 6.399.000đ"
                    }, {
                        name: "GPS + Cellular",
                        desc: "Gọi điện và gửi tin nhắn chỉ với Apple Watch.",
                        price: "Từ 7.699.000đ"
                    }
                ]
            },
        ]
    },
]

export default watchDetail
