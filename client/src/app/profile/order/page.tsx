"use client"
import React from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/table";

const TableHeaderRow = () => {
    return (
        <TableRow>
            <TableHeader>
                <TableColumn>ID</TableColumn>
            </TableHeader>
            <TableHeader>
                <TableColumn>Product</TableColumn>
            </TableHeader>
            <TableHeader>
                <TableColumn>Quantity</TableColumn>
            </TableHeader>
        </TableRow>
    )
}

export default function AccountPage() {
    /*{
        "delevery_id": "<integer>",
        "product": [
            {
            "inventory_id": "<integer>",
            "quantity": "<integer>",
            "specs_id": "<integer>"
            },
            {
            "inventory_id": "<integer>",
            "quantity": "<integer>",
            "specs_id": "<integer>"
            }
        ]
    } */

    const order = [
        {
            delevery_id: 1,
            product: [
                {
                    inventory_id: 1,
                    quantity: 1,
                    specs_id: 1,
                },
                {
                    inventory_id: 2,
                    quantity: 2,
                    specs_id: 2,
                }
            ]
        },
        {
            delevery_id: 2,
            product: [
                {
                    inventory_id: 1,
                    quantity: 1,
                    specs_id: 1,
                },
                {
                    inventory_id: 2,
                    quantity: 2,
                    specs_id: 2,
                }
            ]
        }
    ]

    return (
        <div className="mt-8 w-full bg-white mb-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-full bg-gray-100 rounded-lg border p-8 gap-4 md:gap-36">

            </div>
        </div >
    );
}