export interface ProductData {
    title: string;
    subtitle: string;
    price: string;
    desc: string;
    img: string;
    swatch: string;
    spec?: {
        screen: string;
        display: string;
        SSD: number[];
    };
}

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
    title: string;
    subtitle: string;
    price: string;
    img: string;
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
