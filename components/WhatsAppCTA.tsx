import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

type WhatsAppCTAProps = {
  title?: string;
  description?: string;
};

export function WhatsAppCTA({
  title = "Need styling help before you order?",
  description = "Connect on WhatsApp for product guidance, gifting support, and availability questions."
}: WhatsAppCTAProps) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-espresso px-6 py-10 text-white shadow-luxury sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
        <div>
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-espresso">
            <MessageCircle size={22} />
          </div>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{description}</p>
        </div>
        <Link
          href="https://wa.me/919974571067"
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-espresso transition hover:bg-gold focus-luxury"
        >
          Order on WhatsApp
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </section>
  );
}
