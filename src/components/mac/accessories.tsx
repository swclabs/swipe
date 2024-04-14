'use client';
import './style.css'
import Accessory from "../common/accessories";
import accessories from "@/faker/accessory";

export default function Accessories() {
    return (
        <Accessory data={accessories} />
    )
}