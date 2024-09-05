import NavArticle from '@/Component/Articles/NavArticle/NavArticle';
import React from 'react'

function ArticleLayourt({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <NavArticle/>
            {children}
        </div>
    )
}

export default ArticleLayourt