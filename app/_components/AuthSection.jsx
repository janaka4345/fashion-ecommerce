import Link from "next/link";
import { auth } from "../../auth";
import Cart from "../../components/Cart";
import User from "../../components/User";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../../components/ui/button";
import { Suspense } from "react";

export default async function AuthSection() {
  const session = await auth();
  if (session?.user) {
    return (
      <>
        <Suspense fallback={<h1>loading...</h1>}>
          <User session={session} />
          <Cart />
        </Suspense>
      </>
    );
  } else {
    return (
      <>
        <Link
          className={cn(buttonVariants({ variant: "default" }))}
          href="/auth/signin"
        >
          Sign In
        </Link>
        <Link
          className={cn(buttonVariants({ variant: "default" }))}
          href="/auth/register"
        >
          Register
        </Link>
      </>
    );
  }
}
