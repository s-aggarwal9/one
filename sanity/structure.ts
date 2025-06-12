import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("RR")
    .items([
      S.documentTypeListItem("productType").title("Products"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("order").title("Orders"),
      S.documentTypeListItem("sale").title("Sales"),
    ]);
