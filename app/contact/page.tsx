import type { Metadata } from "next";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Ishikka RoseGleam for jewelry orders, styling support, and business information.",
  openGraph: {
    title: "Contact Ishikka RoseGleam",
    description: "Reach the Ishikka RoseGleam jewelry studio."
  }
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Speak with Ishikka RoseGleam"
          description="A refined contact experience for product questions, gifting requests, order support, and future boutique information."
        />
      </section>

      <section className="bg-ivory px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="grid gap-5">
            <article className="rounded-[2rem] bg-espresso p-7 text-white shadow-luxury">
              <MessageCircle className="text-gold" size={28} />
              <h2 className="mt-5 font-serif text-3xl">WhatsApp Orders</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Fastest path for product questions, availability, and order guidance.
              </p>
              <Link
                href="https://wa.me/919974571067"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-espresso transition hover:bg-gold focus-luxury"
              >
                Chat on WhatsApp
              </Link>
            </article>

            <article className="rounded-[2rem] bg-white p-7 shadow-luxury">
              <h2 className="font-serif text-3xl text-ink">Business Information</h2>
              <div className="mt-6 grid gap-4 text-sm text-espresso/70">
                <p className="flex gap-3">
                  <Mail size={18} className="mt-0.5 text-coffee" />
                  ishikkarosegleamofficial@gmail.com
                </p>

                <p className="flex gap-3">
                  <Instagram size={18} className="mt-0.5 text-coffee" />
                  @ishikkarosegleam
                </p>

              </div>
            </article>
          </div>
        </div>
      </section>


    </main>
  );
}
