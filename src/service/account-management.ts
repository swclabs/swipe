import APIEndpoint from "@/data-providers/endpoint";
import { Auth, LoginReq, LoginRes, LogoutRes, SignUpReq, SignUpRes } from "@/types/account-management";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";


export class AccountManagement {
    static async signUp(req: SignUpReq): Promise<AxiosResponse<SignUpRes>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<SignUpRes> = await axiosInstance.post(
            APIEndpoint.ACCOUNT_MANAGEMENT.SIGN_UP,
            req,
        );
        return response;
    }

    static async login(req: LoginReq): Promise<AxiosResponse<LoginRes>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<LoginRes> = await axiosInstance.post(
            APIEndpoint.ACCOUNT_MANAGEMENT.LOGIN,
            req,
        );
        return response;
    }

    static async logout(): Promise<AxiosResponse<LogoutRes>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<LogoutRes> = await axiosInstance.get(
            APIEndpoint.ACCOUNT_MANAGEMENT.LOGOUT,
        );
        return response;
    }

    static async auth(email: string): Promise<AxiosResponse<Auth>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<LogoutRes> = await axiosInstance.get(
            `${APIEndpoint.ACCOUNT_MANAGEMENT.AUTH}?email=${email}`,
        );
        return response;
    }
}