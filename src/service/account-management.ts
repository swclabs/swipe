import APIEndpoint from "@/api/endpoint";
import { IAuth, ILoginRequest, ILoginResponse, ILogoutResponse, ISignUpRequest, ISignUpResponse } from "@/interface/account-management";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";


export class AccountManagement {
    static async signUp(req: ISignUpRequest): Promise<AxiosResponse<ISignUpResponse>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<ISignUpResponse> = await axiosInstance.post(
            APIEndpoint.ACCOUNT_MANAGEMENT.SIGN_UP,
            req,
        );
        return response;
    }

    static async login(req: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<ILoginResponse> = await axiosInstance.post(
            APIEndpoint.ACCOUNT_MANAGEMENT.LOGIN,
            req,
        );
        return response;
    }

    static async logout(): Promise<AxiosResponse<ILogoutResponse>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<ILogoutResponse> = await axiosInstance.get(
            APIEndpoint.ACCOUNT_MANAGEMENT.LOGOUT,
        );
        return response;
    }

    static async auth(email: string): Promise<AxiosResponse<IAuth>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<ILogoutResponse> = await axiosInstance.get(
            `${APIEndpoint.ACCOUNT_MANAGEMENT.AUTH}?email=${email}`,
        );
        return response;
    }
}