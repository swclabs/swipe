'use client';
import { Card, CardHeader, Image } from "@nextui-org/react";
import './style.css'
import productNews from "@/faker/product-news";
import ListCard from "@/components/layout/card-section";

export default function Product() {
    return (
        <ListCard data={productNews} />
    )
}