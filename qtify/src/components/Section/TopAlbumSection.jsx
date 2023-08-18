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
      
    { topAlbumsData.length>0 &&

    
      (<Grid container spacing={1}>
        {
          topAlbumsData.map((album)=>{
            return (
              <Grid item key={album.id} md={1.5}>
                 <Card data={album} type="album"/>
              </Grid>
            )
          })
        }
      </Grid>
      )
    }
    </div>
  )
}

export default TopAlbumSection

