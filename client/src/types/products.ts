export interface Accessory {
    title: string;
    desc: string;
    img: string;
}

export interface Newsletter {
    id: string;
    type: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    textcolor: string;
}

export interface Newsletters {
    data: Newsletter[];
}

export interface Posts {
    title: string;
    subtitle: string;
    img: string;
    textcolor: string;
}

export interface ProductDetail {
    name: string;
    screen: string;
    img: string[]
    color: {
        name: string;
        img: string;
        product: string[];
        specs?: {
            RAM: string;
            SSD: string;
            price: string;
        }[];
    }[];
}

export interface ProductShopCard {
    name: string;
    desc: string;
    price: string;
    image: string;
}

export interface AccessoryShopCard {
    title: string;
    price: string;
    img: string;
    tag: string;
    color: {
        img: string;
    }[];
}
