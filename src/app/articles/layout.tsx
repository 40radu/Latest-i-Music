import NavArticle from '@/Component/Articles/NavArticle/NavArticle';
import React from 'react'
import styles from './_articles.module.scss'

function ArticleLayourt({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <NavArticle />

            <section className={styles.container_article}>

                {children}

            </section>

        </div>
    )
}

export default ArticleLayourt