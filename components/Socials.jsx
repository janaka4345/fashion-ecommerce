import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/Icons";

export default function Socials() {
  return (
    <div className="fixed right-0 top-1/2 z-20 mx-auto  flex w-fit -translate-y-1/2 flex-col flex-wrap  items-center justify-between gap-4 bg-pink-700 ">
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
