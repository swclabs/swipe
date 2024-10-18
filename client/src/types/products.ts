export interface Specification {
    inventory_id: number;
    price: string;
    ssd: string;
    ram: string;
    desc: string;
    connection: string;
}

export interface ProductDetail {
    name: string;
    screen: string;
    image: string[]
    color: {
        name: string;
        img: string;
        product: string[];
        specs: Specification[];
    }[];
}

export interface SpecsType {
    screen: string;
    display: string;
    SSD: number[];
    RAM: number[];
}

export interface ProductType {
    id: number;
    category: string;
    desc: string;
    image: string;
    name: string;
    price: string;
    specs: SpecsType;

}

export interface ProductShopCard {
    name: string;
    desc: string;
    price: string;
    image: string;
}

export interface AccessoryShopCard {
    title: string;
    price: string;
    img: string;
    tag: string;
    color: {
        img: string;
    }[];
}

export interface Cart {
    name: string;
    cart_id: number;
    inventory_id: number;
    product_id: number;
    quantity: number;
    color: string;
    price: string;
    currency_code: string;
    image: string;
    specs: Specification;
    category: string;
}

export interface Carts {
    user_id: number;
    products: Cart[];
}