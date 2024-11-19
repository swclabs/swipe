import APIEndpoint from "@/providers/endpoint";
import { BaseResponse, Categories, CategoryReq, NewProductRes, Product, ProductDTO, ProductResp, Supplier, SupplierReq, Suppliers } from "@/types/products";
import createAxiosInstance from "@/lib/axios";
import { AxiosResponse } from "axios";


export class ProductService {
    static async NewProduct(data: Product): Promise<AxiosResponse<NewProductRes>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<NewProductRes> = await axiosInstance.post(
            APIEndpoint.PRODUCTS.POST_PRODUCTS,
            data
        );
        return response;
    }

    static async GetProduct(limit: number): Promise<AxiosResponse<ProductDTO>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<ProductDTO> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.GET_PRODUCTS}?limit=${limit}`
        );
        return response;
    }

    static async DeleteProduct(id: number): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.delete(
            `${APIEndpoint.PRODUCTS.GET_PRODUCTS}?pid=${id}`
        );
        return response;
    }

    static async UpdateProduct(data: ProductResp): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.put(
            `${APIEndpoint.PRODUCTS.GET_PRODUCTS}`, 
            data
        );
        return response;
    }

    static async NewProductImage(files: File[], id: string): Promise<AxiosResponse<BaseResponse>> {
        const form = new FormData();
        files.map((value) => form.append("img", value))
        const axiosInstance = await createAxiosInstance();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const response: AxiosResponse<BaseResponse> = await axiosInstance.post(
            `${APIEndpoint.PRODUCTS.POST_PRODUCTS_IMG}?id=${id}`,
            form,
            config
        );
        return response;
    }

    static async GetSuppliers(limit: number): Promise<AxiosResponse<Suppliers>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Suppliers> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.GET_SUPPLIERS}?limit=${limit}`,
        );
        return response;
    }

    static async PostSuppliers(supplier: SupplierReq): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.post(
            `${APIEndpoint.PRODUCTS.POST_SUPPLIERS}`,
            supplier,
        );
        return response;
    }

    static async GetCategory(limit: number): Promise<AxiosResponse<Categories>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Categories> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.GET_CATEGORIES}?limit=${limit}`,
        );
        return response;
    }

    static async PostCategory(category: CategoryReq): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.post(
            `${APIEndpoint.PRODUCTS.POST_CATEGORIES}`,
            category
        );
        return response;
    }
}