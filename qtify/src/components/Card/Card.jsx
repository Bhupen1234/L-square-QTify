import React from "react";
import Chip from '@mui/material/Chip';
import styles from "./Card.module.css"
import { Tooltip } from "@mui/material";
const Card = ({ data, type,handleSongChange }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const {image, follows, title,songs} = data;
       
        return (

          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="Album_image" />
              <div className={styles.banner}>
                <Chip label={`${follows} Follows`} className={styles.chip}/>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
          </Tooltip>
        );
      }

      case "song":{
        const {image,likes,title} =data;
        return(
          <div className={styles.wrapper} onClick={()=>handleSongChange(data)}>
            <div className={styles.card}>
              <img src={image} alt="Song_Image"  />
              <div className={styles.banner}>
                <Chip label={`${likes} Likes`} className={styles.chip}/>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        )
      }
      default : return <></>
    }
  };
  return getCard(type);
};

export default Card;
