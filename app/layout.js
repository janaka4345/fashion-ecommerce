import { cn } from "@/lib/utils";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "./_components/Navbar";
import { PreloadSprite } from "@/components/PreloadSprite";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  // TODO -this is a working title and desc.
  title: "Fashion-Bug",
  description: "Online Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PreloadSprite />
      <body className={cn('relative h-full font-sans antialiased', poppins.className)}>
        <main className="flex flex-col  min-h-svh min-w-80 ">
          <div className="flex-grow flex-1">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
