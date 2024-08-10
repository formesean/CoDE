import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
<link rel="icon" href="/favicon.ico" sizes="any" />;

import { cn } from "../lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CoDE - USC",
  description:
    "Computer Driven Enthusiasts - University of San Carlos Official Website",
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
          "min-h-screen bg-background font-sans antialiased dark",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
