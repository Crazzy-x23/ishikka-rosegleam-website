"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname && pathname.startsWith("/admin")) return null;

  return (
    <header
      data-testid="site-navbar"
      className="sticky top-0 z-50 backdrop-blur-xl bg-cream-50/80 border-b border-coffee-100/60"
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link
          href="/"
          data-testid="nav-logo"
          className="font-serif text-xl md:text-2xl tracking-tight text-coffee-900 focus-luxury"
        >
          rosé<span className="italic font-light text-coffee-700">Gleam</span>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={`text-xs tracking-[0.25em] uppercase transition-colors focus-luxury ${
                  isActive ? "text-coffee-900 font-semibold" : "text-coffee-500 hover:text-coffee-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/shop"
            data-testid="nav-shop-cta"
            className="text-xs tracking-[0.25em] uppercase text-coffee-900 border-b border-coffee-900 pb-1 hover:opacity-70 transition-opacity focus-luxury"
          >
            Browse Collection
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          className="md:hidden text-coffee-900 focus-luxury"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-coffee-100/60 bg-cream-50">
          <div className="container-x py-6 flex flex-col gap-5">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  className={`text-sm tracking-[0.2em] uppercase focus-luxury ${
                    isActive ? "text-coffee-900 font-semibold" : "text-coffee-500"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
