import APIEndpoint from "@/providers/endpoint";
import { Auth, LoginReq, LoginRes, LogoutRes, SignUpReq, SignUpRes } from "@/types/account-management";
import createAxiosInstance from "@/lib/axios";
import { AxiosResponse } from "axios";


export class Manager {
    static async signUp(req: SignUpReq): Promise<AxiosResponse<SignUpRes>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<SignUpRes> = await axiosInstance.post(
            APIEndpoint.MANAGER.SIGN_UP,
            req,
        );
        return response;
    }

    static async login(req: LoginReq): Promise<AxiosResponse<LoginRes>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<LoginRes> = await axiosInstance.post(
            APIEndpoint.MANAGER.LOGIN,
            req,
        );
        return response;
    }

    static async logout(): Promise<AxiosResponse<LogoutRes>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<LogoutRes> = await axiosInstance.get(
            APIEndpoint.MANAGER.LOGOUT,
        );
        return response;
    }

    static async auth(email: string): Promise<AxiosResponse<Auth>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<LogoutRes> = await axiosInstance.get(
            `${APIEndpoint.MANAGER.EMAIL}?email=${email}`,
        );
        return response;
    }

    static async oauth2(access_token: string): Promise<AxiosResponse<LoginRes>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<LoginRes> = await axiosInstance.get(
            `${APIEndpoint.MANAGER.OAuth2}?access_token=${access_token}`,
        );
        return response;
    }
}