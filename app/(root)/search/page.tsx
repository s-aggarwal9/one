import React from "react";

const page = async ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);
  return <div>page {query}</div>;
};

export default page;
