import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import AdvertiseArea, { AdvertiseTable } from "@/components/widget/landing-page/advertise";
import { AddAdvertisementButton } from "@/components/widget/landing-page/ui/button";
import HeroArea from "@/components/widget/landing-page/hero";
import AdvertisePagination from "@/components/widget/landing-page/ui/pagination";
import CarouselArea from "@/components/widget/landing-page/carousel";

const breadcrumbItems = [
  { title: "Widget", link: "/dashboard/widget" },
  { title: "Landing Page", link: "/dashboard/widget/landing-page" }
];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="pl-6 pt-6">
        <BreadCrumb items={breadcrumbItems} />
      </div>
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col gap-10">
          <AdvertiseArea />
          <HeroArea />
          <CarouselArea />
        </div>
        <div className=" h-10"/>
      </div>
    </ScrollArea>
  )
}