"use client";

import { Icon } from "@/components/Icons";
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
        <Icon name={"menu"} className="h-5 w-5 sm:hidden" />
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
