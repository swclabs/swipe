import createAxiosInstance from "@/lib/axios";
import APIEndpoint from "@/providers/endpoint";
import { OK } from "@/types/common";
import { CouponsReq, CouponsResp } from "@/types/coupons";
import { AxiosResponse } from "axios";


export class CouponsService {
    static async getCoupons(): Promise<AxiosResponse<CouponsResp[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<CouponsResp[]> = await axiosInstance.get(
            `${APIEndpoint.PURCHASE.COUPONS}`
        );
        return response;
    }

    static async createCoupons(data: CouponsReq): Promise<AxiosResponse<OK>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<OK> = await axiosInstance.post(
            `${APIEndpoint.PURCHASE.COUPONS}`,
            data
        );
        return response;
    }

    static async deleteCoupons(code: string): Promise<AxiosResponse<OK>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<OK> = await axiosInstance.delete(
            `${APIEndpoint.PURCHASE.COUPONS}?code=${code}`
        );
        return response;
    }
}