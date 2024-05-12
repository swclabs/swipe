export interface IProducts {
    price: string;
    description: string;
    name: string;
    available: string;
    supplierID: string;
    categoryID: string;
}

export interface IBaseResponse {
    msg: string;
}

export interface ISupplier {
    id: string;
    email: string;
    name: string;
    phone_number: string;
}

export interface ISuppliers {
    data: ISupplier[];
}

export interface ICategory {
    id: string;
    description: string;
    name: string;
}

export interface ICategories {
    data: ICategory[];
}