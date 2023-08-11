import React from 'react'
import styles from "./Card.module.css"
const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.card_img}>
         <img src="https://images.pexels.com/photos/8197559/pexels-photo-8197559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" alt='' height="170px" width="159px"/>
        </div>
        <div className={styles.card_follows}>
           100 Follows
        </div>
      </div>
      <div  className={styles.card_title}>
       New Bollywood
      </div>
       
    </div>
  )
}

export default Card
