"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import data from "@/faker/mac";


const rows = [
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
    },
    {
        delevery_id: 3,
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
];

const columns = [
    {
        key: "delevery_id",
        label: "Delivery ID",
    },
    {
        key: "product",
        label: "Product",
    },
    {
        key: "quantity",
        label: "Quantity",
    },
];

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



    return (
        <div className="mt-8 w-full bg-white mb-20">
            <div className="container mx-auto">
                <Table aria-label="Example table with dynamic content">
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.delevery_id}</TableCell>
                                <TableCell>{row.product.map((value, index) => (
                                    <div key={index}>
                                        <p>{value.inventory_id}</p>
                                        <p>{value.specs_id}</p>
                                    </div>
                                ))}
                                </TableCell>
                                <TableCell>{row.product.map((value, index) => (
                                    <div key={index}>

                                        <p>{value.quantity}</p>

                                    </div>
                                ))}
                                </TableCell>
                            </TableRow>
                        )
                        )}
                    </TableBody>
                </Table>
            </div>
        </div >
    );
}