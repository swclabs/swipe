import createAxiosInstance from "@/lib/axios";
import APIEndpoint from "@/providers/endpoint";
import { PaymentRequest, PaymentResponse } from "@/types/payment";
import { AxiosResponse } from "axios";


export class PaymentService {
    static async CreatePayment(payment: PaymentRequest): Promise<AxiosResponse<PaymentResponse>> {
        const axiosInstance = await createAxiosInstance();
        const response: AxiosResponse<PaymentResponse> = await axiosInstance.post(
            `${APIEndpoint.PAYMENT.PAYMENT}`, payment,
        );
        return response;
    }
}