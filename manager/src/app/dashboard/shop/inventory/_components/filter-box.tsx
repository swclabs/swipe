
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StockItemBody } from "@/types/inventory";
import { Table } from "@tanstack/react-table";
import { Car, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { StatusBox } from "./status-dropdown";

export interface FilterBoxState {
  name: string;
  price: string;
  color: string;
  status: string;
}

export default function FilterBox({ table }: { table: Table<StockItemBody> }) {
  const [state, setState] = useState<FilterBoxState>({ name: "", price: "", color: "", status: "" })
  const search = (table: Table<StockItemBody>) => {
    table.getColumn("product_name")?.setFilterValue(state.name)
    table.getColumn("price")?.setFilterValue(state.price)
    table.getColumn("color")?.setFilterValue(state.color)
    table.getColumn("status")?.setFilterValue(state.status)
  }
  const reset = (table: Table<StockItemBody>) => {
    table.getColumn("product_name")?.setFilterValue("")
    table.getColumn("price")?.setFilterValue("")
    table.getColumn("color")?.setFilterValue("")
    table.getColumn("status")?.setFilterValue("")
  }
  return (
    <Card className="w-full">
      <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Tên sản phẩm</Label>
          <Input
            type="text" id="name" placeholder="Tên sản phẩm"
            value={state.name}
            onChange={(event) =>
              // table.getColumn("product_name")?.setFilterValue(event.target.value)
              setState({ ...state, name: event.target.value })
            }
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="price">Giá thành</Label>
          <Input type="text" id="price" placeholder="Giá thành"
            value={state.price}
            onChange={(event) =>
              // table.getColumn("product_name")?.setFilterValue(event.target.value)
              setState({ ...state, price: event.target.value })
            }
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="color">Màu sắc</Label>
          <Input type="text" id="color" placeholder="Màu sắc"
            value={state.color}
            onChange={(event) =>
              // table.getColumn("product_name")?.setFilterValue(event.target.value)
              setState({ ...state, color: event.target.value })
            }
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="status">Chọn trạng thái</Label>
          {/* <Input type="text" id="status" placeholder="Status"
            value={state.status}
            onChange={(event) =>
              // table.getColumn("product_name")?.setFilterValue(event.target.value)
              setState({ ...state, status: event.target.value })
            }
          /> */}
          <StatusBox state={state} setState={setState} />

        </div>
      </CardContent>
      <CardFooter className="flex justify-start px-5 space-x-5">
        <Button onClick={() => search(table)}>Search</Button>
        <Button size="icon" variant="outline" className=" border-blue-600" onClick={() => reset(table)} >
          <RefreshCcw className=" text-blue-600" />
        </Button>
      </CardFooter>
    </Card>
  )
}