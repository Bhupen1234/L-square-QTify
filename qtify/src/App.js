import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import { fetchNewAlbums, fetchSongs, fetchSongsGenre, fetchTopAlbums } from "./api/api";
import BasicAccordion from "./components/BasicAccordion/BasicAccordion";
import { faqQuestions } from "./mockdata/faqQuestions";
import SongPlayer from "./components/SongPlayer/SongPlayer";
export

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
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
    <div className="App">
      <Navbar  data={topAlbumsData}/>
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumsData} />
        <hr />
        <Section type="album" title="New Albums" data={newAlbumsData} />
        <hr />
        <Section type="song" title="Songs" data={filteredData} handleChange={handleChange} value={value} songGenreData={songGenreData} handleSongChange={handleSongChange}/>
        <hr />
      </div>
     
      <div className={styles.accordionWrapper}>
      <h1 style={{textAlign:"center"}}>FAQs</h1>
      <BasicAccordion faqQuestions={faqQuestions}/>
      </div>
      <hr />
     {currentSongData!==[] && <SongPlayer currentSongData={currentSongData}/>}
    
      
      
      
    </div>
  );
}

export default App;
