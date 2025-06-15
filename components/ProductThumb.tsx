import { ProductType } from "@/sanity.types";
import Link from "next/link";
import React from "react";

const ProductThumb = ({ product }: { product: ProductType }) => {
  const isOutOfStock = product.stock != null && product.stock <= 0;
  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`${isOutOfStock ? "opacity-50" : ""}`}
    >
      <div>
        {true && (
          <div>
            <span>Out of Stock</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductThumb;
