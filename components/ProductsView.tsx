import { Category, ProductType } from "@/sanity.types";
import React from "react";
import { ProductGrid } from "./ProductGrid";
import CategorySelectorComponent from "./ui/CategorySelectorComponent";

interface ProductsViewProps {
  products: ProductType[];
  categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  return (
    <div>
      <div>
        <CategorySelectorComponent categories={categories} />
      </div>
      <div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export { ProductsView };
