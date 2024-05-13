export interface Products {
    price: string;
    description: string;
    name: string;
    supplier_id: string;
    category_id: string;
    status: string;
    RAM: number[];
    SSD: number[];
    display: string;
    screen: string;
}

export interface BaseResponse {
    msg: string;
}

export interface NewProductRes extends BaseResponse {
    id: string;
}

export interface Supplier {
    id: string;
    email: string;
    name: string;
    phone_number: string;
}

export interface Suppliers {
    data: Supplier[];
}

export interface Category {
    id: string;
    description: string;
    name: string;
}

export interface Categories {
    data: Category[];
}