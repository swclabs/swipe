import createAxiosInstance from "@/lib/axios";
import APIEndpoint from "@/providers/endpoint";
import { OK } from "@/types";
import { Carts } from "@/types/purchase";
import { AxiosResponse } from "axios";

export class PurchaseService {
    static async getCart(): Promise<AxiosResponse<Carts>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Carts> = await axiosInstance.get(
            APIEndpoint.PURCHASE.CARTS,
        );
        return response;
    }

    static async addCart(productId: number, quantity: number): Promise<AxiosResponse<OK>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<OK> = await axiosInstance.post(
            APIEndpoint.PURCHASE.CARTS,
            {
                inventory_id: productId,
                quantity: quantity,
            }
        )
        return response;
    }
}