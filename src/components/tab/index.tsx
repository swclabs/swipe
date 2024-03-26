"use client"
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import './style.css'
import data from "@/data/mac";

export default function TabsComponent() {

    // const [selectedTab, setSelectedTab] = useState<number | null>(null);

    return (
        <div className="w-full bg-gray-50 flex justify-center">
            <div className="w-full">
                <Tabs aria-label="Dynamic tabs" items={data} className="" size="lg" radius="full" fullWidth>
                    {(item) => (
                        <Tab key={item.id} title={item.label} className="flex">
                            <div className=" flex scrollbar hover:overflow-x-auto overflow-hidden">
                                <div className="flex">
                                    <div className=" sm:w-1/12 shrink-0 snap-center">
                                        <div className="shrink-0"></div>
                                    </div>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <Card key={subIndex} radius="none" shadow="none" className="bg-gray-50 h-[600px] w-[400px]">
                                            <CardBody className="flex flex-col">
                                                <div className="h-[300px] flex items-center">
                                                    <Image
                                                        src={subItem.image}
                                                        className="z-0 object-cover max-h-[300px]"
                                                    />
                                                </div>
                                                <h3 style={{ color: '#000', fontSize: '20px', margin: '10px 0' }}>{subItem.name}</h3>
                                                <p style={{ color: '#666', fontSize: '16px', margin: '10px 0' }}>{subItem.content}</p>
                                                <p style={{ color: '#000', fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{subItem.price}</p>
                                                <a href="#" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '16px', margin: '10px 0' }}>Learn More</a>
                                            </CardBody>
                                        </Card>
                                    ))}
                                    <div className=" sm:w-1/12 shrink-0 snap-center">
                                        <div className="shrink-0"></div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
};