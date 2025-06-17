import React from "react";
import { ProductType } from "@/sanity.types";
import { ProductThumb } from "./ProductThumb";

const ProductGrid = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <ProductThumb key={product._id} product={product} />
          </div>
        );
      })}
    </div>
  );
};

export { ProductGrid };
