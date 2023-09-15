"use client";
import "./globals.css";
import { Header } from "@/Components/Header";
import Footer from "@/Components/Footer";
import Modals from "@/Components/Modals";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.className}>
      <body className="bg-[#1E1E1E]">
        <Modals />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
