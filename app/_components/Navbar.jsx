// import { Icon } from "@/components/Icons";
import { buttonVariants } from "../../components/ui/button";
import Link from "next/link";
import ThemeToggle from "../../components/ThemeToggle";
import { cn } from "../../lib/utils";
import HamburgerMenu from "./Hambergermenu";

export default function Navbar() {
  return (
    <nav className="fixed start-0 top-0 z-20 flex  h-8 w-full flex-row justify-between border-b border-gray-200  bg-white  px-4 dark:border-gray-600 dark:bg-gray-900 sm:h-10">
      <div className=" flex  w-full  flex-row flex-wrap items-center justify-center gap-4 sm:justify-start ">
        <HamburgerMenu menuList={menuList} />
        {menuList.map((item) => (
          <Link
            key={item.name}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden sm:block",
            )}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}

const menuList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About us",
    href: "/about-us",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];
