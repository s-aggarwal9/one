import { type SchemaTypeDefinition } from "sanity";
import categoryType from "./categoryType";
import productType from "./productType";
import orderType from "./orderType";
import salesType from "./salesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, productType, orderType, salesType],
};
