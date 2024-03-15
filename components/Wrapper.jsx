import { cn } from "@/lib/utils";

export default function Wrapper({ className, children }) {
  return (
    <div
      className={cn(
        " relative mx-auto h-svh max-h-svh  max-w-screen-2xl bg-pink-200 px-4 pt-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
