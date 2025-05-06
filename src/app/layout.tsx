import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/app/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "raad fakhrian",
  description: "raad's website",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
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
    <html lang="en" className="h-full">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
