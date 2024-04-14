import { productNews } from "@/interface/products";
import { Card, CardHeader, Image } from "@nextui-org/react";


export default function ListCard(value: productNews, key: number) {
    return (
        <div className="flex snap-center" key={key}>
            <Card className="h-[500px] sm:w-[400px] m-5 w-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <div className={value.textcolor}>
                        <p className="text-tiny uppercase font-bold">
                            {value.title}
                        </p>
                        <h4 className="font-semibold text-2xl pt-2 pb-2">{value.subtitle}</h4>
                        <h4 className="font-normal text-sm text-left">{value.desc}</h4>
                    </div>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={value.img}
                />
            </Card>
        </div>
    )
}