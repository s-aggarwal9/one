import React from "react";
import { ProductType } from "@/sanity.types";
import { AnimatePresence, motion } from "framer-motion";

const ProductGrid = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <AnimatePresence key={product._id}>
            <motion.div
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify center"
            >
              {/* <ProductThumb key={product._id} product={product}/> */}
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default ProductGrid;
