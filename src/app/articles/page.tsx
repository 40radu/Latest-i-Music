import CardItem from '@/Component/global/CardItem/CardItem'
import React from 'react'
import styles from './_articles.module.scss'
import { redirect } from 'next/navigation'


function Article() {

  return redirect ('articles/all_items')

}

export default Article