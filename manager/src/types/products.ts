export interface Product {
    price: string;
    description: string;
    name: string;
    supplier_id: number;
    category_id: number;
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
    id: number;
    email: string;
    name: string;
}

export interface SupplierReq {
    email: string,
    name: string,
    city: string,
    district: string,
    street: string,
    ward: string,
}

export interface Suppliers {
    body: Supplier[];
}

export interface Category {
    id: number;
    description: string;
    name: string;
}

export interface CategoryReq {
    name: string;
    description: string;
}

export interface Categories {
    body: Category[];
}


export interface ProductResp {
    id: number;
    image: string[];
    price: string;
    description: string;
    name: string;
    status: string;
    created: string;
    category: string;
}
export interface ProductDTO {
    body: ProductResp[];
}