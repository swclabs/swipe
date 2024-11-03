import { AxiosResponse } from 'axios';
import { District, DTO, Province, Ward } from './../types/address';
import createAxiosInstance from "@/lib/axios";
import APIEndpoint from '@/providers/endpoint';

export class Address {
    static async GetProvinces(): Promise<AxiosResponse<DTO<Province>>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<DTO<Province>> = await axiosInstance.get(
            APIEndpoint.ADDRESS.PROVINCE,
        );
        return response;
    }

    static async GetDistricts(province_id: number): Promise<AxiosResponse<DTO<District>>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<DTO<District>> = await axiosInstance.get(
            `${APIEndpoint.ADDRESS.DISTRICT}?province_id=${province_id}`,
        );
        return response;
    }

    static async GetWards(district_id: number): Promise<AxiosResponse<DTO<Ward>>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<DTO<Ward>> = await axiosInstance.get(
            `${APIEndpoint.ADDRESS.WARD}?district_id=${district_id}`,
        );
        return response
    }
}