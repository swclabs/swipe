import APIEndpoint from "@/providers/endpoint";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";
import { StockItem, InventoryStockSchema } from "@/types/inventory";

export class InventoryService {
    static async GetInventoryStock(page: number, limit: number): Promise<AxiosResponse<InventoryStockSchema>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<InventoryStockSchema> = await axiosInstance.get(
            `${APIEndpoint.INVENTORY.GET_STOCK}?page=${page}&limit=${limit}`
        );
        return response;
    }

    static async DeleteInventory(id: number): Promise<AxiosResponse<StockItem>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<StockItem> = await axiosInstance.delete(
            `${APIEndpoint.INVENTORY.GET_STOCK}?pid=${id}`
        );
        return response;
    }

    static async NewInventory(data: StockItem): Promise<AxiosResponse<StockItem>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<StockItem> = await axiosInstance.post(
            APIEndpoint.INVENTORY.POST_STOCK,
            data
        );
        return response;
    }
}