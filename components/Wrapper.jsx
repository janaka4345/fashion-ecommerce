import { cn } from "@/lib/utils";

export default function Wrapper({ className, children }) {
  return (
    <div
      className={cn(
        "mx-auto h-dvh max-h-dvh w-full max-w-screen-2xl bg-pink-200 px-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
