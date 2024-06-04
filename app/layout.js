import { cn } from "../lib/utils";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import Socials from "../components/Socials";
import { Toaster } from "../components/ui/sonner";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  // TODO -this is a working title and desc.
  title: "Fashion-Bug",
  description: "Online Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* TODO check */}
      <body className={cn("relative font-sans antialiased", poppins.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <Socials />
          {children}
          <Toaster richColors
          // icons={{
          //   success: <SuccessIcon />,
          //   info: <InfoIcon />,
          //   warning: <WarningIcon />,
          //   error: <ErrorIcon />,
          //   loading: <LoadingIcon />,
          // }} 
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
