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

    static readonly INVENTORY = {
        POST_STOCK: `${APIEndpoint.BASE_URL}/inventories`,
        GET_STOCK: `${APIEndpoint.BASE_URL}/inventories`,
    }

    static readonly USERS = {
        GET_USERS: `${APIEndpoint.BASE_URL}/users`,
    }
}