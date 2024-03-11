import Wrapper from "@/components/Wrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Wrapper className="hidden  md:flex md:flex-row md:justify-between">
        <nav className="flex w-fit flex-row gap-4">
          {linkData.map((item) => (
            <Link
              key={item.name}
              className={buttonVariants({ variant: "link" })}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <nav className="flex w-fit flex-row gap-4">
          {socialData.map((item) => (
            <Link
              key={item.name}
              className={buttonVariants({ variant: "link" })}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </Wrapper>
    </>
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
    Icon: "icon",
  },
  {
    name: "facebook",
    href: "/",
    Icon: "icon",
  },
  {
    name: "instagram",
    href: "/",
    Icon: "icon",
  },
  {
    name: "x",
    href: "/",
    Icon: "icon",
  },
];
