'use client';
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import accessories from "@/faker/accessory";
import AccessoryComponent from "../common/accessories";

export default function Accessories() {
    return (
        <AccessoryComponent data={accessories} />
    )
}