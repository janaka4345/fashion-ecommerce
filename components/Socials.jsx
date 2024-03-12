import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icon } from "./Icons";

export default function Socials() {
  return (
    <div className="fixed right-0 top-1/2 mx-auto flex w-fit flex-col flex-wrap  items-center justify-between gap-4 bg-pink-700 ">
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
  );
}

const socialData = [
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
