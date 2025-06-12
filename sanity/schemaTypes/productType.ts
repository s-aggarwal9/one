import { defineField, defineType } from "sanity";
import { ShoppingCart } from "lucide-react";
import { title } from "process";

const productType = defineType({
  name: "productType",
  title: "Product Type",
  icon: ShoppingCart,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(200),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.max(1000),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0).precision(2),
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.required().min(0).precision(2),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      price: "price",
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: select.price,
        media: select.media,
      };
    },
  },
});

export default productType;
