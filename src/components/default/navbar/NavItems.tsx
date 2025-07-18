"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import React, { use, useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ✅ Check if any item is open
  const isAnyOpen = activeIndex !== null;

  // ✅ Reusable open/close handler with index as parameter
  const handleOpen = (i: number) => {
    setActiveIndex((prevIndex) => (prevIndex === i ? null : i));
  };

  // ✅ Use a ref to handle clicks outside the nav items
  // This will close the dropdown when clicking outside
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => {
    setActiveIndex(null);
  });

  // ✅ Handle Escape key to close the dropdown
  // This will close the dropdown when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null); // Close the dropdown when Escape is pressed
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  return (
    <div className="flex items-center gap-4 h-full" ref={navRef}>
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
