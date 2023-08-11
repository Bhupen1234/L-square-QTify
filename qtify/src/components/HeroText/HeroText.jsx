import React from 'react'
import styles from "./HeroText.module.css"
const HeroText = ({text1,text2}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>{text1}</div>
      <div className={styles.text2}>{text2}</div>
    </div>
  )
}

export default HeroText
