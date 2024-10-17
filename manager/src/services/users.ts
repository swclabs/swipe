import APIEndpoint from "@/providers/endpoint";
import createAxiosInstance from "@/utils/axios";
import { AxiosResponse } from "axios";
import { User } from "@/types/users";

export class UserService {
    static async GetUser(): Promise<AxiosResponse<User>> {
        const axiosInstance = createAxiosInstance();
        const response: AxiosResponse<User> = await axiosInstance.get(
            `${APIEndpoint.USERS.GET_USERS}`
        );
        return response;
    }
}