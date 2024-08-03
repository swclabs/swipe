'use client';
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import AccessoryComponent from "@/components/common/accessories";
import accessories from "@/faker/accessory";

export default function Accessories() {
    return (
        <AccessoryComponent data={accessories} />
    )
}