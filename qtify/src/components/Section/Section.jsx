import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import React, { useState } from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../BasicTabs/BasicTabs";

const Section = ({ title, data, type ,handleChange,value,songGenreData,handleSongChange}) => {
  const [carouselToggle, setCraouselToggle] = useState(true);

  const handleToggle = () => {
    setCraouselToggle((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h3 className={styles.toggleText} onClick={handleToggle}>
          {type!=="song" && (carouselToggle ? "Show All" : "Colapse")}
        </h3>

      </div>
      {
        type==="song" && <BasicTabs handleChange={handleChange} value={value} songGenreData={songGenreData} />
      }
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              
            {data.map((ele) => {
              return <Card data={ele} type={type} key={ele.id} />;
            })}
            </div>
          ) : (
            <Carousel data={data} renderCardComponent={(ele)=> <Card data={ele} type={type} handleSongChange={handleSongChange}/> }/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
