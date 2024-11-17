import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/dashboard/icons"
import Link from "next/link"


export const ProductCard = () => {
  return (
    <Link href="/dashboard/shop/product">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Product
          </CardTitle>
          <Icons.box />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Product</div>
          <p className="text-xs text-muted-foreground">
            from inventory and store
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

export const UploadProductCard = () => {
  return (
    <Link href="/dashboard/shop/upload">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Product
          </CardTitle>
          <Icons.upload />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Upload Product</div>
          <p className="text-xs text-muted-foreground">
            to inventory and store
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

export const OrdersCard = () => {
  return (
    <Link href="/dashboard/sales/orders">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Product
          </CardTitle>
          <Icons.receiptText />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Orders</div>
          <p className="text-xs text-muted-foreground">
            from store
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

export const SupplierCard = () => {
  return (
    <Link href="/dashboard/shop/suppliers">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Product
          </CardTitle>
          <Icons.truck />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Suppliers</div>
          <p className="text-xs text-muted-foreground">
            Gel all or upload
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

export const CategoryCard = () => {
  return (
    <Link href="/dashboard/shop/category">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Product
          </CardTitle>
          <Icons.shoppingBag />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Category</div>
          <p className="text-xs text-muted-foreground">
            Gel all or create new
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}