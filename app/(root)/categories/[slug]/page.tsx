import { ProductsView } from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import getProductsByCategory from "@/sanity/lib/products/getProductsByCategory";
import React from "react";

const CategoriesPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories();
  return (
    <div>
      <div>
        <h1>
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
          Collection
        </h1>
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
