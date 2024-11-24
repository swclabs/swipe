export default class APIEndpoint {

    static readonly BASE_URL: string = 'http://localhost:8000'
    static readonly STORE_KEY: string = ''

    static readonly PRODUCTS = {
        PRODUCTS: `${APIEndpoint.BASE_URL}/products`,
        PRODUCTS_INFO: `${APIEndpoint.BASE_URL}/products/info`,
        PRODUCTS_IMAGE: `${APIEndpoint.BASE_URL}/products/images`,
        PRODUCTS_THUMBNAIL: `${APIEndpoint.BASE_URL}/products/thumbnail`,
        
        SUPPLIERS: `${APIEndpoint.BASE_URL}/suppliers`,
        CATEGORIES: `${APIEndpoint.BASE_URL}/categories`,
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
        INVENTORY: `${APIEndpoint.BASE_URL}/inventories`,
        INVENTORIES_IMG: `${APIEndpoint.BASE_URL}/inventories/image`,
        INVENTORIES_COLOR_IMG: `${APIEndpoint.BASE_URL}/inventories/image/color`
    }

    static readonly PURCHASE = {
        COUPONS : `${APIEndpoint.BASE_URL}/purchase/coupons`,
    }

    static readonly ORDERS = {
        ADMIN: `${APIEndpoint.BASE_URL}/purchase/admin/orders`,
        STATUS: `${APIEndpoint.BASE_URL}/purchase/orders/status`,
    }

    static readonly USERS = {
        USERS: `${APIEndpoint.BASE_URL}/users`,
    }

    static readonly ADDRESS = {
        PROVINCE: `${APIEndpoint.BASE_URL}/address/province`,
        DISTRICT: `${APIEndpoint.BASE_URL}/address/district`,
        WARD: `${APIEndpoint.BASE_URL}/address/ward`,
    }
}