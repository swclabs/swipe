import * as React from 'react';

import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

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
            title="Edit Profile"
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
                            First Name
                        </Label>
                        <Input placeholder="Type your message here." className="col-span-3" onChange={(e) => {

                        }} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Last Name
                        </Label>
                        <Input placeholder="Type your message here." className="col-span-3" onChange={(e) => {

                        }} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-left">
                            Email
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
                            Phone Number
                        </Label>
                        <Input placeholder="Type your message here." className="col-span-3" onChange={(e) => {

                        }} />
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
    id: string,
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    deletefunc: (id: string) => void;
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