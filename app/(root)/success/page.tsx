"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import useBasketStore from "../store";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);
  return (
    <div>
      <div>Success</div>
      <div>tick</div>
      <h1>Thank You for order</h1>
      <span>{orderNumber}</span>
      <div>
        <Button asChild>
          <Link href="/orders"> View Order Details</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/"> Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
