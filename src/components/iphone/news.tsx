'use client';
import './style.css'
import productNews from "@/faker/product-news";
import ListCard from "../ui-app/common/card-section";

export default function News() {
    return (
        <ListCard data={productNews} />
    )
}