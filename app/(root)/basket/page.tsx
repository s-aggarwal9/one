"use client";

import React, { useEffect, useState } from "react";
import useBasketStore from "../store";
import { SignInButton, useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import AddToBasketButton from "@/components/AddToBasketButton";
import Loader from "@/components/Loader";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

const BasketPage = () => {
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (!isSignedIn) return;

    setIsLoading(true);

    try {
      const metadata: Metadata = {
        orderNumber: "999",
        customerName: user?.fullName ?? "Customer",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "email",
        clerkUserId: user!.id,
      };
    } catch (error) {}
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  if (groupedItems.length === 0) {
    return (
      <div>
        <h1>Your Basket</h1>
        <p>Your basket is empty</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Your Basket</h1>
      <div>
        <div>
          {groupedItems?.map((item) => (
            <div key={item.product._id}>
              <div
                onClick={() => {
                  router.push(`/product/${item.product.slug?.current}`);
                }}
              >
                <div>
                  {item.product.image && (
                    <Image
                      src={imageUrl(item.product.image).url()}
                      alt={item.product.name ?? "Product Image"}
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <div>
                  <h2>{item.product.name}</h2>
                  <p>
                    Price:{" "}
                    {((item.product.price ?? 0) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div>
                <AddToBasketButton product={item.product} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3>Order Summary</h3>
          <div>
            <p>
              <span>Items:</span>
              <span>
                {groupedItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </p>
            <p>
              <span>Total:</span>
              <span>
                {useBasketStore.getState().getTotalPrice().toFixed(2)}
              </span>
            </p>
          </div>

          {isSignedIn ? (
            <button onClick={handleCheckout} disabled={isLoading}>
              {isLoading ? "Processing..." : "Checkout"}
            </button>
          ) : (
            <SignInButton mode="modal">
              <button>Sign in to Checkout</button>
            </SignInButton>
          )}
        </div>
        <div className="h-64 lg:h-0">{/* spacer */}</div>
      </div>
    </div>
  );
};

export default BasketPage;
