interface Specs {
    connection: string;
    desc: string;
    favorite: boolean;
    inventory_id: number;
    price: string;
    ram: string;
    ssd: string;
}

interface Color {
    color_img: string;
    color_name: string;
    images: string[];
    specs: Specs;
}

interface Favorite {
    color: Color;
    display: string;
    image: string[];
    name: string;
    price: string;
    rating: number;
    screen: string;
    product_id: number;
    category: string;
}
