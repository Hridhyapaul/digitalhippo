"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import React, { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ✅ Check if any item is open
  const isAnyOpen = activeIndex !== null;

  // ✅ Reusable open/close handler with index as parameter
  const handleOpen = (i: number) => {
    setActiveIndex((prevIndex) => (prevIndex === i ? null : i));
  };

  return (
    <div className="flex items-center gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {

        const isOpen = i === activeIndex;

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={() => handleOpen(i)}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          ></NavItem>
        );
      })}
    </div>
  );
};

export default NavItems;
