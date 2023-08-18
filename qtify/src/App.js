import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TopAlbumSection from './components/Section/TopAlbumSection';
import Section from './components/Section/AlbumSection';


function App() {
  
  
  
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
       <Section/>
      
    </div>
  );
}

export default App;
