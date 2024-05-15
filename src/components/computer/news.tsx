'use client';
import { Card, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import productNews from "@/faker/product-news";
import ListCard from "../common/card-section";

export default function News() {
    return (
        <ListCard data={productNews} />
    )
}