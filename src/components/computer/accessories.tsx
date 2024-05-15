'use client';
import './style.css'
import AccessoryComponent from "../ui-app/common/accessories";
import accessories from "@/faker/accessory";

export default function Accessories() {
    return (
        <AccessoryComponent data={accessories} />
    )
}