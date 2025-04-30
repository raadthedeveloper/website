import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raad Fakhrian - Portfolio",
  description: "Personal portfolio website of Raad Fakhrian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen bg-[#1e1e1e] text-[#cccccc]">
          <Navigation />
          <div className="flex flex-1 overflow-hidden">
            
            {/* Main content + Terminal */}
            <div className="flex flex-col flex-1">
              <main className="flex-1 overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
