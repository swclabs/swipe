export interface Error {
    msg: string;
}

export interface SignUpRequest {
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number: string
}

export interface SignUpResponse {
    msg: string,
    success: boolean
}

export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    email: string,
    success: boolean,
    token: string
}

export interface LogoutResponse extends Error {

}

export interface Auth extends Error {

}