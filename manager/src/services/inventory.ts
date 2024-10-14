import APIEndpoint from "@/providers/endpoint";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";
import { StockItem, InventoryStockSchema, BaseResponse, NewInventoryRes, StockItemBody } from "@/types/inventory";

export class InventoryService {
    static async GetInventoryStock(page: number, limit: number): Promise<AxiosResponse<InventoryStockSchema>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<InventoryStockSchema> = await axiosInstance.get(
            `${APIEndpoint.INVENTORY.GET_STOCK}?page=${page}&limit=${limit}`
        );
        return response;
    }

    static async DeleteInventory(id: number): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.delete(
            `${APIEndpoint.INVENTORY.GET_STOCK}?id=${id}`
        );
        return response;
    }

    static async NewInventory(data: StockItem): Promise<AxiosResponse<NewInventoryRes>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<NewInventoryRes> = await axiosInstance.post(
            APIEndpoint.INVENTORY.POST_STOCK,
            data
        );
        return response;
    }

    static async UpdateInventory(data: StockItem): Promise<AxiosResponse<NewInventoryRes>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<NewInventoryRes> = await axiosInstance.put(
            APIEndpoint.INVENTORY.PUT_STOCK,
            data
        );
        return response;
    }

    static async NewInventoryImage(files: File[], id: string): Promise<AxiosResponse<BaseResponse>> {
        const form = new FormData();
        files.map((value) => form.append("img", value))
        const axiosInstance = createAxiosInstance();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const response: AxiosResponse<BaseResponse> = await axiosInstance.post(
            `${APIEndpoint.INVENTORY.POST_INVENTORIES_IMG}`,
            form,
            config
        );
        return response;
    }
}