
// import CardItem from '@/Component/global/CardItem/CardItem'
// import React, { useEffect } from 'react'
// import image from '../../../../public/Image/Article/electric.png'
// import { IArticle } from '../typeBass'
// import next from 'next'


// async function page() {

//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//     const base = await fetch(`${apiUrl}/api/electric` , {cache : 'no-store'})
//     const data = await base.json() as IArticle[]
    
//     console.log(data)
    

//     return (
//         <>
//             {data.map((element)=>{
//                 return (<CardItem price={element.price} title={element.name} src={image} />)
//             })}
//         </>
//     )
// }

// export default page