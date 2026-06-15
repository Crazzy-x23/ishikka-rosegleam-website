import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://ishikka-rosegleam.example"),
  title: {
    default: "Ishikka RoseGleam | Luxury Jewelry",
    template: "%s | Ishikka RoseGleam"
  },
  description:
    "Premium fashion jewelry crafted for refined everyday elegance, featuring earrings, rings, necklaces, bracelets, and curated sets.",
  openGraph: {
    title: "Ishikka RoseGleam",
    description: "Luxury jewelry for elegant women.",
    url: "https://ishikka-rosegleam.example",
    siteName: "Ishikka RoseGleam",
    images: [
      {
        url: "/images/hero-rosegleam.png",
        width: 1600,
        height: 1000,
        alt: "Ishikka RoseGleam jewelry editorial"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
