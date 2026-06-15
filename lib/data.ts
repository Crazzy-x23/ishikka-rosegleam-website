import { Gem, Heart, ShieldCheck, Sparkles, Truck, WalletCards } from "lucide-react";

export type Category = {
  name: string;
  slug: string;
  description: string;
  image: string;
};

export type Product = {
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  gallery: string[];
  tag: string;
  description: string;
  features: string[];
  material: string;
  rating: number;
  reviews: number;
};

export const categories: Category[] = [
  {
    name: "Earrings",
    slug: "earrings",
    description: "Sculptural accents for everyday radiance.",
    image: "/images/collection-earrings.png"
  },
  {
    name: "Rings",
    slug: "rings",
    description: "Refined silhouettes with luminous detail.",
    image: "/images/collection-rings.png"
  },
  {
    name: "Necklaces",
    slug: "necklaces",
    description: "Elegant lines designed to frame the neckline.",
    image: "/images/collection-necklaces.png"
  },
  {
    name: "Bracelets",
    slug: "bracelets",
    description: "Graceful finishing touches for layered styling.",
    image: "/images/collection-bracelets.png"
  }
];

export const products: Product[] = [
  {
    name: "Luna Gleam Hoops",
    slug: "luna-gleam-hoops",
    category: "earrings",
    price: 128,
    image: "/images/product-luna-hoops.png",
    gallery: ["/images/product-luna-hoops.png", "/images/collection-earrings.png", "/images/instagram-1.png"],
    tag: "Best Seller",
    description:
      "Polished hoop earrings with a soft rose-gold glow, created for clean day-to-evening styling.",
    features: ["Lightweight feel", "Rose-gold finish", "Secure hinged closure", "Gift-ready presentation"],
    material: "18k gold-plated brass, cubic zirconia",
    rating: 4.9,
    reviews: 82
  },
  {
    name: "Aurelia Solitaire Ring",
    slug: "aurelia-solitaire-ring",
    category: "rings",
    price: 156,
    image: "/images/product-aurelia-ring.png",
    gallery: ["/images/product-aurelia-ring.png", "/images/collection-rings.png", "/images/instagram-2.png"],
    tag: "New Arrival",
    description:
      "A refined solitaire ring with a luminous center stone and slender polished band.",
    features: ["Brilliant-cut stone", "Comfort-fit band", "High-polish setting", "Adjustable sizing"],
    material: "Gold-plated sterling silver, premium zircon",
    rating: 4.8,
    reviews: 64
  },
  {
    name: "Rose Pendant Necklace",
    slug: "rose-pendant-necklace",
    category: "necklaces",
    price: 184,
    image: "/images/product-rose-pendant.png",
    gallery: ["/images/product-rose-pendant.png", "/images/collection-necklaces.png", "/images/instagram-3.png"],
    tag: "Signature",
    description:
      "A delicate pendant necklace designed with warm gold tones and a rose-inspired center detail.",
    features: ["Adjustable chain", "Rose-inspired pendant", "Layering length", "Hypoallergenic finish"],
    material: "18k gold vermeil, blush crystal",
    rating: 4.9,
    reviews: 91
  },
  {
    name: "Serene Cuff Bracelet",
    slug: "serene-cuff-bracelet",
    category: "bracelets",
    price: 142,
    image: "/images/product-serene-bracelet.png",
    gallery: ["/images/product-serene-bracelet.png", "/images/collection-bracelets.png", "/images/instagram-4.png"],
    tag: "Limited Edit",
    description:
      "A minimal cuff bracelet with subtle crystal points and a graceful open silhouette.",
    features: ["Open cuff profile", "Easy stack styling", "Crystal end caps", "Soft satin polish"],
    material: "Gold-plated alloy, crystal accents",
    rating: 4.7,
    reviews: 47
  },
  {
    name: "Aurora Jewelry Set",
    slug: "aurora-jewelry-set",
    category: "sets",
    price: 238,
    image: "/images/product-aurora-set.png",
    gallery: ["/images/product-aurora-set.png", "/images/instagram-5.png", "/images/product-rose-pendant.png"],
    tag: "Occasion Wear",
    description:
      "A coordinated necklace and earring set with refined sparkle for ceremonies and evening styling.",
    features: ["Matched necklace and earrings", "Occasion-ready sparkle", "Adjustable chain", "Premium gift box"],
    material: "Gold-plated brass, crystal stones",
    rating: 4.9,
    reviews: 73
  },
  {
    name: "Celeste Pearl Necklace",
    slug: "celeste-pearl-necklace",
    category: "necklaces",
    price: 198,
    image: "/images/product-celeste-necklace.png",
    gallery: ["/images/product-celeste-necklace.png", "/images/instagram-6.png", "/images/collection-necklaces.png"],
    tag: "Editorial Pick",
    description:
      "A modern pearl necklace with a balanced strand and soft golden clasp detail.",
    features: ["Pearl-inspired finish", "Gold clasp accent", "Elegant collar length", "Timeless silhouette"],
    material: "Glass pearls, gold-plated clasp",
    rating: 4.8,
    reviews: 58
  },
  {
    name: "Noor Stacking Bangles",
    slug: "noor-stacking-bangles",
    category: "bracelets",
    price: 132,
    image: "/images/product-noor-bangles.png",
    gallery: ["/images/product-noor-bangles.png", "/images/collection-bracelets.png", "/images/product-serene-bracelet.png"],
    tag: "Stacking Essential",
    description:
      "Three polished bangles designed for quiet shimmer and effortless daily layering.",
    features: ["Set of three", "Smooth rounded edges", "Stackable design", "Warm gold tone"],
    material: "Gold-plated stainless steel",
    rating: 4.7,
    reviews: 39
  },
  {
    name: "Opal Whisper Studs",
    slug: "opal-whisper-studs",
    category: "earrings",
    price: 116,
    image: "/images/product-opal-studs.png",
    gallery: ["/images/product-opal-studs.png", "/images/collection-earrings.png", "/images/product-luna-hoops.png"],
    tag: "Gift Favorite",
    description:
      "Soft opal-inspired studs with a fine golden rim and delicate everyday proportion.",
    features: ["Low-profile setting", "Opal-inspired stones", "Comfort post backs", "Minimal shine"],
    material: "Gold-plated sterling silver, opal glass",
    rating: 4.8,
    reviews: 52
  }
];

export const newArrivals = products.filter((product) =>
  ["aurelia-solitaire-ring", "rose-pendant-necklace", "serene-cuff-bracelet", "opal-whisper-studs"].includes(product.slug)
);

export const testimonials = [
  {
    name: "Ananya M.",
    location: "Mumbai",
    quote:
      "The finish feels refined and the packaging made it feel like a true luxury purchase.",
    rating: 5
  },
  {
    name: "Riya S.",
    location: "Bengaluru",
    quote:
      "Elegant pieces that do not look mass-market. The necklace became my default evening piece.",
    rating: 5
  },
  {
    name: "Meera K.",
    location: "Delhi",
    quote:
      "Beautiful styling, fast support, and the jewelry photographs exactly how it arrives.",
    rating: 5
  }
];

export const trustItems = [
  {
    title: "Premium Quality",
    description: "Carefully selected finishes, stones, and closures.",
    icon: Gem
  },
  {
    title: "Elegant Designs",
    description: "Modern silhouettes with a refined feminine point of view.",
    icon: Sparkles
  },
  {
    title: "Secure Payments",
    description: "Checkout-ready structure for trusted online purchasing.",
    icon: WalletCards
  },
  {
    title: "Fast Shipping",
    description: "Launch-ready shipping messaging for domestic orders.",
    icon: Truck
  },
  {
    title: "Customer Support",
    description: "Responsive pre-purchase and post-purchase assistance.",
    icon: ShieldCheck
  }
];

export const brandValues = [
  "Refined daily elegance",
  "Honest quality presentation",
  "Thoughtful gifting experience",
  "Modern feminine confidence"
];

export const instagramImages = [
  "/images/instagram-1.png",
  "/images/instagram-2.png",
  "/images/instagram-3.png",
  "/images/instagram-4.png",
  "/images/instagram-5.png",
  "/images/instagram-6.png"
];

export const featureIcons = { Heart };
