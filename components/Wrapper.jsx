import { cn } from "@/lib/utils";

export default function Wrapper({ className, children }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-4 md:px-16", className)}
    >
      {children}
    </div>
  );
}
