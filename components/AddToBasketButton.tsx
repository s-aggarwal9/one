"use client";

import useBasketStore from "@/app/(root)/store";
import { ProductType } from "@/sanity.types";
import React, { useEffect, useState } from "react";

interface AddToBasketButtonProps {
  product: ProductType;
  disabled?: boolean;
}

const AddToBasketButton = ({ product, disabled }: AddToBasketButtonProps) => {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
        itemCount === 0
          ? "ng-gray-100 cursor-not-allowed"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      <button
        onClick={() => removeItem(product._id)}
        disabled={itemCount === 0}
      >
        <span>-</span>
      </button>
      <span>{itemCount}</span>
      <button onClick={() => addItem(product)} disabled={disabled}>
        <span>+</span>
      </button>
    </div>
  );
};

export default AddToBasketButton;
