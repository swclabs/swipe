interface User {
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
}

interface Delivery {
    status: string;
    method: string;
    note: string;
    sent_date: string;
}

interface Address {
    city: string;
    ward: string;
    district: string;
    street: string;
}

interface Item {
    category_id: number;
    quantity: number;
    currency_code: string;
    color: string;
    image: string;
    name: string;
    total_amount: string;
    item_specs: string; // JSON string; consider parsing it into an object if needed
}

interface Product {
    code: string;
    quantity: number;
}

export interface OrderDTO {
    address: Address;
    customer: User;
    delivery: Delivery;
    product: Product[];
}

export interface Order {
    uuid: string;
    time: string;
    user: User;
    delivery: Delivery;
    address: Address;
    items: Item[];
}