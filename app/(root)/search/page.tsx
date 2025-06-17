import { ProductGrid } from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductByName";
import React from "react";

const page = async ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products.length) {
    return (
      <div>
        <div>
          <h1>No Products found for: {query}</h1>
          <p>Try seacrhing with different keywords</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>Search results for {query}</h1>
        <ProductGrid products={products} />
        <h1>RR</h1>
      </div>
    </div>
  );
};

export default page;
