import React from 'react'
import styles from "./Hero.module.css"
import HeroText from '../HeroText/HeroText'
import {ReactComponent as  HeroImg} from "../../assets/headphone-img.svg"
const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <HeroText text1="100 Thousand Songs, ad-free" text2="Over thousands podcast episodes"/>
      <HeroImg/>
    </div>
  )
}

export default Hero
