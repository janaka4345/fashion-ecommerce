import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "./Icons";

export default function PriceCard() {
  const rating = 2;
  return (
    <Card className=" relative flex w-[130px] flex-col rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 sm:w-[200px]">
      <CardHeader className="p-0 py-1 sm:py-3">
        <Link href="#">
          <Image
            className="mx-auto h-[100px] w-[75px] rounded-t-lg object-contain sm:h-[200px] sm:w-[150px]"
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
          <span className="text-sm font-bold text-gray-900 dark:text-white sm:text-2xl">
            $599
          </span>

          <h5 className=" max-w-full flex-wrap text-xs font-medium tracking-tight text-gray-900  dark:text-white sm:text-base">
            Apple iPhone 14
          </h5>
        </Link>
        <div className="mb-1 mt-1 flex items-center sm:mb-5 sm:mt-2.5">
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
      <CardFooter className="flex  flex-col items-center gap-1  p-1 sm:gap-2 sm:p-2  ">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full px-0 text-sm sm:px-4 sm:text-base",
          )}
          // className="w-full rounded-lg bg-blue-700 px-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full px-0 text-sm sm:px-4 sm:text-base ",
          )}
          href="#"
          // className="w-full rounded-lg bg-blue-700 px-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buy Now
        </Link>
      </CardFooter>
    </Card>
  );
}
