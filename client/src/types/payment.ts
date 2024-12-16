export interface PaymentRequest {
    amount: number,
    bank_code: string,
    ip_address: string,
    language: string,
    order_desc: string,
    order_id: string,
    order_type: string
}

export interface PaymentResponse {
    message: string,
    payment_url: string,
    success: boolean
}