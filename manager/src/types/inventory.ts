interface Specs {
    color: string;
    ram: string;
    ssd: string;
    color_image: string;
    image: string[];
}

export interface StockItem {
    id: number;
    product_name: string;
    product_id: string;
    status: string;
    price: string;
    available: string;
    currency_code: string;
    specs: Specs;
    image: string[];
}

export interface BaseResponse {
    msg: string;
}

interface Header {
    all: number;
    active: number;
    draft: number;
    archive: number;
}

export interface InventoryStockSchema {
    page: number;
    limit: number;
    header: Header;
    stock: StockItem[];
}

