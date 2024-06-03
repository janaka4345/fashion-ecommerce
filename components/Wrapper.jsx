import { cn } from "../lib/utils";

export default function Wrapper({ className, children }) {
  return (
    <div
      className={cn(
        " flex- relative mx-4 h-svh max-h-svh max-w-screen-2xl  justify-center bg-pink-200  pt-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
