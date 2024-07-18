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
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';

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

  // if (isDesktop) {
  //   return (
  //     <Dialog open={isOpen} onOpenChange={setIsOpen}>
  //       <DialogContent className="sm:max-w-[425px]">
  //         <DialogHeader>
  //           <DialogTitle>{title}</DialogTitle>
  //           {description && (
  //             <DialogDescription>{description}</DialogDescription>
  //           )}
  //         </DialogHeader>
  //         {children}
  //       </DialogContent>
  //     </Dialog>
  //   );
  // }


  // return (
  //   <Drawer open={isOpen} onOpenChange={setIsOpen}>
  //     <DrawerContent>
  //       <DrawerHeader className="text-left">
  //         <DrawerTitle>{title}</DrawerTitle>
  //         {description && <DialogDescription>{description}</DialogDescription>}
  //       </DrawerHeader>
  //       {children}
  //       <DrawerFooter className="pt-2">
  //         <DrawerClose asChild>
  //           <Button variant="outline">Cancel</Button>
  //         </DrawerClose>
  //       </DrawerFooter>
  //     </DrawerContent>
  //   </Drawer>
  // );
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

export const DeleteConfirmDialog = ({
  id,
  isOpen,
  setIsOpen,
  deletefunc,
}: {
  id: number,
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deletefunc: (id: number) => void;
}) => {
  return (
    <ResponsiveDialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Edit Product"
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
            deletefunc(id);
            window.location.reload();
          }}
        >
          Delete
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setIsOpen(!isOpen)}
        >

          Cancel</Button>
      </DialogFooter>
    </ResponsiveDialog>
  )
}