export default interface Coupon {
    id: number;
    code: string;
    discount: number;
    expired_at: string;
    description: string;
}