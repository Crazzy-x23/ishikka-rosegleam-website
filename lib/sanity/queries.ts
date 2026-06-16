// All products — used by shop page and static params
export const ALL_PRODUCTS_QUERY = `
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": coalesce(slug.current, _id),
    price,
    description,
    images,
    category,
    tag,
    material,
    features,
    rating,
    reviews,
    featured,
    newArrival
  }
`;

// Featured products for homepage (featured == true, max 4)
export const FEATURED_PRODUCTS_QUERY = `
  *[_type == "product" && featured == true] | order(_createdAt desc) [0...4] {
    _id,
    name,
    "slug": coalesce(slug.current, _id),
    price,
    description,
    images,
    category,
    tag,
    material,
    features,
    rating,
    reviews,
    featured,
    newArrival
  }
`;

// New arrivals for homepage (newArrival == true, max 4)
export const NEW_ARRIVALS_QUERY = `
  *[_type == "product" && newArrival == true] | order(_createdAt desc) [0...4] {
    _id,
    name,
    "slug": coalesce(slug.current, _id),
    price,
    description,
    images,
    category,
    tag,
    material,
    features,
    rating,
    reviews,
    featured,
    newArrival
  }
`;

// Single product by slug or ID
export const PRODUCT_BY_SLUG_QUERY = `
  *[_type == "product" && (slug.current == $slug || _id == $slug)][0] {
    _id,
    name,
    "slug": coalesce(slug.current, _id),
    price,
    description,
    images,
    category,
    tag,
    material,
    features,
    rating,
    reviews,
    featured,
    newArrival
  }
`;

// All slugs — for generateStaticParams
export const ALL_PRODUCT_SLUGS_QUERY = `
  *[_type == "product"] {
    "slug": coalesce(slug.current, _id)
  }
`;

// Products in same category — for related products section
export const RELATED_PRODUCTS_QUERY = `
  *[_type == "product" && category == $category && slug.current != $slug && _id != $slug] | order(_createdAt desc) [0...4] {
    _id,
    name,
    "slug": coalesce(slug.current, _id),
    price,
    description,
    images,
    category,
    tag,
    material,
    features,
    rating,
    reviews,
    featured,
    newArrival
  }
`;
