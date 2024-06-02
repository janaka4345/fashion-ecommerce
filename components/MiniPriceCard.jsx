import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function MiniPriceCard() {
  const rating = 3;
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
              <svg
                key={i}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-3 w-3  sm:h-5 sm:w-5", {
                  "fill-yellow-300 dark:stroke-black": i + 1 <= rating,
                  "fill-gray-100 dark:stroke-black": i + 1 > rating,
                })}
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
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
