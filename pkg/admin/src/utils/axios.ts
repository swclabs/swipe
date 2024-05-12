import APIEndpoint from '@/data-providers/endpoint';
import axios, { AxiosInstance } from 'axios';
// import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const createAxiosInstance = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: APIEndpoint.BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${accessToken}`,
        },
    });

    instance.interceptors.request.use(
        async (config) => {
            // config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
        },
        (error) => {
            throw error;
        }
    );

    return instance;
};

export default createAxiosInstance;