export interface CouponsResp {
    id : number;
    code: string;
    discount: number;
    expired_at: string;
    description: string;
    status : string;
}

export interface CouponsReq {
    description: string;
    discount: number;
    max_day: number;
    max_use: number;
    status: string;
}