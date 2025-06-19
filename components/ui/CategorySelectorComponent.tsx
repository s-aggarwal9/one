import { Category } from "@/sanity.types";
import React from "react";

interface CategorySelectorProps {
  categories: Category[];
}

const CategorySelectorComponent = ({ categories }: CategorySelectorProps) => {
  return <div>CategorySelectorComponent</div>;
};

export default CategorySelectorComponent;
