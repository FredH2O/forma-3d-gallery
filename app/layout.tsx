import type { Metadata } from "next";
import { Sansation } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const sansation = Sansation({
  variable: "--font-sansation",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "FORMA - Digital 3D Art Gallery",
  description: "A digital gallery exploring 3D objects and visual experiments.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sansation.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
