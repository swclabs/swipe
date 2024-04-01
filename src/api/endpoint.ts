export default class APIEndpoint {

    static readonly BASE_URL: string = ''
    static readonly STORE_KEY: string = ''

    static readonly ACCOUNT_MANAGEMENT = {
        LOGIN: `${APIEndpoint.BASE_URL}/auth/login`,
        GETME: `${APIEndpoint.BASE_URL}/auth/getme`,
        SIGN_UP: `${APIEndpoint.BASE_URL}/auth/signup`,
        AUTH: `${APIEndpoint.BASE_URL}/auth`,
        LOGOUT: `${APIEndpoint.BASE_URL}/auth/logout`,
    }
}