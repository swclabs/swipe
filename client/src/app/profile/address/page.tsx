"use client"
import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { MapPin } from 'lucide-react';


export default function HistoryPage() {

    interface Address {
        id: number,
        city: string,
        ward: string,
        district: string,
        street: string
    }

    const [listAddress, setListAddress] = useState<Address[]>([]);

    {
        /*
        [
        {
            "id": 1,
            "city": "Hồ Chí Minh",
            "ward": "Phường Thảo Điền",
            "district": "Thành Phố Thủ Đức",
            "street": "Xa lộ Hà Nội"
        }
        ] */
    }
    useEffect(() => {
        setListAddress([
            {
                id: 1,
                city: "Hồ Chí Minh",
                ward: "Phường Thảo Điền",
                district: "Thành Phố Thủ Đức",
                street: "Xa lộ Hà Nội",
            },
            {
                id: 2,
                city: "Hồ Chí Minh",
                ward: "Phường Thảo Điền",
                district: "Thành Phố Thủ Đức",
                street: "Xa lộ Hà Nội",
            }
        ])
    }, [])

    return (
        <>
            <div className="mt-8 w-full bg-white mb-20">
                <div className="flex container mx-auto justify-between mb-4">
                    <h1 className="text-2xl font-semibold text-center">Lịch sử</h1>
                    <Button color="primary">
                        Thêm địa chỉ
                    </Button>
                </div>
                <div className="container mx-auto flex flex-col gap-4">
                    {listAddress.length === 0 ? <div> Chưa có địa chỉ nào </div> :
                        listAddress.map((address) => {
                            return <div key={address.id} className="flex w-full items-center gap-4 bg-gray-100 p-4 border rounded-lg">
                                <div>
                                    {/* Image */}
                                    <MapPin size={30} />
                                </div>
                                <div className="flex flex-col">
                                    <div>Username</div>
                                    <div className="flex">
                                        <p className="text-gray-600 text-sm">{address.city}</p>
                                        <p className="text-gray-600 text-sm">, {address.ward}</p>
                                        <p className="text-gray-600 text-sm">, {address.district}</p>
                                        <p className="text-gray-600 text-sm">, {address.street}</p>
                                    </div>
                                </div>
                            </div>
                        }
                        )}
                </div>
            </div >
        </>
    );
}