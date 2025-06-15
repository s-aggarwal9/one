import { ProductType } from "@/sanity.types";
import Image from "next/image";
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
        {product.image && (
          <Image
            src={ImageUrl(product.image).url()}
            alt={product.name || "Product image"}
          />
        )}
        {isOutOfStock && (
          <div>
            <span>Out of Stock</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductThumb;
