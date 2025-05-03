import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/sections/Footer";
import Header from "@/components/sections/header/Header";
import { Toaster } from "sonner";

const cairo = Cairo({
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
});

export const metadata: Metadata = {
  title: "دار الحنيان للاستشارات الهندسية",
  description: "دار الحنيان للاستشارات الهندسية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className="light max-w-[1800px] mx-auto">
      <body
        className={`${cairo.variable} font-sans antialiased`}
      >
        <Header userRole={false} profilePath="" />
        {children}
        <FooterSection/>
        <Toaster />
      </body>
    </html>
  );
}