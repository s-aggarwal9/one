import AddToBasketButton from "@/components/AddToBasketButton";
import { imageUrl } from "@/lib/imageUrl";
import getProductBySlug from "@/sanity/lib/products/getProductBySlug";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const productPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  const isOutOfStock = product.stock != null && product.stock <= 0;
  return (
    <div>
      <div>
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
          <h1>{product.name}</h1>
          <div>{product.price?.toFixed(2)}</div>
          {product.description && <p>{product.description}</p>}
        </div>
        <div className="mt-6">
          <AddToBasketButton product={product} disabled={isOutOfStock} />
        </div>
      </div>
    </div>
  );
};

export default productPage;
