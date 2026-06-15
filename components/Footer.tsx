"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname && pathname.startsWith("/admin")) return null;

  return (
    <footer data-testid="site-footer" className="border-t border-coffee-100/60 bg-cream-100">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-12 gap-12 text-coffee-700">
        <div className="md:col-span-7">
          <div className="font-serif text-3xl text-coffee-900">
            rosé<span className="italic font-light">Gleam</span>
          </div>
          <p className="mt-5 max-w-sm text-coffee-700 leading-relaxed">
            Minimal jewelry, thoughtfully made for everyday wear. Crafted with care by Ishikka.
          </p>
        </div>


        <div className="md:col-span-4">
          <div className="label-eyebrow mb-5">Connect</div>
          <div className="flex flex-col gap-4 text-sm">
            <a
              href="https://www.instagram.com/rosegleam.in/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="inline-flex items-center gap-3 hover:text-coffee-900 transition-colors focus-luxury"
            >
              <Instagram size={16} /> @rosegleam.in
            </a>

            <a
              href="mailto:ishikkarosegleamofficial@gmail.com"
              data-testid="footer-email"
              className="inline-flex items-center gap-3 hover:text-coffee-900 transition-colors focus-luxury"
            >
              <Mail size={16} /> ishikkarosegleamofficial@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-coffee-100/60">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs tracking-[0.2em] uppercase text-coffee-500">
            © {new Date().getFullYear()} roséGleam — Ishikka
          </div>
        </div>
      </div>
    </footer>
  );
}
