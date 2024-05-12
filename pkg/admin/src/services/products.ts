import APIEndpoint from "@/data-providers/endpoint";
import { IBaseResponse, ICategories, IProducts, ISuppliers } from "@/types/products";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";


export class Products {
    static async NewProduct(data: IProducts): Promise<AxiosResponse<IBaseResponse>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<IBaseResponse> = await axiosInstance.post(
            APIEndpoint.PRODUCTS.POST_PRODUCTS,
            data
        );
        return response;
    }

    static async GetSuppliers(): Promise<AxiosResponse<ISuppliers>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<ISuppliers> = await axiosInstance.get(
            `APIEndpoint.PRODUCTS.GET_SUPPLIERS?limit=${10}`,
        );
        return response;
    }

    static async GetCategory(): Promise<AxiosResponse<ICategories>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<ICategories> = await axiosInstance.get(
            `APIEndpoint.PRODUCTS.GET_SUPPLIERS?limit=${10}`,
        );
        return response;
    }
}