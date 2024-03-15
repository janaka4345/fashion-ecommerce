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
    <Card className="relative w-[16svw] min-w-fit max-w-[18svw] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <CardHeader className="p-0 pt-3">
        <Link href="#">
          <Image
            className="mx-auto h-[75px] w-[75px] rounded-t-lg object-contain sm:h-[150px] sm:w-[150px]"
            width={150}
            height={150}
            src="/testApple/1.jpg"
            alt="product image"
          />
        </Link>
        {/* <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="mx-auto p-0 px-2 pt-3 sm:px-5">
        <Link href="#">
          <span className="text-lg font-bold text-gray-900 dark:text-white sm:text-2xl">
            $599
          </span>
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white sm:text-base">
            Apple Watch Series
          </h5>
        </Link>
        <div className="mb-5 mt-2.5 flex items-center">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name={"star"}
                className={cn("h-4 w-4  sm:h-5 sm:w-5", {
                  "fill-yellow-300": i + 1 <= rating,
                  "fill-gray-400": i + 1 > rating,
                })}
              />
            ))}
          </div>
          <span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {rating}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex  flex-col items-center  gap-2 p-3 sm:p-6 ">
        <Link
          href="#"
          className={cn(buttonVariants({ variant: "default" }), "w-full ")}
          // className="w-full rounded-lg bg-blue-700 px-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </Link>
        <Link
          className={cn(buttonVariants({ variant: "outline" }), "w-full ")}
          href="#"
          // className="w-full rounded-lg bg-blue-700 px-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buy Now
        </Link>
      </CardFooter>
    </Card>
  );
}
