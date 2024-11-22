import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Delete, Trash } from 'lucide-react';
import { ProductService } from '@/services/products';
import { useToast } from '@/hooks/use-toast';

export function ResponsiveDialog({
  children,
  isOpen,
  setIsOpen,
  title,
  description,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description?: string;
}) {
  // const isDesktop = useMediaQuery('(min-width: 768px)');


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export const EditDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ResponsiveDialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Edit Product"
    >
      <form >
        <DialogHeader>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Textarea placeholder="Type your message here." className="col-span-3" onChange={(e) => {

            }} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-left">
              Price
            </Label>
            <Input
              id="name"
              type="text"
              className="col-span-3"
              // defaultValue={formik.values.price}
              onChange={(e) => {

              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="decripstion" className="text-left">
              Decripstion
            </Label>
            <Textarea placeholder="Type your message here." className="col-span-3" onChange={(e) => {

            }} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-left">
              Category
            </Label>
            <Select
              onValueChange={(value) => {

              }}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup >
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="archive">Archive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-left">
              Supplier
            </Label>
            <Select
              onValueChange={(value) => {

              }}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup >
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="archive">Archive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-left">
              Status
            </Label>
            <Select
              onValueChange={(value) => {

              }}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup >
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="archive">Archive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </form >
    </ResponsiveDialog>
  )
}

export const DeleteConfirmDialog = ({ id }: { id: number }) => {
  const [open, setOpen] = React.useState(false)
  const { toast } = useToast()
  const deleteItem = (id: number) => {
    const func = async (id: number) => {
      try {
        await ProductService.DeleteProduct(id)
        toast({
          variant: "default",
          title: "Success",
          description: "You have successfully delete item.",
        })
      }
      catch {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please try again.",
        })
      }
    }
    func(id)
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  }
  return (
    <>
      <Button size="icon" variant="outline" onClick={() => setOpen(!open)}>
        <Trash className=" text-red-500" />
      </Button>
      <ResponsiveDialog
        title="Edit Product"
        isOpen={open}
        setIsOpen={setOpen}
      >
        <DialogHeader>
          <DialogDescription>
            Delete Confirm Delete Product
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"destructive"}
            onClick={() => {
              deleteItem(id);
            }}
          >
            Delete
          </Button>
          <Button
            variant={"outline"}
            onClick={() => setOpen(!open)}
          >

            Cancel</Button>
        </DialogFooter>
      </ResponsiveDialog>
    </>
  )
}