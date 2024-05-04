import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { PlusCircle } from "lucide-react"
import ImageUploader from "@/components/dashboard/image-upload"


export const ProductDetail = () => {
    return (
        <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            className="w-full"
                            defaultValue="Gamer Gear Pro Controller"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                            className="min-h-32"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export const Stock = () => {
    return (
        <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
                <CardTitle>Stock</CardTitle>
                <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">SKU</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="w-[100px]">Size</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-semibold">
                                GGPC-001
                            </TableCell>
                            <TableCell>
                                <Label htmlFor="stock-1" className="sr-only">
                                    Stock
                                </Label>
                                <Input
                                    id="stock-1"
                                    type="number"
                                    defaultValue="100"
                                />
                            </TableCell>
                            <TableCell>
                                <Label htmlFor="price-1" className="sr-only">
                                    Price
                                </Label>
                                <Input
                                    id="price-1"
                                    type="number"
                                    defaultValue="99.99"
                                />
                            </TableCell>
                            <TableCell>
                                <ToggleGroup
                                    type="single"
                                    defaultValue="s"
                                    variant="outline"
                                >
                                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                                </ToggleGroup>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">
                                GGPC-002
                            </TableCell>
                            <TableCell>
                                <Label htmlFor="stock-2" className="sr-only">
                                    Stock
                                </Label>
                                <Input
                                    id="stock-2"
                                    type="number"
                                    defaultValue="143"
                                />
                            </TableCell>
                            <TableCell>
                                <Label htmlFor="price-2" className="sr-only">
                                    Price
                                </Label>
                                <Input
                                    id="price-2"
                                    type="number"
                                    defaultValue="99.99"
                                />
                            </TableCell>
                            <TableCell>
                                <ToggleGroup
                                    type="single"
                                    defaultValue="m"
                                    variant="outline"
                                >
                                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                                </ToggleGroup>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">
                                GGPC-003
                            </TableCell>
                            <TableCell>
                                <Label htmlFor="stock-3" className="sr-only">
                                    Stock
                                </Label>
                                <Input
                                    id="stock-3"
                                    type="number"
                                    defaultValue="32"
                                />
                            </TableCell>
                            <TableCell>
                                <Label htmlFor="price-3" className="sr-only">
                                    Stock
                                </Label>
                                <Input
                                    id="price-3"
                                    type="number"
                                    defaultValue="99.99"
                                />
                            </TableCell>
                            <TableCell>
                                <ToggleGroup
                                    type="single"
                                    defaultValue="s"
                                    variant="outline"
                                >
                                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                                </ToggleGroup>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="justify-center border-t p-4">
                <Button size="sm" variant="ghost" className="gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    Add Variant
                </Button>
            </CardFooter>
        </Card>
    )
}

export const ProductCategory = () => {
    return (
        <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
                <CardTitle>Product Category</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6 sm:grid-cols-3">
                    <div className="grid gap-3">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                            <SelectTrigger
                                id="category"
                                aria-label="Select category"
                            >
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="clothing">Clothing</SelectItem>
                                <SelectItem value="electronics">
                                    Electronics
                                </SelectItem>
                                <SelectItem value="accessories">
                                    Accessories
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="subcategory">
                            Subcategory (optional)
                        </Label>
                        <Select>
                            <SelectTrigger
                                id="subcategory"
                                aria-label="Select subcategory"
                            >
                                <SelectValue placeholder="Select subcategory" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="t-shirts">T-Shirts</SelectItem>
                                <SelectItem value="hoodies">Hoodies</SelectItem>
                                <SelectItem value="sweatshirts">
                                    Sweatshirts
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export const ProductStatus = () => {
    return (
        <Card x-chunk="dashboard-07-chunk-3">
            <CardHeader>
                <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <Select>
                            <SelectTrigger id="status" aria-label="Select status">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="published">Active</SelectItem>
                                <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


export const ProductUploadImages = () => {
    return (
        <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <ImageUploader />
                </div>
            </CardContent>
        </Card>
    )
}