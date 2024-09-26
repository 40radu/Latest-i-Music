import NavArticle from '@/Component/Articles/NavArticle/NavArticle';
import React from 'react'
import styles from './_layoutArticle.module.scss'

function ArticleLayourt({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <NavArticle />
                {children}
        </div>
    )
}

export default ArticleLayourt