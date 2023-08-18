import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import { fetchTopAlbums } from './api/api';
import { useEffect, useState } from 'react';
import { data } from './mockdata/topAlbum';

function App() {
  const [topAlbumsData,setTopAlbumsData]= useState([])
  const generateTopAlbumData=async ()=>{
    const data =await fetchTopAlbums();
    setTopAlbumsData(data);
      
  }
  useEffect(()=>{
   generateTopAlbumData();
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card data={topAlbumsData[5]} type="album"/>
    </div>
  );
}

export default App;
