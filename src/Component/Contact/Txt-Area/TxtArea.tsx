import React from 'react'
import styles from './_area.module.scss'

function TxtArea() {
  return (
    <textarea placeholder='Message:' className={styles.text_area} required>

    </textarea>
  )
}

export default TxtArea