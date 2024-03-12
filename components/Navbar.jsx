import { Icon } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed start-0 top-0 z-20 h-10 w-full border-b border-gray-200 bg-white px-4 dark:border-gray-600  dark:bg-gray-900 md:flex md:flex-row md:justify-between">
      <div className=" flex w-fit  flex-row  flex-wrap items-center justify-start gap-4 ">
        {linkData.map((item) => (
          <Link
            key={item.name}
            className={buttonVariants({ variant: "ghost" })}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}

const linkData = [
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
