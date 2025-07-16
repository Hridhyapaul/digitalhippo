"use client";

import { Button } from "@/components/ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";

type category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ isAnyOpen, category, handleOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center"></div>
      <Button
        className="gap-1.5"
        onClick={handleOpen}
        variant={isOpen ? "secondary" : "ghost"}
      >
        {category.label}
        <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground",{"-rotate-180":isOpen})}></ChevronDown>
      </Button>
    </div>
  );
};

export default NavItem;
