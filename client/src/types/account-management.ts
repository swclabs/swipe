export interface Error {
    msg: string;
}

export interface SignUpReq {
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number: string
}

export interface SignUpRes {
    msg: string,
    success: boolean
}

export interface LoginReq {
    email: string
    password: string
}

export interface LoginRes {
    email: string,
    success: boolean,
    token: string
}

export type LogoutRes = Error

export type Auth = Error