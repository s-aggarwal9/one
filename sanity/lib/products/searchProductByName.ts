import { defineQuery } from "next-sanity";

export const searchProductsByName = async (searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(
    `*[_type == "product", && name match $searchParam]| order(name asc)`
  );
};
