import type { Product } from "@/lib/data";
import { sanityImageUrl } from "./image";

export type SanityImage = {
  _type: "image";
  _key?: string;
  asset: {
    _type: "reference";
    _ref: string;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
};

export type SanityProduct = {
  _id: string;
  name: string;
  slug: string | null;
  price: number | null;
  description: string | null;
  images: SanityImage[] | null;
  category: string | null;
  tag: string | null;
  material: string | null;
  features: string[] | null;
  rating: number | null;
  reviews: number | null;
  featured: boolean | null;
  newArrival: boolean | null;
};

export type SanityProductSlug = {
  slug: string;
};

const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  earrings: "/images/product-luna-hoops.png",
  rings: "/images/product-aurelia-ring.png",
  necklaces: "/images/product-rose-pendant.png",
  bracelets: "/images/product-serene-bracelet.png",
  sets: "/images/product-aurora-set.png",
};

export function mapSanityProduct(sanityProduct: SanityProduct): Product {
  const category = (sanityProduct.category ?? "earrings").toLowerCase();
  const fallbackImage = CATEGORY_FALLBACK_IMAGES[category] ?? "/images/product-luna-hoops.png";

  const primaryImage = (sanityProduct.images && sanityProduct.images.length > 0)
    ? (sanityImageUrl(sanityProduct.images[0]) || fallbackImage)
    : fallbackImage;

  const gallery = (sanityProduct.images && sanityProduct.images.length > 0)
    ? sanityProduct.images.map((img) => sanityImageUrl(img)).filter(Boolean)
    : [];

  if (gallery.length === 0) {
    gallery.push(fallbackImage);
  }

  return {
    name: sanityProduct.name ?? "",
    slug: sanityProduct.slug ?? sanityProduct._id,
    category: sanityProduct.category ?? "earrings",
    price: sanityProduct.price ?? 0,
    image: primaryImage,
    gallery: gallery,
    tag: sanityProduct.tag ?? "",
    description: sanityProduct.description ?? "",
    features: sanityProduct.features ?? [],
    material: sanityProduct.material ?? "",
    rating: sanityProduct.rating ?? 5,
    reviews: sanityProduct.reviews ?? 0,
  };
}
