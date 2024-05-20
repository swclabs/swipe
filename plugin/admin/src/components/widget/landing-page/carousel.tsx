import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AddAdvertisementButton, AddSlideCarouselButton, EditAdvertisementButton, EditSlideCarouselButton } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AdvertisePagination from "./ui/pagination"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
]

export function CarouselComponent() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Content</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">
              <EditSlideCarouselButton />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function CarouselArea() {
  return (
    <Card id="carousel">
      <CardHeader>
        <div className=" flex justify-between">
          <div className=" flex flex-col">
            <CardTitle>Carousel</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription>
          </div>
          <div className=" flex">
            <AddSlideCarouselButton />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CarouselComponent />
      </CardContent>
      <CardFooter>
        <AdvertisePagination />
      </CardFooter>
    </Card >
  )
}