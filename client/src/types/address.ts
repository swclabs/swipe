
export interface DTO<T> {
    code: string;
    message: string;
    data: T[];
}

export interface Province {
    ProvinceID: number;
    ProvinceName: string;
    Code: string;
}

export interface District {
    Code: string;
    DistrictID: number;
    DistrictName: string;
    ProvinceID: number;
    SupportType: number;
    Type: number;
}

export interface Ward {
    DistrictID: number;
    WardCode: string;
    WardName: string;
}