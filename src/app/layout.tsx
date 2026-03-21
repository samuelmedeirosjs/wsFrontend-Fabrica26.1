import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rickpédia - Personagens, Localizações e Episódios",
  description: "Tudo sobre Rick and Morty em todas as dimensões",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="antialiased h-full" lang="pt-BR">
      <body
        className={`${exo2.variable} ${inter.variable} font-body bg-background min-h-full flex flex-col text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
