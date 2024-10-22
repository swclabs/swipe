import { Specification } from "./products";

export interface CardContent {
    title: string;
    subtitle: string;
    desc: string;
    img: string;
    textcolor: string;
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

export interface AddToCart {
    inventory_id: number;
    quantity: number;
}