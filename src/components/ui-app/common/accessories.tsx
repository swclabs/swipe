import { Accessory } from "@/types/products";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";


export default function Accessory({ data }: { data: Accessory[] }) {
    return (
        <div className="flex justify-center">
            <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                <div className='grid grid-cols-2 gap-4'>
                    {data.map((value, index) => (
                        <div className=" flex snap-center" key={index}>
                            <Card>
                                <CardHeader className="flex flex-col items-center justify-center">
                                    <h2 className="font-semibold text-3xl pt-8 pb-2">
                                        {value.title}
                                    </h2>
                                    <p className="px-4 text-sm text-center">
                                        {value.desc}
                                    </p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        removeWrapper
                                        alt="Card background"
                                        className="z-0 w-full h-full object-cover"
                                        src={value.img}
                                    />
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}