import APIEndpoint from '@/providers/endpoint';
import axios, { AxiosInstance } from 'axios';
import { getSession } from './auth';

const createAxiosInstance = async (): Promise<AxiosInstance> => {
    const session = await getSession();
    const accessToken = session?.access_token;
    const instance = axios.create({
        baseURL: APIEndpoint.BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    instance.interceptors.request.use(
        async (config) => {
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
        },
        (error) => {
            throw error;
        }
    );

    return instance;
};

export default createAxiosInstance;