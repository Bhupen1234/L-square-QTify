import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import React, { useState } from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCraouselToggle] = useState(true);

  const handleToggle = () => {
    setCraouselToggle((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h3 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Colapse"}
        </h3>
      </div>
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
            <Carousel data={data} renderCardComponent={(ele)=> <Card data={ele} type={type}/> }/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
