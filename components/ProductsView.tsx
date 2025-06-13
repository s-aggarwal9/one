import { Category, ProductType } from "@/sanity.types";
import React from "react";

interface ProductsViewProps {
  products: ProductType[];
  categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  return (
    <div>
      <div>{/* <CategorySelectorComponent categories={categories}/> */}</div>
      <div>{/* <ProductGrid products={products} /> */}</div>
    </div>
  );
};

export default ProductsView;
