import React, { useEffect, useState } from 'react'
import styles from "./TopAlbumSection.module.css"
import { Grid } from '@mui/material'
import Card from "../Card/Card"
import { fetchTopAlbums } from '../../api/api'
const TopAlbumSection = () => {
  const [topAlbumsData,setTopAlbumsData]= useState({})
  const generateTopAlbumData=async ()=>{
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
    console.log(topAlbumsData)
      
  }
  useEffect(()=>{
   generateTopAlbumData();
  },[])
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <p >Top Albums</p>
        <p >Collapse</p>
      </div>
    { topAlbumsData.length>0 &&

    
      (<div className={styles.container}>
        {
          topAlbumsData.map((album)=>{
            return (
              <div className={styles.item} key={album.id}>
                 <Card data={album} type="album"/>
              </div>
            )
          })
        }
      </div>
      )
    }
    </div>
  )
}

export default TopAlbumSection

