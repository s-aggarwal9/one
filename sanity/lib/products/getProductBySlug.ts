import { defineQuery } from "next-sanity";
import React from "react";
import { sanityFetch } from "../live";

const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_ID_QUERY = defineQuery(`
    *[_type=="productType" && slug.current ==$slug]| order(name asc)[0]`);

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_ID_QUERY,
      params: { slug },
    });
    return product.data || null;
  } catch (error) {
    console.error("error fetching product by id:", error);
    return null;
  }
};

export default getProductBySlug;
