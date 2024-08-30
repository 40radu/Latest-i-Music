import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_globals.scss";
import NavBar from "@/Component/Layout/NavBar/page";

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
      </body>
    </html>
  );
}
