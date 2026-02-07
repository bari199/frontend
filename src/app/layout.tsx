import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flight Booking App",
  description: "Search and book flights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-slate-50
          text-slate-900
        `}
      >
        <Header />

        <main className="px-4 pb-4 md:px-6 md:pb-6">
          <Suspense>{children}</Suspense>
        </main>

        <Footer />
      </body>
    </html>
  );
}
