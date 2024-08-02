export interface CardContent {
    title: string;
    subtitle: string;
    desc: string;
    img: string;
    textcolor: string;
}

type WidgetBody = CardContent

export interface Widgets {
    headline: string;
    body: WidgetBody[];
}