import React from 'react'
import Navbar from '../Navbar/Navbar'
import AlbumDetails from '../AlbumsDetails/AlbumDetails'
import styles from "./SongPage.module.css"
import SongList from '../SongList/SongList'
import SongPlayer from '../SongPlayer/SongPlayer'
const SongPage = ({songsData}) => {
  console.log(songsData);
  return (
    <div className={styles.wrapper}>
      
      <Navbar data={songsData.songs}/>
      <div className={styles.bodyWrapper}>
      <AlbumDetails data={songsData}/>
      <SongList data={songsData.songs}/>
      
      
      
      </div>
      <hr />
      <SongPlayer/>

    </div>
  )
}

export default SongPage
