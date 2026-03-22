import type { Metadata } from "next";
import { Exo_2, Inter, Geist } from "next/font/google";
import "./globals.css";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html className={cn("antialiased h-full", "font-sans", geist.variable)} lang="pt-BR">
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
