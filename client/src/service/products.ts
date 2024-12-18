import APIEndpoint from "@/providers/endpoint";
import { ProductDetail, ProductItem, Products, ProductType } from "@/types/products";
import createAxiosInstance from "@/lib/axios";
import { AxiosResponse } from "axios";
import { SearchProduct } from "@/types/search";


export class ProductService {
    static async search(key: string): Promise<AxiosResponse<SearchProduct[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<SearchProduct[]> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.SEARCH}?keyword=${key}`
        );
        return response;
    }

    static async getProductDetails(id: number): Promise<AxiosResponse<ProductDetail>> {
        const axiosInstance = await createAxiosInstance();
        const resp: AxiosResponse<ProductDetail> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.PRODUCTS}/details?id=${id}`
        );
        return resp;
    }

    static async getProductByType(type: string): Promise<AxiosResponse<ProductType[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<ProductType[]> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.PRODUCTS}/${type}`
        );
        return response;
    }

    static async getListProduct(): Promise<AxiosResponse<Products>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Products> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.PRODUCTS}?limit=100`
        );
        return response;
    }
}