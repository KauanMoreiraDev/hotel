import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";



import Header from "./components/header/header"
import Footer from "./components/footer/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Develoaper from Kauan Moreira, instagram @kauannmoreira_",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} w-screen bg-[url('/images/testefundo1.png')]`}>
        <Header/>
        {children}
        <Footer wSize="min-w-screen" background="bg-blue-400" textColor="text-white"/>
      </body>
    </html>
  );
}
