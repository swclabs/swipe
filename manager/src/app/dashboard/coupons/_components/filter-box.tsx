
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CouponsResp } from "@/types/coupons";
import { ProductResp } from "@/types/products";
import { Table } from "@tanstack/react-table";
import { Car, RefreshCcw } from "lucide-react";
import { useState } from "react";


export interface FilterBoxState {
  name: string;
  category: string;
  status: string;
}

export default function FilterBox({ table }: { table: Table<CouponsResp> }) {
  const [state, setState] = useState<FilterBoxState>({ name: "", category: "", status: "" })
  const search = (table: Table<CouponsResp>) => {
    table.getColumn("name")?.setFilterValue(state.name)
    table.getColumn("category")?.setFilterValue(state.category)
    table.getColumn("status")?.setFilterValue(state.status)
  }
  const reset = (table: Table<CouponsResp>) => {
    table.getColumn("name")?.setFilterValue("")
    table.getColumn("category")?.setFilterValue("")
    table.getColumn("status")?.setFilterValue("")
  }
  return (
    <Card className="w-full">
      <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Tên mã</Label>
          <Input
            type="text" id="name" placeholder="Tên mã"
            value={state.name}
            onChange={(event) =>
              // table.getColumn("product_name")?.setFilterValue(event.target.value)
              setState({ ...state, name: event.target.value })
            }
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="price">Loại mã</Label>
          <Input type="text" id="price" placeholder="Loại mã"
            value={state.category}
            onChange={(event) =>
              // table.getColumn("product_name")?.setFilterValue(event.target.value)
              setState({ ...state, category: event.target.value })
            }
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="status">Trạng thái</Label>
          <Select onValueChange={(value) => setState({ ...state, status: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Chọn trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="disabled">Disabled</SelectItem>
            </SelectContent>
          </Select>
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