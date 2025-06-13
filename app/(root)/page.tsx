import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>RR RR</h1>
      <div>
        hi
        {/* <ProductsView products={products} categories={categories} /> */}
      </div>
    </div>
  );
}
