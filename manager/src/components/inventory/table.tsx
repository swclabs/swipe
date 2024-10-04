"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { StockItem } from "@/types/inventory"
import { Badge } from "@/components/ui/badge"
import { ProductSpecsDialog } from "./dialog"
// import { DeleteConfirmDialog, EditDialog, ResponsiveDialog } from "./responsive-dialog"
// import { useState } from "react"
// import { InventoryService } from "@/services/inventory";

const data: StockItem[] = [
  {
    id: "1",
    product_name: "iphone 16",
    product_id: "1",
    price: "12312313",
    available: "1000",
    currency_code: "USD",
    status: "active",
    specs: {
      color: "black",
      ram: "8GB",
      ssd: "512GB",
      color_image: "",
      image: [
        "/img/shop/iphone-15-pro/6-1/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium.jpg",
        "/img/shop/iphone-15-pro/6-1/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1.jpg",
        "/img/shop/iphone-15-pro/6-1/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2.jpg",
        "/img/shop/iphone-15-pro/6-1/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3.jpg",
      ]
    }
  },
  {
    id: "2",
    product_name: "xphone 15",
    product_id: "1",
    price: "1231231312312",
    available: "1000",
    status: "active",
    currency_code: "USD",
    specs: {
      color: "",
      ram: "",
      ssd: "",
      color_image: "",
      image: [
        "/img/shop/iphone-15-pro/6-1/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium.jpg",
        "/img/shop/iphone-15-pro/6-1/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1.jpg",
        "/img/shop/iphone-15-pro/6-1/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2.jpg",
        "/img/shop/iphone-15-pro/6-1/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3.jpg",
      ]
    }
  }
]

export const columns: ColumnDef<StockItem>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product_id",
    header: "PID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("product_id")}</div>
    ),
  },
  {
    accessorKey: "product_name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">
        <ProductSpecsDialog src={row.original} />
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
      }).format(amount)

      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("available")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">
        <Badge variant={"default"}>
          {row.getValue("status")}
        </Badge>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      // const [isDeleteOpen, setIsDeleteOpen] = useState(false);
      // const [idDelete, setIdDelete] = useState(-1);

      // const deletefunc = (id: number) => {
      //   console.log("Delete payment with ID: ", id);
      //   const func = async (id: number) => {
      //     const res = await InventoryService.DeleteInventory(id)
      //   }
      //   func(id)
      // }

      return (
        <>
          {/* <DeleteConfirmDialog
            id={idDelete}
            isOpen={isDeleteOpen}
            setIsOpen={setIsDeleteOpen}
            deletefunc={deletefunc}
          /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
              {/* <DropdownMenuItem
                onClick={() => {
                  setIsDeleteOpen(!isDeleteOpen)
                  setIdDelete(Number(row.id))
                }}
              >
                <span className=" text-red-500">Delete</span>
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )
    },
  },
]

export function InventoryTableComponent() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("product_name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("product_name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
