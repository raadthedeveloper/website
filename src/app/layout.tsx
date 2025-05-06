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
  openGraph: {
    title: 'raad fakhrian',
    description: 'raad\'s website',
    images: [
      {
        url: '/uhhpicofme5.JPG',
        width: 1200,
        height: 630,
        alt: 'raad\'s website',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'raad fakhrian',
    description: 'raad\'s website',
    images: ['/uhhpicofme1.JPG'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen overflow-hidden`}>
        <div className="flex flex-col h-full bg-[#1e1e1e] text-[#cccccc] scaled-fill overflow-hidden">
          <Navigation />
          <div className="flex flex-1 h-full overflow-hidden">
            <div className="flex flex-col flex-1 h-full">
              <main className="flex-1 h-full overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
