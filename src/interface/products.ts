
export interface IProductNews {
    title: string;
    subtitle: string;
    desc: string;
    img: string;
    textcolor: string;
}

export interface IProductData {
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

export interface IAccessory {
    title: string;
    desc: string;
    img: string;
}

export interface INewsletter {
    id: string;
    type: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    textcolor: string;
}

export interface INewsletters {
    data: INewsletter[];
}

export interface IPosts {
    title: string;
    subtitle: string;
    img: string;
    textcolor: string;
}

export interface IProductDetail {
    name: string;
    screen: string;
    img: string[]
    SSD: {
        value: string;
        price: string;
    }[];
    color: {
        name: string;
        img: string;
        product: string[];
    }[];
}
