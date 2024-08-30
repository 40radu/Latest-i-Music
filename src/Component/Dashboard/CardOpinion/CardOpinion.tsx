import React from 'react'
import styles from './_cardOpinion.module.scss'

interface ICardOpinion {
    name : string;
    value : string
}

function CardOpinion({name , value} : ICardOpinion) {
  return (
    <div className={styles.cardOpinion}>
        <h5>{name}</h5>
        <p className={styles.descri}>"{value}"</p>
    </div>
  )
}

export default CardOpinion