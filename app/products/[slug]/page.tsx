import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { sanityClient } from "@/lib/sanity/client";
import { ALL_PRODUCTS_QUERY, ALL_PRODUCT_SLUGS_QUERY, PRODUCT_BY_SLUG_QUERY, RELATED_PRODUCTS_QUERY } from "@/lib/sanity/queries";
import { mapSanityProduct } from "@/lib/sanity/types";
import type { SanityProduct, SanityProductSlug } from "@/lib/sanity/types";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch<SanityProductSlug[]>(ALL_PRODUCT_SLUGS_QUERY);
  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const rawProduct = await sanityClient.fetch<SanityProduct | null>(PRODUCT_BY_SLUG_QUERY, { slug });

  if (!rawProduct) {
    return {
      title: "Product Not Found"
    };
  }

  const product = mapSanityProduct(rawProduct);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Ishikka RoseGleam`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 900,
          height: 1100,
          alt: product.name
        }
      ]
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  
  let rawProduct = await sanityClient.fetch<SanityProduct | null>(PRODUCT_BY_SLUG_QUERY, { slug });
  if (!rawProduct) {
    const allRaw = await sanityClient.fetch<SanityProduct[]>(ALL_PRODUCTS_QUERY);
    if (allRaw.length > 0) {
      rawProduct = allRaw[0];
    }
  }
  
  if (!rawProduct) {
    return (
      <main className="py-20 text-center">
        <p className="text-xl">No products available.</p>
      </main>
    );
  }
  
  const product = mapSanityProduct(rawProduct);
  
  const rawRelated = await sanityClient.fetch<SanityProduct[]>(RELATED_PRODUCTS_QUERY, {
    category: product.category,
    slug: product.slug,
  });
  let relatedProducts = rawRelated.map(mapSanityProduct);

  if (relatedProducts.length < 4) {
    const allRaw = await sanityClient.fetch<SanityProduct[]>(ALL_PRODUCTS_QUERY);
    const allMapped = allRaw.map(mapSanityProduct).filter((item) => item.slug !== product.slug);
    const combined = [...relatedProducts, ...allMapped];
    const seenSlugs = new Set();
    relatedProducts = combined.filter((item) => {
      if (seenSlugs.has(item.slug)) return false;
      seenSlugs.add(item.slug);
      return true;
    }).slice(0, 4);
  }

  return (
    <main>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ProductGallery images={product.gallery} name={product.name} />

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-coffee">{product.tag}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">{product.name}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-semibold text-ink">{formatCurrency(product.price)}</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-ivory px-4 py-2 text-sm text-espresso/70">
                <Star size={15} className="fill-gold text-gold" />
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="mt-6 text-base leading-8 text-espresso/70">{product.description}</p>

            <div className="mt-8 grid gap-3">
              <button
                type="button"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-espresso px-7 text-sm font-semibold text-white shadow-luxury transition hover:bg-coffee focus-luxury"
              >
                Add to Cart
                <ArrowRight className="ml-2" size={18} />
              </button>
              <Link
                href="https://wa.me/919974571067"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-coffee/20 px-7 text-sm font-semibold text-espresso transition hover:border-gold hover:bg-ivory focus-luxury"
              >
                <MessageCircle className="mr-2" size={18} />
                Order on WhatsApp
              </Link>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-coffee/10 bg-ivory p-6">
              <div className="flex gap-3">
                <ShieldCheck className="mt-1 text-coffee" size={20} />
                <div>
                  <h2 className="font-semibold text-ink">Premium purchase confidence</h2>
                  <p className="mt-2 text-sm leading-6 text-espresso/65">
                    Secure checkout structure, gift-ready presentation, and responsive support placeholders are prepared for launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <article className="rounded-[2rem] bg-white p-8 shadow-luxury lg:col-span-2">
            <h2 className="font-serif text-3xl text-ink">Description</h2>
            <p className="mt-5 text-base leading-8 text-espresso/70">{product.description}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="rounded-full border border-coffee/10 bg-ivory px-5 py-3 text-sm text-espresso/75">
                  {feature}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[2rem] bg-white p-8 shadow-luxury">
            <h2 className="font-serif text-3xl text-ink">Specifications</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-coffee/10 pb-3">
                <dt className="text-espresso/55">Material</dt>
                <dd className="text-right font-medium text-ink">{product.material}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-coffee/10 pb-3">
                <dt className="text-espresso/55">Category</dt>
                <dd className="text-right font-medium capitalize text-ink">{product.category}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-espresso/55">Packaging</dt>
                <dd className="text-right font-medium text-ink">Gift-ready box</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Reviews" title="Customer notes" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="rounded-[2rem] border border-coffee/10 bg-white p-7 shadow-luxury">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} size={15} className="fill-gold" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-espresso/70">“{review.quote}”</p>
                <p className="mt-5 font-semibold text-ink">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Related Products" title="Complete the styling story" />
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
