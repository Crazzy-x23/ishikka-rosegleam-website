"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:grid lg:content-start lg:overflow-visible">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => {
              setActiveImage(image);
              setZoomed(false);
            }}
            className={cn(
              "shrink-0 overflow-hidden rounded-2xl border bg-ivory transition focus-luxury",
              activeImage === image ? "border-gold" : "border-coffee/10 hover:border-coffee/30"
            )}
            aria-label={`View ${name} image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${name} thumbnail ${index + 1}`}
              width={120}
              height={140}
              className="h-24 w-24 object-cover"
            />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setZoomed((value) => !value)}
        className="group relative order-1 overflow-hidden rounded-[2rem] bg-ivory shadow-luxury focus-luxury lg:order-2"
        aria-label={zoomed ? "Reduce product image zoom" : "Zoom product image"}
      >
        <Image
          src={activeImage}
          alt={name}
          width={900}
          height={1100}
          priority
          className={cn(
            "aspect-[4/5] w-full object-cover transition duration-500",
            zoomed ? "scale-125" : "group-hover:scale-105"
          )}
        />
        <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-coffee shadow-luxury backdrop-blur">
          <ZoomIn size={15} />
          Zoom
        </span>
      </button>
    </div>
  );
}
