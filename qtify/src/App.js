import logo from './logo.svg';
import './App.css';
import  styles from "./App.module.css"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchNewAlbums, fetchTopAlbums } from './api/api';



function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData,setNewAlbumsData] = useState([]);

const generateTopAlbumData = async () => {

  try {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
    
  } catch (error) {
    console.error(error)
  }

};

const generateNewAlbumsData = async () => {

  try {
    const data = await fetchNewAlbums()
    setNewAlbumsData(data);
   
  } catch (error) {
    console.error(error)
  }

};





useEffect(() => {
  generateTopAlbumData();
  generateNewAlbumsData()
}, []);
  
  
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className={styles.sectionWrapper}>
      <Section type="album" title="Top Albums" data={topAlbumsData}/>
      <hr />
      <Section type="album" title="New Albums" data={newAlbumsData}/>
      </div>
      
      
    </div>
  );
}

export default App;
