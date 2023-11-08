import React from 'react'

import { useEffect, useState } from "react";

import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import BasicAccordion from '../BasicAccordion/BasicAccordion';
import { faqQuestions } from '../../mockdata/faqQuestions';
import SongPlayer from '../SongPlayer/SongPlayer';
import styles from "./LandingPage.module.css"
import { fetchNewAlbums, fetchSongs, fetchSongsGenre, fetchTopAlbums } from '../../api/api';

const LandingPage = ({receiveSongDataFromCard}) => {
    const [topAlbumsData, setTopAlbumsData] = useState([]);
    const [newAlbumsData, setNewAlbumsData] = useState([]);
    const [allAlbumsData,setAllAlbumsData] = useState([])
    const [songGenreData, setSongGenreData] = useState([])
    const [songsData, setSongsData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [currentSongData,setCurrentSongData] =useState([]);
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
  
      setValue(newValue);
      
      
    };
    const generateTopAlbumData = async () => {
      try {
        const data = await fetchTopAlbums();
        setTopAlbumsData(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const generateNewAlbumsData = async () => {
      try {
        const data = await fetchNewAlbums();
        setNewAlbumsData(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const generateAllSongsData = async () => {
      try {
        const data = await fetchSongs();
        setFilteredData(data);
        setSongsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    const generateSongsGenresData = async () => {
  
      try {
        const data = await fetchSongsGenre();
      
       setSongGenreData(data.data);
       
      } catch (error) {
        console.error(error)
      }
    
    };
    
  
    const generateSongsData=(value)=>{
      let key;
      if(value===0){
        setFilteredData(songsData);
        return;
      }
      else{
        key= songGenreData[value-1].key;
      }
      const result = songsData.filter((song)=>song.genre.key===key);
      setFilteredData(result);
    }
  
  
    const handleSongChange=(songData)=>{
      setCurrentSongData(songData);
    }
   
    useEffect(() => {
      generateTopAlbumData();
      generateNewAlbumsData();
      generateAllSongsData();
      generateSongsGenresData()
    
      
    }, []);
  
  
  
    useEffect(()=>{
    generateSongsData(value)
    },[value])
  return (
    <div>
       <Navbar  data={[...topAlbumsData,...newAlbumsData]}/>
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumsData} receiveSongDataFromCard={receiveSongDataFromCard}/>
        <hr />
        <Section type="album" title="New Albums" data={newAlbumsData} receiveSongDataFromCard={receiveSongDataFromCard}/>
       <hr />
        <Section type="song" title="Songs" data={filteredData} handleChange={handleChange} value={value} songGenreData={songGenreData} handleSongChange={handleSongChange}/>
       <hr />
      </div>
     
      <div className={styles.accordionWrapper}>
      <h1 style={{textAlign:"center"}}>FAQs</h1>
      <BasicAccordion faqQuestions={faqQuestions}/>
      </div>
      <hr />
       <SongPlayer currentSongData={currentSongData}/>
    </div>
  )
}

export default LandingPage
