import Cart from "@/components/Cart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Menubar from "./Menubar";

export default function Header() {
  return (
    <section className="flex flex-col   ">
      <div className="grid h-fit  grid-cols-2 grid-rows-2 items-center justify-center gap-2 sm:grid-cols-3 sm:grid-rows-1  ">
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-red-600  p-4  sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2">
          <form>
            <div className="relative ">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search" className="pl-8" />
            </div>
          </form>
        </div>
        <div className=" col-start-1 col-end-3  row-start-1 row-end-2 h-20 bg-green-500 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2  ">
          logo
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 h-20 bg-purple-500 p-4 align-middle sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2  ">
          <div className="flex flex-row   justify-between gap-3 ">
            <Cart />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <nav className="mx-auto w-fit bg-blue-400 ">
        <Menubar />
      </nav>
    </section>
  );
}
