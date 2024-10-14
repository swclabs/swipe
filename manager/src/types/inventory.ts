interface Specs {
    ram: string;
    ssd: string;
    desc: string;
    connection: string;
}

export interface StockItem {
    product_name: string;
    product_id: string;
    status: string;
    price: string;
    available: string;
    currency_code: string;
    image: string[];
    color: string;
    color_img: string;
    specs: Specs;
}

export interface BaseResponse {
    msg: string;
}

export interface NewInventoryRes extends BaseResponse {
    id: string;
}

interface Header {
    all: number;
    active: number;
    draft: number;
    archive: number;
}

export interface StockItemBody {
    id: number;
    product_name: string;
    product_id: number;
    status: string;
    price: string;
    available: string;
    currency_code: string;
    image: string[];
    color: string;
    color_img: string;
    specs: Specs;
}

export interface InventoryStockSchema {
    page: number;
    limit: number;
    header: Header;
    stock: StockItemBody[];
}

