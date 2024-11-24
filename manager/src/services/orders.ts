import createAxiosInstance from "@/lib/axios";
import APIEndpoint from "@/providers/endpoint";
import { OK } from "@/types/common";
import { Order, OrderDTO, OrderStatus } from "@/types/orders";
import { AxiosResponse } from "axios";


export class Orders {

    static async getOrderLimit(limit: number): Promise<AxiosResponse<Order[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Order[]> = await axiosInstance.get(
            `${APIEndpoint.ORDERS.ADMIN}?limit=${limit}`,
        );
        return response;
    }

    static async updateStatus(orders: OrderStatus): Promise<AxiosResponse<OK>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<OK> = await axiosInstance.put(
            `${APIEndpoint.ORDERS.STATUS}`, orders,
        );
        return response;
    }
}