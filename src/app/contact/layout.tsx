import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "I-Musical | Contact",
  description: "Vendre des instruments de musique",
};

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout