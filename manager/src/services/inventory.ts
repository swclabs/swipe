import APIEndpoint from "@/providers/endpoint";
import createAxiosInstance from "@/lib/axios";
import { AxiosResponse } from "axios";
import { StockItem, InventoryStockSchema, BaseResponse, NewInventoryRes, StockItemBody } from "@/types/inventory";

export class InventoryService {
    static async GetInventoryStock(page: number, limit: number): Promise<AxiosResponse<InventoryStockSchema>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<InventoryStockSchema> = await axiosInstance.get(
            `${APIEndpoint.INVENTORY.INVENTORY}?page=${page}&limit=${limit}`
        );
        return response;
    }

    static async DeleteInventory(id: string): Promise<AxiosResponse<BaseResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<BaseResponse> = await axiosInstance.delete(
            `${APIEndpoint.INVENTORY.INVENTORY}?id=${id}`
        );
        return response;
    }

    static async NewInventory(data: StockItem): Promise<AxiosResponse<NewInventoryRes>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<NewInventoryRes> = await axiosInstance.post(
            APIEndpoint.INVENTORY.INVENTORY,
            data
        );
        return response;
    }

    static async UpdateInventory(data: StockItemBody): Promise<AxiosResponse<NewInventoryRes>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<NewInventoryRes> = await axiosInstance.put(
            APIEndpoint.INVENTORY.INVENTORY,
            data
        );
        return response;
    }

    static async NewInventoryImage(files: File[], id: string): Promise<AxiosResponse<BaseResponse>> {
        const form = new FormData();
        files.map((value) => form.append("image", value))
        const axiosInstance = await createAxiosInstance();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const response: AxiosResponse<BaseResponse> = await axiosInstance.put(
            `${APIEndpoint.INVENTORY.INVENTORIES_IMG}?id=${id}`,
            form,
            config
        );
        return response;
    }

    static async InventoryColorImage(files: File[], id: string): Promise<AxiosResponse<BaseResponse>> {
        const form = new FormData();
        files.map((value) => form.append("image", value))
        const axiosInstance = await createAxiosInstance();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const response: AxiosResponse<BaseResponse> = await axiosInstance.put(
            `${APIEndpoint.INVENTORY.INVENTORIES_COLOR_IMG}?id=${id}`,
            form,
            config
        );
        return response;
    }
}