import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { categories, instagramImages, newArrivals, products, testimonials, trustItems } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <Hero />

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Collections"
            title="Designed for every elegant detail"
            description="Curated categories that make it easy to discover the right finishing touch."
          />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Featured Products"
              title="The RoseGleam edit"
              description="High-conversion product cards with quick view, pricing, ratings, and clear purchase actions."
              align="left"
              className="mx-0"
            />
            <Link
              href="/shop"
              className="inline-flex min-h-12 items-center justify-center self-start rounded-full border border-coffee/20 px-6 text-sm font-semibold text-espresso transition hover:border-gold hover:bg-white focus-luxury"
            >
              View All
              <ArrowRight className="ml-2" size={17} />
            </Link>
          </div>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="New Arrivals"
            title="Fresh pieces for refined styling"
            description="A horizontal showcase for launches, seasonal edits, and high-intent browsing."
          />
          <div className="mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
            {newArrivals.map((product) => (
              <div key={product.slug} className="min-w-[78%] snap-start sm:min-w-[360px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Premium trust signals for a real launch"
            description="Every section is designed to reduce hesitation and increase perceived value."
            theme="dark"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/7 p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-espresso">
                    <Icon size={21} />
                  </div>
                  <h3 className="font-serif text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-ivory shadow-luxury">
            <Image
              src="/images/product-aurora-set.png"
              alt="Ishikka RoseGleam jewelry set"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Brand Story"
              title="A softer expression of modern luxury"
              description="Ishikka RoseGleam is built around jewelry that feels polished without being loud. The collection balances warm gold tones, rose accents, and graceful silhouettes for women who want elegance that works across everyday moments and special occasions."
              align="left"
              className="mx-0"
            />
            <Link
              href="/about"
              className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-espresso px-7 text-sm font-semibold text-white transition hover:bg-coffee focus-luxury"
            >
              Discover Our Story
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Instagram"
            title="Styled in luminous moments"
            description="A visual social proof grid for editorial content and future customer styling."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {instagramImages.map((image, index) => (
              <a
                key={image}
                href="https://instagram.com"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-luxury focus-luxury"
                aria-label={`Instagram image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`Ishikka RoseGleam Instagram styling ${index + 1}`}
                  width={700}
                  height={700}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-espresso/0 text-white opacity-0 transition group-hover:bg-espresso/35 group-hover:opacity-100">
                  <Instagram size={22} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Quiet luxury, clearly felt"
            description="Elegant review cards designed to add credibility without clutter."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </main>
  );
}
