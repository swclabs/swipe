import APIEndpoint from "@/api/endpoint";
import { IBaseResponse, IProducts } from "@/interface/products";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";


export class Products {
    static async newProduct(data: IProducts): Promise<AxiosResponse<IBaseResponse>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<IBaseResponse> = await axiosInstance.post(
            APIEndpoint.PRODUCTS.POST_PRODUCTS,
            data
        );
        return response;
    }
}