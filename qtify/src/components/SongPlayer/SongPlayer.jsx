import React from 'react'
import styles from "./SongPlayer.module.css"
import { ReactComponent as SongImg} from '../../assets/SongImg.svg'
import LinearDeterminate from './LinearProgress/LinearProgress'
import Play from "../../assets/Pause.png"
const SongPlayer = ({currentSongData}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.songContent}>
       <SongImg/>
        <div style={{padding:"2px"}}>
            <p style={{fontSize:"16px"}}>Song Name</p>
            <p style={{fontSize:"12px"}}>Album Name</p>
        </div>
      </div>

      <div className={styles.linearProgress}>
        <img src={Play} alt="Play" />
       <LinearDeterminate/>
      </div>

    </div>
  )
}

export default SongPlayer
