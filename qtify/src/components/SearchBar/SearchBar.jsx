import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import styles from "./Searchbar.module.css"
const SearchBar = ({placeholder,data}) => {
  return (
    <>
    
    <form className={styles.wrapper}>
        <input required className={styles.search} placeholder={placeholder} />
        
        <button type='submit' className={styles.searchButton}>
            <SearchIcon/>
        </button>
    </form>
    </>
  )
}

export default SearchBar
