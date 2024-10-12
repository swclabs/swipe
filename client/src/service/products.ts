import APIEndpoint from "@/providers/endpoint";
import { Newsletters, ProductDetail, ProductType } from "@/types/products";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";


export class ProductService {
    static async getNewsletters(): Promise<AxiosResponse<Newsletters>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<Newsletters> = await axiosInstance.get(
            APIEndpoint.PRODUCTS.GET_NEWSLETTERS
        );
        return response;
    }

    static async searchProductDetails(key: string): Promise<AxiosResponse<ProductDetail[]>> {
        const axiosInstance = createAxiosInstance();
        const resp: AxiosResponse<ProductDetail[]> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.SEARCH_DETAIL}?key=${key}`
        );
        return resp;
    }

    static async getProductByType(type: string): Promise<AxiosResponse<ProductType[]>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<ProductType[]> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.PRODUCTS}/${type}`
        );
        return response;
    }
}