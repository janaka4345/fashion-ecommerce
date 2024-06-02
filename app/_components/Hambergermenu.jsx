"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function HamburgerMenu({ menuList }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="sr-only">Open main menu</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuList.map((item) => (
          <DropdownMenuItem key={item.name}>
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href={item.href}
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
