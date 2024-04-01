export default class APIEndpoint {

    static readonly BASE_URL: string = ''
    static readonly STORE_KEY: string = ''

    static readonly ACCOUNT_MANAGEMENT = {
        LOGIN: `${APIEndpoint.BASE_URL}/login`,
        GETME: `${APIEndpoint.BASE_URL}/getme`
    }
}