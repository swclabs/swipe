interface ContentItem {
    content: string;
    src: string;
}

interface Card {
    color?: string;
    category: string;
    title: string;
    src: string;
    content: ContentItem[];
}

export interface CarouselData {
    headline: string;
    cards: Card[];
}

interface CardProduct {
    color?: string;
    price: string;
    title: string;
    src: string;
    content: ContentItem[];
}

export interface ProductCarouselData {
    headline: string;
    cards: CardProduct[];
}