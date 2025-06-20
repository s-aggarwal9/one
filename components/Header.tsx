"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Form from "next/form";
import { ShoppingCart, Package } from "lucide-react";
import { SignedIn } from "@clerk/nextjs";
import { Button } from "./ui/button";
import useBasketStore from "@/app/(root)/store";

const Header = () => {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const createPasskey = async () => {
    try {
      const response = user?.createPasskey();
      console.log(response);
    } catch (error) {
      console.log("Error:", JSON.stringify(error));
    }
  };

  return (
    <header>
      <div>
        <Link href="/">RR</Link>
        <Form action="/search">
          <input type="text" name="query" placeholder="Search" />
        </Form>
        <div>
          <Link href="/myBasket">
            <ShoppingCart className="w-6 h-6" />
            <span>{itemCount}</span>

            <span>My Basket</span>
          </Link>
          <ClerkLoaded>
            <SignedIn>
              <Link href="myorders">
                <Package />
                <span>orders</span>
              </Link>
            </SignedIn>

            {user ? (
              <div>
                <UserButton />
                <div>
                  <p>Welcome Back</p>
                  <p>{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
            {user?.passkeys.length === 0 && (
              <Button onClick={createPasskey}>Create Passkey</Button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
