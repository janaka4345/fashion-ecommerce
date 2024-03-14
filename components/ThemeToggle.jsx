"use client";
import { useTheme } from "next-themes";
import { Icon } from "./Icons";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative ml-auto mr-2  h-6 w-6  "
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon
        className="absolute  h-6 w-6 -translate-y-1/2 rotate-0  scale-100 transition-all  dark:-rotate-90 dark:scale-0"
        name="sun"
      />

      <Icon
        className="absolute  h-6 w-6 -translate-y-1/2  rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100"
        name="moon"
      />

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
