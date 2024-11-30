import APIEndpoint from "@/providers/endpoint";
import createAxiosInstance from "@/lib/axios";
import { AxiosResponse } from "axios";
import { User } from "@/types/users";

export class UserService {
    static async GetUser(): Promise<AxiosResponse<User>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<User> = await axiosInstance.get(
            `${APIEndpoint.USERS.USERS}`
        );
        return response;
    }
}