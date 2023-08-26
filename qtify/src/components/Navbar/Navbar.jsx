import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = ({data}) => {
  return (
    <nav className={styles.navbar}>
    
      <Logo/>
      <SearchBar placeholder="Search a album of your choice" data={data}/>
      <Button children="Give Feedback"/>
    </nav>
  )
}

export default Navbar
