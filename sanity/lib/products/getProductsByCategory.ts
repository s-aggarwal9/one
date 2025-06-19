import { defineQuery } from "next-sanity";
import React from "react";
import { sanityFetch } from "../live";

const getProductsByCategory = async (categorySlug: string) => {
  const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
    *[_type=="productType" && references(*[_type == "categoryType" && slug.current == $categorySlug]._id)]| order(name asc)`);

  try {
    const products = await sanityFetch({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: { categorySlug },
    });
    return products.data || [];
  } catch (error) {
    console.error("error fetching product by id:", error);
    return [];
  }
};

export default getProductsByCategory;
