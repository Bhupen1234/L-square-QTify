import React from 'react'
import styles from "./AlbumDetails.module.css"
const AlbumDetails = ({data}) => {

  return (
    <div className={styles.wrapper}>
       <div className={styles.imageWrapper}>
           <img src={data.image} alt={data.title} />
       </div>

       <div className={styles.textWrapper}>
           <div className={styles.title}>

           {data.title}
           </div>
           <div className={styles.description}>
          {data.description}
           </div>
           <div className={styles.year}>
             2022
           </div>
           <div className={styles.subDetails}>
              {data.songs.length} songs &#x2022; {data.follows} Follows
           </div>
       </div>
    </div>
  )
}

export default AlbumDetails

