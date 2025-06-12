import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("RR")
    .items([
      S.documentTypeListItem("productType").title("Products"),
      S.documentTypeListItem("categoryType").title("Categories"),
      S.documentTypeListItem("orderType").title("Orders"),
      S.documentTypeListItem("salesType").title("Sales"),
    ]);
