"use client";

import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const pageSize = 6;

export function ProductGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesQuery =
        normalized.length === 0 ||
        product.name.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized);

      return matchesCategory && matchesQuery;
    });

    return filtered.toSorted((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "newest") return b.slug.localeCompare(a.slug);
      return b.reviews - a.reviews;
    });
  }, [category, query, sort]);

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  function updateCategory(value: string) {
    setCategory(value);
    setPage(1);
  }

  function updateQuery(value: string) {
    setQuery(value);
    setPage(1);
  }

  function updateSort(value: string) {
    setSort(value);
    setPage(1);
  }

  return (
    <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 rounded-[2rem] border border-coffee/10 bg-ivory p-4 shadow-luxury lg:grid-cols-[1fr_220px]">
          <label className="flex min-h-13 items-center gap-3 rounded-full border border-coffee/10 bg-white px-5 focus-within:border-gold">
            <Search size={18} className="text-coffee" />
            <span className="sr-only">Search jewelry</span>
            <input
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search earrings, rings, necklaces..."
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-espresso/40"
            />
          </label>
          <label className="flex min-h-13 items-center gap-3 rounded-full border border-coffee/10 bg-white px-5">
            <SlidersHorizontal size={18} className="text-coffee" />
            <span className="sr-only">Sort products</span>
            <select
              value={sort}
              onChange={(event) => updateSort(event.target.value)}
              className="w-full bg-transparent text-sm text-ink outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price low to high</option>
              <option value="price-high">Price high to low</option>
              <option value="rating">Highest rated</option>
            </select>
          </label>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
          {["all", ...categories.map((item) => item.slug), "sets"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => updateCategory(item)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold capitalize transition focus-luxury",
                category === item
                  ? "border-espresso bg-espresso text-white"
                  : "border-coffee/15 bg-white text-espresso/70 hover:border-gold hover:text-coffee"
              )}
            >
              {item === "all" ? "All Jewelry" : item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {visibleProducts.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-coffee/10 bg-ivory p-10 text-center">
            <p className="font-serif text-2xl text-ink">No pieces match this search.</p>
            <p className="mt-2 text-sm text-espresso/60">Try another category or search term.</p>
          </div>
        ) : null}

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-coffee/10 pt-6">
          <p className="text-sm text-espresso/60">
            Showing {visibleProducts.length} of {filteredProducts.length} pieces
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage((value) => Math.max(1, value - 1))}
              disabled={page === 1}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-coffee/15 text-coffee transition hover:border-gold disabled:cursor-not-allowed disabled:opacity-35 focus-luxury"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="min-w-20 text-center text-sm font-semibold text-ink">
              {page} / {pageCount}
            </span>
            <button
              type="button"
              onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
              disabled={page === pageCount}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-coffee/15 text-coffee transition hover:border-gold disabled:cursor-not-allowed disabled:opacity-35 focus-luxury"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
