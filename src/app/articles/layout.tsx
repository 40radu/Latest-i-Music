import NavArticle from '@/Component/Articles/NavArticle/NavArticle';
import React from 'react'
import styles from './_layoutArticle.module.scss'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "I-Musical | Articles",
    description: "Vendre des instruments de musique",
  };

function ArticleLayourt({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {/* <NavArticle /> */}
                {/* {children} */}
        </div>
    )
}

export default ArticleLayourt