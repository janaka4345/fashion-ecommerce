import { cn } from "@/lib/utils";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  // TODO -this is a working title and desc.
  title: "Fashion-Bug",
  description: "Online Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn('relative h-full font-sans antialiased', poppins.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main className="flex flex-col  min-h-svh min-w-80 ">
            <div className="flex-grow flex-1">
              <Navbar />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
