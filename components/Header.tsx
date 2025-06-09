"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Form from "next/form";
import { ShoppingCart, Package } from "lucide-react";
import { SignedIn } from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();
  return (
    <header>
      <div>
        <Link href="/">RR</Link>
        <Form action="/search">
          <input type="text" name="query" placeholder="Search" />
        </Form>
        <div>
          <Link href="/myBasket">
            <ShoppingCart />
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
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
