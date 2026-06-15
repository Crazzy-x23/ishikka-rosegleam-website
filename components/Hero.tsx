import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] grid grid-cols-1 lg:grid-cols-12 items-stretch bg-cream-50">
      <div className="lg:col-span-6 flex items-center container-x py-20 lg:py-0">
        <div className="max-w-xl animate-reveal">
          <div className="label-eyebrow mb-8">Ishikka roséGleam — est. 2024</div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-coffee-900 leading-[1.05] tracking-tight">
            Minimal pieces,
            <br />
            <span className="italic font-light text-coffee-700">everyday gleam.</span>
          </h1>
          <p className="mt-8 text-coffee-700 leading-relaxed text-base md:text-lg max-w-md">
            A boutique collection of handpicked jewelry — quiet luxury, made to wear from morning coffee to evening dinners.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link href="/shop" data-testid="hero-shop-btn" className="btn-primary">
              Shop Collection
            </Link>
            <Link
              href="/about"
              data-testid="hero-about-btn"
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-coffee-900 border-b border-coffee-900 pb-1 hover:opacity-70 transition-opacity focus-luxury"
            >
              Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 relative bg-cream-200 min-h-[60vh] lg:min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1694062045776-f48d9b6de57e"
          alt="Woman wearing roséGleam jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />

      </div>
    </section>
  );
}
