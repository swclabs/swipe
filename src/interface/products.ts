export interface productNews {
    title: string;
    subtitle: string;
    desc: string;
    img: string;
    textcolor: string;
}

export interface productData {
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

export interface accessory {
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

export interface IPosts {
    title: string;
    subtitle: string;
    img: string;
    textcolor: string;
}

