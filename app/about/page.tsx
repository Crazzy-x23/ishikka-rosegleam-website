import type { Metadata } from "next";
import Image from "next/image";
import { Gem, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { brandValues } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story, mission, vision, and values behind Ishikka RoseGleam.",
  openGraph: {
    title: "About Ishikka RoseGleam",
    description: "A modern luxury jewelry brand built around refined feminine elegance."
  }
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-coffee">About Ishikka RoseGleam</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">
              Jewelry made to feel intimate, polished, and quietly memorable.
            </h1>
            <p className="mt-7 text-lg leading-8 text-espresso/70">
              Ishikka RoseGleam is a premium fashion jewelry brand shaped around graceful proportions, warm finishes, and a refined shopping experience that earns trust quickly.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-ivory shadow-luxury">
            <Image
              src="/images/hero-rosegleam.png"
              alt="Ishikka RoseGleam editorial jewelry scene"
              width={1600}
              height={1000}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Brand Story"
            title="A refined expression of everyday ceremony"
            description="The brand is positioned for women who want jewelry that elevates daily dressing without feeling excessive. Every page is structured to support trust, value perception, and purchase confidence."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            <article className="rounded-[2rem] bg-white p-8 shadow-luxury">
              <Gem className="text-coffee" size={28} />
              <h2 className="mt-6 font-serif text-3xl text-ink">Mission</h2>
              <p className="mt-4 text-sm leading-7 text-espresso/70">
                To make premium-looking jewelry accessible through elegant design, clear quality presentation, and thoughtful customer support.
              </p>
            </article>
            <article className="rounded-[2rem] bg-white p-8 shadow-luxury">
              <Sparkles className="text-coffee" size={28} />
              <h2 className="mt-6 font-serif text-3xl text-ink">Vision</h2>
              <p className="mt-4 text-sm leading-7 text-espresso/70">
                To become a trusted destination for modern feminine jewelry that feels personal, polished, and gift-worthy.
              </p>
            </article>
            <article className="rounded-[2rem] bg-white p-8 shadow-luxury">
              <Gem className="text-coffee" size={28} />
              <h2 className="mt-6 font-serif text-3xl text-ink">Founder Story</h2>
              <p className="mt-4 text-sm leading-7 text-espresso/70">
                Founder story placeholder prepared for launch copy, press positioning, and stronger customer connection.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/product-luna-hoops.png"
              alt="RoseGleam earrings"
              width={900}
              height={1100}
              className="aspect-[4/5] rounded-[2rem] object-cover shadow-luxury"
            />
            <Image
              src="/images/product-celeste-necklace.png"
              alt="RoseGleam necklace"
              width={900}
              height={1100}
              className="mt-10 aspect-[4/5] rounded-[2rem] object-cover shadow-luxury"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Values"
              title="Built for trust before scale"
              description="The site avoids marketplace noise and focuses on the signals that matter: product clarity, quality cues, support access, and consistent visual identity."
              align="left"
              className="mx-0"
            />
            <div className="mt-8 grid gap-3">
              {brandValues.map((value) => (
                <div key={value} className="rounded-full border border-coffee/10 bg-ivory px-5 py-4 text-sm font-medium text-espresso/75">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCTA title="Have a question about a piece?" description="Ask for sizing, gifting, styling, or availability guidance directly on WhatsApp." />
    </main>
  );
}
