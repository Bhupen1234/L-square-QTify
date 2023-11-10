import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";

import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import SongPage from "./components/SongPage/SongPage";
import { useEffect, useState } from "react";
export

function App() {
  const [songsData, setSongsData ] =  useState([])

  // Callback function to receive data from the child
  const receiveSongDataFromCard = (data) => {
    
    setSongsData(data)

    
  };



  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<LandingPage receiveSongDataFromCard={receiveSongDataFromCard}/>}/>
        <Route path="/songs" element={<SongPage songsData={songsData}/>}/>
       </Routes>

      
      
    </div>
  );
}

export default App;
