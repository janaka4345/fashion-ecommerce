import Link from "next/link";
import UserAvatar from "./UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
export default async function User({ session }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <UserAvatar session={session} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-48">
        <DropdownMenuLabel>Hi {session.user.name} !</DropdownMenuLabel>
        <DropdownMenuSeparator className="h-[1px] bg-gray-200" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
            <Link href="/account/orders">My Orders</Link>
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <CreditCard className="mr-2 h-4 w-4" /> */}
            <Link href="/account/returns">My Returns</Link>
            {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <Settings className="mr-2 h-4 w-4" /> */}
            <Link href="/account/reviews">My Reviews</Link>
            {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <Keyboard className="mr-2 h-4 w-4" /> */}
            <Link href="/account/settings">My Settings</Link>
            {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="h-[1px] bg-gray-200" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {/* <Users className="mr-2 h-4 w-4" /> */}
            {session.user.role === "BUYER" && (
              <Link href="/account/startSelling">Start Selling</Link>
            )}
            {session.user.role === "SELLER" && (
              <Link href="/account/sellerDashboard">Dashboard</Link>
            )}
            {session.user.role === "ADMIN" && (
              <Link href="/account/adminDashboard">Admin Dashboard</Link>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="h-[1px] bg-gray-200" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {/* <Users className="mr-2 h-4 w-4" /> */}
            <Link href="/api/auth/signout">Sign Out</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
