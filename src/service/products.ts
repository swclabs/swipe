import APIEndpoint from "@/providers/endpoint";
import { Newsletters } from "@/types/products";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";


export class Products {
    static async getNewsletters(): Promise<AxiosResponse<Newsletters>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<Newsletters> = await axiosInstance.get(
            APIEndpoint.PRODUCTS.GET_NEWSLETTERS
        );
        return response;
    }
}