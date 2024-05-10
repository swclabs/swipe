export interface IError {
    msg: string;
}

export interface ISignUpRequest {
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number: string
}

export interface ISignUpResponse {
    msg: string,
    success: boolean
}

export interface ILoginRequest {
    email: string
    password: string
}

export interface ILoginResponse {
    email: string,
    success: boolean,
    token: string
}

export type ILogoutResponse = IError

export type IAuth = IError