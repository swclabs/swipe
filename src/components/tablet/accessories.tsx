'use client';
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import accessories from "@/faker/accessory";
import Accessory from "../ui-app/common/accessories";

export default function Accessories() {
    return (
        <Accessory data={accessories} />
    )
}