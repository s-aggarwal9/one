import { sanityFetch } from "../live";
import { defineQuery } from "next-sanity";

const getAllProducts = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(
    `*[_type == "productType"] | order(name asc)`
  );

  try {
    const products = await sanityFetch({ query: ALL_PRODUCTS_QUERY });
    return products.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export { getAllProducts };
