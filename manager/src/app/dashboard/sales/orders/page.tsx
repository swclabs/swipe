import { ScrollArea } from "@/components/ui/scroll-area"

import BreadCrumb from "@/components/dashboard/breadcrumb";
import MainView from "./_components/main-view";

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 max-h-full my-5">
        <MainView />
      </div>
    </ScrollArea>
  )
}
