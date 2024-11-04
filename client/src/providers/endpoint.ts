export default class APIEndpoint {
  static readonly BASE_URL: string = "http://localhost:8000";
  static readonly STORE_KEY: string = "";

  static readonly MANAGER = {
    LOGIN: `${APIEndpoint.BASE_URL}/auth/login`,
    GETME: `${APIEndpoint.BASE_URL}/auth/getme`,
    SIGN_UP: `${APIEndpoint.BASE_URL}/auth/signup`,
    EMAIL: `${APIEndpoint.BASE_URL}/auth/email`,
    LOGOUT: `${APIEndpoint.BASE_URL}/auth/logout`,
    OAuth2: `${APIEndpoint.BASE_URL}/oauth2/google`,
  };

  static readonly USER = {
    USER : `${APIEndpoint.BASE_URL}/users`,
  }

  static readonly PRODUCTS = {
    NEWSLETTERS: `${APIEndpoint.BASE_URL}/newsletters`,
    CATEGORIES: `${APIEndpoint.BASE_URL}/categories`,
    PRODUCTS: `${APIEndpoint.BASE_URL}/products`,
    SEARCH_DETAIL: `${APIEndpoint.BASE_URL}/search/details`,
    INVENTORY: `${APIEndpoint.BASE_URL}/inventories`,
    SEARCH: `${APIEndpoint.BASE_URL}/search`,
  };

  static readonly PURCHASE = {
    CARTS: `${APIEndpoint.BASE_URL}/purchase/carts`,
    COUPONS: `${APIEndpoint.BASE_URL}/purchase/coupons`,
    FAVORITE: `${APIEndpoint.BASE_URL}/favorite`,
  };

  static readonly ORDERS = {
    ORDERS: `${APIEndpoint.BASE_URL}/purchase/orders`,
  };

  static readonly ADDRESS = {
    PROVINCE: `${APIEndpoint.BASE_URL}/address/province`,
    DISTRICT: `${APIEndpoint.BASE_URL}/address/district`,
    WARD: `${APIEndpoint.BASE_URL}/address/ward`,
  }
}
