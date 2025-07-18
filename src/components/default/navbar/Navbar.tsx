import React from "react";
import MaxWidthWrapper from "../../views/MaxWidthWrapper";
import Link from "next/link";
import Icons from "../../icons/Icons";
import NavItems from "./NavItems";
import { Button, buttonVariants } from "@/components/ui/button";
import Cart from "@/components/views/Cart";

const Navbar = () => {
  const user = null; // Placeholder for user authentication state

  return (
    <div className="bg-white sticky top-0 z-50 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems></NavItems>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-5">
                  {user ? null : (
                    <>
                      <Button variant="default" size="lg">
                        <Link href="/sign-in">Sign In</Link>
                      </Button>
                    </>
                  )}

                  {user ? null : (
                    <span
                      className="h-6 w-px bg-gray-200 "
                      aria-hidden="true"
                    ></span>
                  )}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                      })}
                    >
                      Create Account
                    </Link>
                  )}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      ></span>
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart></Cart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
