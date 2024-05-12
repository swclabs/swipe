export default class APIEndpoint {

    static readonly BASE_URL: string = ''
    static readonly STORE_KEY: string = ''

    static readonly PRODUCTS = {
        POST_PRODUCTS: `${APIEndpoint.BASE_URL}/products`,
        GET_SUPPLIERS: `${APIEndpoint.BASE_URL}/suppliers`
    }
}