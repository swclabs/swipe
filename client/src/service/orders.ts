import createAxiosInstance from "@/lib/axios";
import APIEndpoint from "@/providers/endpoint";
import { OK } from "@/types";
import { Order, OrderDTO } from "@/types/orders";
import { AxiosResponse } from "axios";


export class Orders {
    static async getOrders(code: string): Promise<AxiosResponse<Order>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Order> = await axiosInstance.get(
            `${APIEndpoint.ORDERS.ORDERS}/${code}`,
        );
        return response;
    }

    static async getOrderLimit(limit: number): Promise<AxiosResponse<Order[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Order[]> = await axiosInstance.get(
            `${APIEndpoint.ORDERS.ORDERS}?limit=${limit}`,
        );
        return response;
    }

    static async createOrders(orders: OrderDTO): Promise<AxiosResponse<OK>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<OK> = await axiosInstance.post(
            `${APIEndpoint.ORDERS.ORDERS}`, orders,
        );
        return response;
    }
}