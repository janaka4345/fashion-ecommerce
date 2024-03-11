import { Icon } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed start-0 top-0 z-20 h-10 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900  md:flex md:flex-row md:justify-center">
      <div className=" flex w-fit max-w-screen-xl flex-row  flex-wrap items-center justify-start gap-4 px-2">
        {linkData.map((item) => (
          <Link
            key={item.name}
            className={buttonVariants({ variant: "link" })}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="mx-auto hidden w-fit max-w-screen-xl flex-row flex-wrap  items-center justify-between gap-4 p-4 md:flex">
        {socialData.map((item) => (
          <Link
            key={item.name}
            className={buttonVariants({ variant: "link" })}
            href={item.href}
          >
            <Icon className="h-6 w-6" name={item.icon} />
            {/* {item.name} */}
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

const socialData = [
  {
    name: "WishList",
    href: "/",
    icon: "icon",
  },
  {
    name: "Facebook",
    href: "/",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "/",
    icon: "instagram",
  },
  {
    name: "x",
    href: "/",
    icon: "twitter",
  },
];
