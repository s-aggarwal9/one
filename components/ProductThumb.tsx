import { imageUrl } from "@/lib/imageUrl";
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
            src={imageUrl(product.image).url()}
            alt={product.name || "Product image"}
            width={20}
            height={20}
          />
        )}
        {isOutOfStock && (
          <div>
            <span>Out of Stock</span>
          </div>
        )}
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description ? product.description : "no desc available"}</p>
        <p>Rs. {product.price?.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export { ProductThumb };
