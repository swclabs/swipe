import APIEndpoint from "@/api/api-endpoint";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";


export class AccountManagement {
    static async getMe(): Promise<AxiosResponse<any>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<any> = await axiosInstance.get(
            APIEndpoint.ACCOUNT_MANAGEMENT.GETME
        );
        return response;
    }
}