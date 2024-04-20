import APIEndpoint from "@/api/endpoint";
import { INewsletters } from "@/interface/products";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";


export class Products {
    static async getNewsletters(): Promise<AxiosResponse<INewsletters>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<INewsletters> = await axiosInstance.get(
            APIEndpoint.PRODUCTS.GET_NEWSLETTERS
        );
        return response;
    }
}