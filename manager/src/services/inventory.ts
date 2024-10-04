import APIEndpoint from "@/providers/endpoint";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";
import { StockItem, InventoryStockSchema } from "@/types/inventory";

export class InventoryService {
    static async GetInventoryStock(limit: number): Promise<AxiosResponse<InventoryStockSchema>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<InventoryStockSchema> = await axiosInstance.get(
            `${APIEndpoint.INVENTORY.GET_STOCK}?limit=${limit}`
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

}