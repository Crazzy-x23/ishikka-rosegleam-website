import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/data";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/shop?category=${category.slug}`}
      data-testid={`category-card-${category.slug}`}
      className="group relative aspect-[3/4] overflow-hidden bg-cream-200 block focus-luxury"
    >
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 via-coffee-900/10 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cream-50">
        <div className="font-serif text-xl md:text-2xl">{category.name}</div>
        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  );
}
