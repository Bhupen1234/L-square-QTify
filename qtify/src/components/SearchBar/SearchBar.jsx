import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import styles from "./Searchbar.module.css"
import { Autocomplete, TextField } from '@mui/material';

const SearchBar = ({placeholder,data}) => {
  return (
    <>
    
    <form className={styles.wrapper}>
        {/* <input required className={styles.search} placeholder={placeholder} /> */}
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map((option)=>option.title)}
       

        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />

        <button type='submit' className={styles.searchButton}>
            <SearchIcon/>
        </button>
    </form>
    </>
  )
}

export default SearchBar
