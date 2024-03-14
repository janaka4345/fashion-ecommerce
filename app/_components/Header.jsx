import { Search } from "lucide-react";
import { Icon } from "../../components/Icons";
import Menubar from "./Menubar";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <section className=" flex flex-col flex-wrap   bg-red-500">
      <div className="flex  flex-row  items-center justify-between gap-2 ">
        <div className=" w-1/3 bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search" className="pl-8" />
            </div>
          </form>
        </div>
        <div className=" h-40 w-1/3 bg-green-500 ">logo</div>
        <div className=" w-1/3 ">
          <Icon className=" h-10 w-10" name="shopping-cart" />
        </div>
      </div>
      <nav className="mx-auto">
        <Menubar />
      </nav>
    </section>
  );
}
