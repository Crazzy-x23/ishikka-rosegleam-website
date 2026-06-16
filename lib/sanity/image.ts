import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function sanityImageUrl(
  source: SanityImageSource | null | undefined,
  width = 900,
  height = 1100
): string {
  if (!source) return "";
  try {
    return urlFor(source).width(width).height(height).auto("format").url();
  } catch {
    return "";
  }
}
