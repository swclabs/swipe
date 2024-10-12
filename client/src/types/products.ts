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

export interface Specification {
    price: string;
    ssd: string;
    ram: string;
    desc: string;
    connection: string;
}

export interface ProductDetail {
    name: string;
    screen: string;
    img: string[]
    color: {
        name: string;
        img: string;
        product: string[];
        specs?: Specification[];
    }[];
}

export interface SpecsType {
    screen: string;
    display: string;
    SSD: number[];
    RAM: number[];
}

export interface ProductType {
    id: number;
    category: string;
    desc: string;
    image: string;
    name: string;
    price: string;
    specs: SpecsType;

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
