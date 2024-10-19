'use client';
import './style.css'
import productNews from "@/faker/product-news";
import ListCard from "@/components/layout/card-section";

export default function News() {
    return (
        <ListCard data={productNews} />
    )
}