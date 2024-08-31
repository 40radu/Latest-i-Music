import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Component/Layout/NavBar/page";
import Footer from "@/Component/Layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I-Musical",
  description: "Site qui vend des instruments de musique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
        <NavBar />
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
