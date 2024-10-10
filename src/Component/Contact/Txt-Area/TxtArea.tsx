import React from 'react'
import styles from './_area.module.scss'

interface ITxtArea {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, 
  value : string
}

function TxtArea({ onChange , value } : ITxtArea) {
  return (
    <textarea placeholder='Message:' className={styles.text_area} required name='message' onChange={onChange} value={value}>

    </textarea>
  )
}

export default TxtArea