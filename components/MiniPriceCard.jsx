import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "./Icons";

export default function MiniPriceCard() {
  const rating = 2;
  return (
    <Card className="relative flex min-h-fit max-w-fit flex-row rounded-lg border border-gray-200 bg-white pb-1 pl-1 pt-1 shadow dark:border-gray-700 dark:bg-gray-800 sm:w-[300px] sm:pb-0 ">
      <CardHeader className="h-full  w-full bg-purple-400 p-0 py-0 ">
        <Link href="#">
          <Image
            className="mx-auto h-full w-full   object-contain "
            width={512}
            height={512}
            sizes="(min-width: 640px) 150px, 75px"
            src="/testApple/1.jpg"
            alt="product image"
          />
        </Link>
      </CardHeader>
      <CardContent className="mx-auto p-0 px-1 pt-1 sm:px-5 sm:pt-3">
        <Link href="#">
          <h5 className="text-sm font-bold text-gray-900 dark:text-white sm:text-2xl">
            Apple iPhone 14
          </h5>

          <span className=" max-w-full flex-wrap text-xs font-medium tracking-tight text-gray-900  dark:text-white sm:text-base">
            $599
          </span>
        </Link>
        <div className="mb-1 mt-1 flex items-center ">
          <div className="flex items-center justify-start sm:space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name={"star"}
                className={cn("h-3 w-3  sm:h-5 sm:w-5", {
                  "fill-yellow-300": i + 1 <= rating,
                  "fill-gray-400": i + 1 > rating,
                })}
              />
            ))}
          </div>
          <span className="ms-3 rounded bg-blue-100 px-1.5 py-0.5 text-xs  font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800 sm:px-2.5">
            {rating}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
