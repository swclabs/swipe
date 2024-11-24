import APIEndpoint from "@/providers/endpoint";
import { BaseResponse, Categories, CategoryReq, NewProductRes, Product, ProductDTO, ProductResp, Supplier, SupplierReq, Suppliers } from "@/types/products";
import createAxiosInstance from "@/lib/axios";
import { AxiosResponse } from "axios";


export class ProductService {
    static async NewProduct(data: Product): Promise<AxiosResponse<NewProductRes>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<NewProductRes> = await axiosInstance.post(
            APIEndpoint.PRODUCTS.PRODUCTS,
            data
        );
        return response;
    }

    static async GetProductInfo(id: number): Promise<AxiosResponse<ProductResp>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<ProductResp> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.PRODUCTS_INFO}?id=${id}`
        );
        return response;
    }

    static async GetProduct(limit: number): Promise<AxiosResponse<ProductDTO>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<ProductDTO> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.PRODUCTS}?limit=${limit}`
        );
        return response;
    }

    static async DeleteProduct(id: number): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.delete(
            `${APIEndpoint.PRODUCTS.PRODUCTS}?pid=${id}`
        );
        return response;
    }

    static async UpdateProduct(data: ProductResp): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.put(
            `${APIEndpoint.PRODUCTS.PRODUCTS}`, 
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
        const response: AxiosResponse<BaseResponse> = await axiosInstance.put(
            `${APIEndpoint.PRODUCTS.PRODUCTS_IMAGE}?id=${id}`,
            form,
            config
        );
        return response;
    }

    static async NewProductThumbnail(files: File[], id: string): Promise<AxiosResponse<BaseResponse>> {
        const form = new FormData();
        files.map((value) => form.append("img", value))
        const axiosInstance = await createAxiosInstance();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const response: AxiosResponse<BaseResponse> = await axiosInstance.put(
            `${APIEndpoint.PRODUCTS.PRODUCTS_THUMBNAIL}?id=${id}`,
            form,
            config
        );
        return response;
    }

    static async GetSuppliers(limit: number): Promise<AxiosResponse<Suppliers>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Suppliers> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.SUPPLIERS}?limit=${limit}`,
        );
        return response;
    }

    static async PostSuppliers(supplier: SupplierReq): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.post(
            `${APIEndpoint.PRODUCTS.SUPPLIERS}`,
            supplier,
        );
        return response;
    }

    static async GetCategory(limit: number): Promise<AxiosResponse<Categories>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Categories> = await axiosInstance.get(
            `${APIEndpoint.PRODUCTS.CATEGORIES}?limit=${limit}`,
        );
        return response;
    }

    static async PostCategory(category: CategoryReq): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.post(
            `${APIEndpoint.PRODUCTS.CATEGORIES}`,
            category
        );
        return response;
    }
}