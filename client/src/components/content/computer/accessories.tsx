'use client';
import './style.css'
import AccessoryComponent from "@/components/layout/accessories";
import accessories from "@/faker/accessory";

export default function Accessories() {
    return (
        <AccessoryComponent data={accessories} />
    )
}