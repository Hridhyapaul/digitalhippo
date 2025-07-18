"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const itemCount = 1; // Placeholder for item count, replace with actual state management

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        ></ShoppingCart>
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5">
          <SheetTitle>Cart(0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col px-4">
              {/* TODO: CART LOGIC */}
              Cart items
            </div>
            <div className="space-y-4 px-4">
              <Separator></Separator>
              <div className="space-y-1.5 text-sm text-muted-foreground">
                <div className="flex">
                    <span className="flex-1">Shipping</span>
                    <span>Free</span>
                </div>
                <div className="flex">
                    <span className="flex-1">Transaction Fee</span>
                    <span>{formatPrice(100)}</span>
                </div>
                <div className="flex">
                    <span className="flex-1">Total</span>
                    <span>{formatPrice(100)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                    <Link href="/cart" className={buttonVariants({className: "w-full"})}>
                    Continue to Checkout
                    </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          ""
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
