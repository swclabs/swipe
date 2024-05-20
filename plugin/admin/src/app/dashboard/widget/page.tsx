'use client';
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker";
import { Overview } from "@/components/dashboard/overview";
import { CategoryCard, OrdersCard, ProductCard, SupplierCard, UploadProductCard } from "@/components/dashboard/products/card";
import { RecentSales } from "@/components/dashboard/recent-sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LandingPageCard } from "@/components/widget/landing-page";

import { motion } from "framer-motion"

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="setting" disabled>
              Setting
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <motion.div
                className="box"
                whileHover={{ scale: 1.05 }}
              >
                <LandingPageCard />
              </motion.div>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">

            </div>
          </TabsContent>
          <TabsContent value="inbox">
            Mail
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
