import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { sanityClient } from "@/lib/sanity/client";
import { ALL_PRODUCTS_QUERY } from "@/lib/sanity/queries";
import { mapSanityProduct } from "@/lib/sanity/types";
import type { SanityProduct } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse Ishikka RoseGleam earrings, rings, necklaces, bracelets, and jewelry sets.",
  openGraph: {
    title: "Shop Ishikka RoseGleam",
    description: "Luxury jewelry collections for elegant modern styling."
  }
};

export default async function ShopPage() {
  const sanityProducts = await sanityClient.fetch<SanityProduct[]>(ALL_PRODUCTS_QUERY);
  const products = sanityProducts.map(mapSanityProduct);

  return (
    <main>
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Shop"
          title="Explore the full RoseGleam collection"
          description="Search, filter, sort, and browse premium jewelry pieces prepared with scalable local product data."
        />
      </section>
      <ProductGrid products={products} />
    </main>
  );
}
