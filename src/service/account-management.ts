import APIEndpoint from "@/api/endpoint";
import {
    Auth, LoginRequest, LoginResponse, LogoutResponse, SignUpRequest, SignUpResponse
} from "@/interface/account-management";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";


export class AccountManagement {
    static async signUp(req: SignUpRequest): Promise<AxiosResponse<SignUpResponse>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<SignUpResponse> = await axiosInstance.post(
            APIEndpoint.ACCOUNT_MANAGEMENT.SIGN_UP,
            req,
        );
        return response;
    }

    static async login(req: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<LoginResponse> = await axiosInstance.post(
            APIEndpoint.ACCOUNT_MANAGEMENT.LOGIN,
            req,
        );
        return response;
    }

    static async logout(): Promise<AxiosResponse<LogoutResponse>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<LogoutResponse> = await axiosInstance.get(
            APIEndpoint.ACCOUNT_MANAGEMENT.LOGOUT,
        );
        return response;
    }

    static async auth(email: string): Promise<AxiosResponse<Auth>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<LogoutResponse> = await axiosInstance.get(
            `${APIEndpoint.ACCOUNT_MANAGEMENT.AUTH}?email=${email}`,
        );
        return response;
    }
}