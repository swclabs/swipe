export default class APIEndpoint {

    static readonly BASE_URL: string = 'http://localhost:8000'
    static readonly STORE_KEY: string = ''

    static readonly PRODUCTS = {
        POST_PRODUCTS: `${APIEndpoint.BASE_URL}/products`,
        GET_PRODUCTS: `${APIEndpoint.BASE_URL}/products`,

        POST_PRODUCTS_IMG: `${APIEndpoint.BASE_URL}/products/img`,
        POST_SUPPLIERS: `${APIEndpoint.BASE_URL}/suppliers`,
        POST_CATEGORIES: `${APIEndpoint.BASE_URL}/categories`,

        GET_SUPPLIERS: `${APIEndpoint.BASE_URL}/suppliers`,
        GET_CATEGORIES: `${APIEndpoint.BASE_URL}/categories`
    }

    static readonly MANAGER = {
        LOGIN: `${APIEndpoint.BASE_URL}/auth/login`,
        GETME: `${APIEndpoint.BASE_URL}/auth/getme`,
        SIGN_UP: `${APIEndpoint.BASE_URL}/auth/signup`,
        EMAIL: `${APIEndpoint.BASE_URL}/auth/email`,
        LOGOUT: `${APIEndpoint.BASE_URL}/auth/logout`,
        OAuth2: `${APIEndpoint.BASE_URL}/oauth2/google`,
    };


    static readonly INVENTORY = {
        POST_STOCK: `${APIEndpoint.BASE_URL}/inventories`,
        GET_STOCK: `${APIEndpoint.BASE_URL}/inventories`,
        PUT_STOCK: `${APIEndpoint.BASE_URL}/inventories`,

        PUT_INVENTORIES_IMG: `${APIEndpoint.BASE_URL}/inventories/image`,
        PUT_INVENTORIES_COLOR_IMG: `${APIEndpoint.BASE_URL}/inventories/image/color`
    }

    static readonly ORDERS = {
        ORDERS_ADMIN: `${APIEndpoint.BASE_URL}/purchase/admin/orders`,
    }

    static readonly USERS = {
        GET_USERS: `${APIEndpoint.BASE_URL}/users`,
    }
}