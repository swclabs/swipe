"use client"
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import './style.css'
import data from "@/faker/mac";

export default function ProductTabs() {

  // const [selectedTab, setSelectedTab] = useState<number | null>(null);

  return (
    <div className="w-full bg-gray-50 flex justify-center">
      <div className="w-full">
        <Tabs aria-label="Dynamic tabs" items={data} className="" size="lg" radius="full" fullWidth>
          {(item) => (
            <Tab key={item.id} title={item.label} className="flex">
              <div className=" flex scrollbar hover:overflow-x-auto overflow-hidden">
                <div className="flex mb-6">
                  <div className=" sm:w-1/12 shrink-0 snap-center">
                    <div className="shrink-0"></div>
                  </div>
                  {item.subItems.map((subItem, subIndex) => (
                    <Card key={subIndex} radius="none" shadow="none" className="bg-gray-50 h-[600px] w-[400px]">
                      <CardBody className="flex flex-col h-full relative">
                        <div className="h-[300px] flex items-center">
                          <Image
                            alt="img"
                            src={subItem.image}
                            className="z-0 object-cover max-h-[300px]"
                          />
                        </div>
                        <h3 className=" text-xl text-center mt-4">{subItem.name}</h3>
                        <p className=" text-base mt-9">{subItem.desc}</p>
                        <p className=" font-bold mt-9 text-lg">{subItem.price}</p>
                        <div className=" absolute bottom-0">
                          <Button color="primary" radius="full"> Learn more</Button>
                        </div>
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
    </div >
  );
}