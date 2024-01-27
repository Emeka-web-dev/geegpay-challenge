import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import SideBarToggle from "@/components/sidebar-toggle";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen h-screen relative bg-[#fdfdfd]",
          urbanist.className
        )}
      >
        <div className="flex h-full relative">
          {/* sidebar */}
          <div className="w-[70px] fixed top-0 left-0 bottom-0 h-screen border-r hidden lg:block">
            <Sidebar />
          </div>
          {/* main */}
          <main className="flex-1 relative lg:ml-[70px]">
            <div className="border-b py-4 sticky top-0 left-0 z-50 bg-background">
              <Navbar />
            </div>
            {children}
          </main>
        </div>
        <SideBarToggle />
      </body>
    </html>
  );
}
