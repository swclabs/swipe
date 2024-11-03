import {User, UserInfo} from "@/types/users"
import {AxiosResponse} from "axios";
import createAxiosInstance from "@/lib/axios";
import APIEndpoint from "@/providers/endpoint";
import {OK} from "@/types";

export default class UserService {
    static async getUser(): Promise<AxiosResponse<User>> {
        const axiosInstance = await createAxiosInstance()
        return await axiosInstance.get(APIEndpoint.USER.USER);
    }

    static async updateUser(user: UserInfo) : Promise<AxiosResponse<OK>> {
        const axiosInstance = await createAxiosInstance()
        return await axiosInstance.put(APIEndpoint.USER.USER, user);
    }
}