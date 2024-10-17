export default class APIEndpoint {

    static readonly BASE_URL: string = 'http://localhost:8000'
    static readonly STORE_KEY: string = ''

    static readonly MANAGER = {
        LOGIN: `${APIEndpoint.BASE_URL}/auth/login`,
        GETME: `${APIEndpoint.BASE_URL}/auth/getme`,
        SIGN_UP: `${APIEndpoint.BASE_URL}/auth/signup`,
        EMAIL: `${APIEndpoint.BASE_URL}/auth/email`,
        LOGOUT: `${APIEndpoint.BASE_URL}/auth/logout`,
        OAuth2: `${APIEndpoint.BASE_URL}/oauth2/google`,
    }

    static readonly PRODUCTS = {
        GET_NEWSLETTERS: `${APIEndpoint.BASE_URL}/newsletters`,
        GET_CATEGORIES: `${APIEndpoint.BASE_URL}/categories`,

        PRODUCTS: `${APIEndpoint.BASE_URL}/products`,

        SEARCH_DETAIL: `${APIEndpoint.BASE_URL}/search/details`,
    }
}