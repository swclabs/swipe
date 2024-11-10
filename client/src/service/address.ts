import { AxiosResponse } from 'axios';
import { District, Province, Ward } from './../types/address';
import createAxiosInstance from "@/lib/axios";
import APIEndpoint from '@/providers/endpoint';

export class Address {
    static async GetProvinces(): Promise<AxiosResponse<Province[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Province[]> = await axiosInstance.get(
            APIEndpoint.ADDRESS.PROVINCE,
        );
        return response;
    }

    static async GetDistricts(province_id: string): Promise<AxiosResponse<District[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<District[]> = await axiosInstance.get(
            `${APIEndpoint.ADDRESS.DISTRICT}?province_id=${province_id}`,
        );
        return response;
    }

    static async GetWards(district_id: string): Promise<AxiosResponse<Ward[]>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<Ward[]> = await axiosInstance.get(
            `${APIEndpoint.ADDRESS.WARD}?district_id=${district_id}`,
        );
        return response
    }
}