import React from "react";

const CategoriesPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  return <div>page</div>;
};

export default CategoriesPage;
