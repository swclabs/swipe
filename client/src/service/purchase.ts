import createAxiosInstance from "@/lib/axios";
import APIEndpoint from "@/providers/endpoint";
import {OK} from "@/types";
import Coupon from "@/types/coupons";
import {Carts} from "@/types/purchase";
import {AxiosResponse} from "axios";

export class PurchaseService {
    static async getCart(): Promise<AxiosResponse<Carts>> {
        const axiosInstance = await createAxiosInstance();
        return await axiosInstance.get(APIEndpoint.PURCHASE.CARTS);
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

    static async deleteCart(inventory_id: number): Promise<AxiosResponse<OK>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<OK> = await axiosInstance.delete(
            APIEndpoint.PURCHASE.CARTS + `/${inventory_id}`
        )
        return response;
    }

    static async addToFavorite(inventory_id: number): Promise<AxiosResponse<OK>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<OK> = await axiosInstance.post(
            `${APIEndpoint.PURCHASE.FAVORITE}/${inventory_id}`,
        );
        return response;
    }

    static async getFavorite(): Promise<AxiosResponse<Favorite[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Favorite[]> = await axiosInstance.get(
            APIEndpoint.PURCHASE.FAVORITE
        );
        return response;
    }

    static async getCoupon(): Promise<AxiosResponse<Coupon[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Coupon[]> = await axiosInstance.get(
            APIEndpoint.PURCHASE.COUPONS
        );
        return response;
    }
}