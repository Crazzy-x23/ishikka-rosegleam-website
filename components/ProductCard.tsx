import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group luxury-ring overflow-hidden rounded-3xl bg-white p-px shadow-luxury">
      <div className="overflow-hidden rounded-3xl bg-white">
        <Link href={`/products/${product.slug}`} className="block overflow-hidden bg-ivory focus-luxury">
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={1100}
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="rounded-full bg-pearl px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-coffee">
              {product.tag}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-espresso/65">
              <Star size={14} className="fill-gold text-gold" />
              {product.rating}
            </span>
          </div>
          <h3 className="font-serif text-xl text-ink">
            <Link href={`/products/${product.slug}`} className="transition hover:text-coffee focus-luxury">
              {product.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm capitalize text-espresso/55">{product.category}</p>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-semibold text-ink">{formatCurrency(product.price)}</p>
            <div className="flex gap-2">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-coffee/15 text-coffee transition hover:border-gold hover:bg-ivory focus-luxury"
                aria-label={`Quick view ${product.name}`}
              >
                <Eye size={17} />
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-espresso text-white transition hover:bg-coffee focus-luxury"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
