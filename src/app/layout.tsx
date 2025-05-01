import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raad Fakhrian",
  description: "raad's website",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1e1e1e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col h-screen bg-[#1e1e1e] text-[#cccccc]">
          <Navigation />
          <div className="flex flex-1 overflow-hidden">
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
