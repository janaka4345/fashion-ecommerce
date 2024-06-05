import Link from "next/link";
import { auth } from "../../auth";
import Cart from "../../components/Cart";
import User from "../../components/User";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../../components/ui/button";

export default async function AuthSection() {
  const session = await auth();
  if (session?.user) {
    return (
      <>
        <User session={session} />
        <Cart />
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
