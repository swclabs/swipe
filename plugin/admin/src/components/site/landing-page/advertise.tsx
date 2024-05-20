'use client'
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
import { AddAdvertisementButton, EditAdvertisementButton } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AdvertisePagination from "./ui/pagination"
import { Badge } from "@/components/ui/badge"
import { FormikConfig, FormikProps, FormikValues, useFormik } from "formik"
import { AdvertisementEditForm, AdvertisementForm } from "./types"

const Advertise = [
  {
    id: "1",
    status: "active",
    content: "$250.00",
  },
  {
    id: "2",
    status: "active",
    content: "$250.00",
  },
]

export function AdvertiseTable({ formik }: { formik: FormikProps<AdvertisementEditForm> }) {
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
        {Advertise.map((data, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{data.id}</TableCell>
            <TableCell><Badge>{data.status}</Badge></TableCell>
            <TableCell>{data.content}</TableCell>
            <TableCell className="text-right">
              <EditAdvertisementButton state={data} formik={formik}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function AdvertiseArea() {
  const newDataForm: FormikProps<AdvertisementForm> = useFormik({
    initialValues: {
      content: "",
      status: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  });

  const editDataForm: FormikProps<AdvertisementEditForm> = useFormik({
    initialValues: {
      id: "",
      content: "",
      status: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  });
  return (
    <Card id="advertise">
      <CardHeader>
        <div className=" flex justify-between">
          <div className=" flex flex-col">
            <CardTitle>Advertisement</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription>
          </div>
          <div className="flex">
            <AddAdvertisementButton formik={newDataForm} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <AdvertiseTable formik={editDataForm} />
      </CardContent>
      <CardFooter>
        <AdvertisePagination />
      </CardFooter>
    </Card >
  )
}