export interface Province {
    id: string;
    name: string;
}

export interface District {
    id: string;
    name: string;
    province_id: string;
}

export interface Ward {
    district_id: string;
    name: string;
    id: string;
}