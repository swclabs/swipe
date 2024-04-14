'use client';
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import Accessory from "../common/accessories";
import accessories from "@/faker/accessory";

export default function Accessories() {
    return (
        <Accessory data={accessories} />

    )
}