import { ProductType } from "@/sanity.types";
import productType from "@/sanity/schemaTypes/productType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BasketItem {
  product: ProductType;
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
  addItem: (product: ProductType) => void;
  removeItem: (productId: string) => void;
  clearBasket: () => void;
  getTotalPrice: () => number;
  getItemCount: (productId: string) => number;
  getGroupedItems: () => BasketItem;
}
