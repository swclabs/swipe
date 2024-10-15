import { ProductType } from "@/types/products";

const iphone: ProductType[] = [
    {
        id: 1,
        category: "phone",
        name: "iPhone 15 Pro",
        price: "Từ 28.999.000đ hoặc 1.181.000đ/th. trong 24 tháng*",
        desc: "Một iPhone cực đỉnh.",
        image: "/img/iphone/iphone_15_pro_large.png",
        specs: {
            screen: "6.71",
            display: "Super Retina XDR",
            SSD: [128, 256, 512],
            RAM: [
                4,
                8
            ],
        },
    },
    {
        id: 2,
        category: "phone",
        name: "iPhone 15",
        price: "Từ 22.999.000đ hoặc 936.000đ/th. trong 24 tháng*",
        desc: "Siêu mạnh mẽ trên mọi mặt.",
        image: "/img/iphone/iphone_15_large.png",
        specs: {
            screen: "6.71",
            display: "Super Retina XDR",
            SSD: [128, 256, 512],
            RAM: [
                4,
                8
            ],
        },
    },
    {
        id: 3,
        category: "phone",
        name: "iPhone 14",
        price: "Từ 19.999.000đ hoặc 814.000đ/th. trong 24 tháng*",
        desc: "Luôn tuyệt vời như thế.",
        image: "/img/iphone/iphone_14_large.png",
        specs: {
            screen: "6.71",
            display: "Super Retina XDR",
            SSD: [128, 256, 512],
            RAM: [
                4,
                8
            ],
        },
    },
    {
        id: 4,
        category: "phone",
        name: "iPhone 13",
        price: "Từ 17.299.000đ hoặc 704.000đ/th. trong 24 tháng*",
        desc: "Hội tụ mọi điều tuyệt diệu.",
        image: "/img/iphone/iphone_13_large.png",
        specs: {
            screen: "6.71",
            display: "Super Retina XDR",
            SSD: [128, 256, 512],
            RAM: [
                4,
                8
            ],
        },
    },
    {
        id: 5,
        category: "phone",
        name: "iPhone SE",
        price: "Từ 11.999.000đ hoặc 489.000đ/th. trong 24 tháng*",
        desc: "Thực sự mạnh mẽ. Thực sự giá trị.",
        image: "/img/iphone/iphone_se_large.png",
        specs: {
            screen: "6.71",
            display: "Super Retina XDR",
            SSD: [128, 256, 512],
            RAM: [
                4,
                8
            ],
        },
    },
]

export default iphone;