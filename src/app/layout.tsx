import type { Metadata } from "next";
import "./_globals.scss";
import NavBar from "@/Component/Layout/NavBar/page";
import Footer from "@/Component/Layout/Footer/Footer";

export const metadata: Metadata = {
  title: "I-Musical | Home",
  description: "Vendre des instruments de musique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
