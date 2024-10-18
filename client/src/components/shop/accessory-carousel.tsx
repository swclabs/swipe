"use client";
import Image from "next/image";
import React from "react";
import { iphone_carousel } from "@/faker/iphone-carousel";
import { ProductCarouselData } from "@/types/carousel";
import { Card, ProductCarousel } from "@/components/ui/product-cards-carousel";

export function ProductCardCarousel({ carousel }: { carousel: ProductCarouselData }) {

  const data = carousel.cards.map((card, index) => {
    return {
      price: card.price,
      title: card.title,
      src: card.src,
      content: Contents(card.content),
    };
  })

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 font-sans">
        {carousel.headline}
      </h2>
      <ProductCarousel items={cards} />
    </div>
  );
}

interface Content {
  content: string;
  src: string;
}

const Contents = (blocks: Content[]) => {
  return (
    <>
      {blocks.map((block, index) => {
        return (
          <div
            key={"content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {block.content}
            </p>
            <Image
              src={block.src}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        )
      })}
    </>
  )
}