import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse Ishikka RoseGleam earrings, rings, necklaces, bracelets, and jewelry sets.",
  openGraph: {
    title: "Shop Ishikka RoseGleam",
    description: "Luxury jewelry collections for elegant modern styling."
  }
};

export default function ShopPage() {
  return (
    <main>
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Shop"
          title="Explore the full RoseGleam collection"
          description="Search, filter, sort, and browse premium jewelry pieces prepared with scalable local product data."
        />
      </section>
      <ProductGrid />
    </main>
  );
}
