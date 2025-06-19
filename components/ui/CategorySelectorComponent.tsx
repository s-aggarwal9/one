"use client";

import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
interface CategorySelectorProps {
  categories: Category[];
}

const CategorySelectorComponent = ({ categories }: CategorySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={isOpen}>
          {value
            ? categories.find((category) => category._id === value)?.title
            : "Filter by category"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Search Category..."
            className="h-9"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const selectedCategory = categories.find((c) => {
                  c.title
                    ?.toLocaleLowerCase()
                    .includes(e.currentTarget.value.toLowerCase());
                  if (selectedCategory?.slug?.current) {
                    setValue(selectedCategory._id);
                    router.push(`/categories/${selectedCategory.slug.current}`);
                    setIsOpen(false);
                  }
                });
              }
            }}
          />
          <CommandList>
            <CommandEmpty>No category found</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category._id}
                  value={category.title}
                  onSelect={() => {
                    setValue(value === category._id ? "" : category._id);
                    router.push(`/categories/${category.slug?.current}`);
                    setIsOpen(false);
                  }}
                >
                  {category.title}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === category._id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategorySelectorComponent;
