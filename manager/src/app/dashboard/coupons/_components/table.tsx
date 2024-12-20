"use client"
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
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus, Trash } from "lucide-react"

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
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Product, ProductResp } from "@/types/products"
import { useProduct } from "@/state/products"
import { useEffect, useState } from "react"
import { DeleteConfirmDialog } from "./responsive-dialog"
import { Badge } from "@/components/ui/badge"
import FilterBox from "./filter-box"
import Link from "next/link"
import { CreateCouponsDialog } from "./dialog"
import { CouponsResp } from "@/types/coupons"
import { CouponsService } from "@/services/coupons"
import CopyButton from "./copy-btn"

export const columns: ColumnDef<CouponsResp>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase ml-4">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "code",
    header: "Mã",
    cell: ({ row }) => (
      // <div className="capitalize">{row.getValue("code")}</div>
      <CopyButton textToCopy={row.getValue("code")} />
    ),
  },
  {
    accessorKey: "discount",
    header: "Giảm giá",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("discount")}%</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Mô tả",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "expired_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className=" text-left"
        >
          Hạn sử dụng
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("expired_at")}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Trạng thái</div>,
    cell: ({ row }) => {
      return <Badge variant={row.getValue("status") === "active" ? "default" : "destructive"}>{row.getValue("status")}</Badge>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <div className=" text-right">Hành động</div>,
    cell: ({ row }) => {
      return (
        <div className=" flex space-x-2 w-full justify-end">
          {/* <CouponsDialog original={row.original} /> */}
          {/* <Link href={`/dashboard/shop/inventory/upload/${row.original.id}`}>
            <Button size="icon" variant="outline">
              <Plus className=" text-blue-600" />
            </Button>
          </Link> */}
          <DeleteConfirmDialog code={row.original.code} />
        </div>
      )
    },
  },
]

export function CouponsDataTable() {
  const [coupons, setCoupons] = useState<CouponsResp[]>([])
  useEffect(() => {
    const func = async () => {
      try {
        const res = await CouponsService.getCoupons()
        setCoupons(res.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    func()
  }, [])

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: coupons,
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
    <>
      <FilterBox table={table} />
      <div className="w-full">
        <div className="flex justify-end items-center py-4">
          <div className=" flex space-x-3">
            <CreateCouponsDialog />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown />
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
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
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
    </>
  )
}
