import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, PlusCircle } from "lucide-react"
import { PaginationSupplier } from "./pagination"
import { ProductBody, Products } from "@/types/products"
import { DeleteConfirmDialog, EditDialog, ResponsiveDialog } from "./responsive-dialog"
import { useState } from "react"

const TableHeaderRow = () => {
  return (
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="hidden md:table-cell">
        Price
      </TableHead>
      <TableHead className="hidden md:table-cell">
        Created at
      </TableHead>
      <TableHead>
        <span className="sr-only">Actions</span>
      </TableHead>
    </TableRow>
  )
}

interface TabsContentParams {
  input: Products
  status: string
  deletefunc: (id: number) => void
}

const DataWithStatus = (inputs: Products, status: string): ProductBody[] => {
  if (status.toLowerCase() === "all") return inputs.data
  return inputs.data ? inputs.data.filter((v) => v.status.toLowerCase() === status.toLowerCase()) : [];
}

export const TabsContentWithStatus = ({ input, status, deletefunc }: TabsContentParams) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [idDelete, setIdDelete] = useState(-1);
  let new_input = DataWithStatus(input, status);

  return (
    <>
      <EditDialog
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
      />
      <DeleteConfirmDialog
        id={idDelete}
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        deletefunc={deletefunc}
      />
      < Card x-chunk="dashboard-06-chunk-0" >
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableHeaderRow />
            </TableHeader>
            <TableBody>
              {new_input !== null && new_input.map((value, index) => (
                <TableRow key={index}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell className="font-medium">
                    {value.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{value.status}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {value.price}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {value.created}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => setIsEditOpen(!isEditOpen)}
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setIsDeleteOpen(!isDeleteOpen)
                            setIdDelete(value.id)
                          }}
                        >
                          <span className=" text-red-500">Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <PaginationSupplier />
        </CardFooter>
      </Card >
    </>
  )
}