import React, { useState } from 'react'
import styles from "./SongList.module.css"

import { ReactComponent as LeftArrow } from '../../assets/LeftArrowP.svg'
import { ReactComponent as RightArrow } from '../../assets/RightArrowP.svg'

const SongList = ({data}) => {
   
  const [currentPage, setCurrentPage] = useState(1);

  let itemsPerPage =6;

  const totalPages = Math.ceil(data.length/itemsPerPage);
  const startIndex = (currentPage-1) * itemsPerPage;
  const lastIndex = startIndex+ itemsPerPage;



  const getPageNumbers =(totalPages)=>{
    const pageNumbers=[]

    for(let currPage=1 ;currPage<=totalPages;currPage++){
      pageNumbers.push(currPage)

    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers(totalPages)

  const handlePageClick =(pageNumber)=>{
     setCurrentPage(pageNumber)
  }

  const handleRightClick =()=>{
     setCurrentPage(currentPage+1)
  }

  const handleLeftClick =()=>{
     setCurrentPage(currentPage-1)
  }
  return (


    <div className={styles.wrapper}>
      <div className={styles.pagination}>
        <LeftArrow onClick={handleLeftClick} className={currentPage===1 ? `${styles.disabled} ${styles.arrow}` : styles.arrow}/>
      {
        pageNumbers.map((pageNumber)=>(
          <div onClick={()=>handlePageClick(pageNumber)} className={currentPage===pageNumber? styles.selected : styles.notSelected}>{pageNumber}</div>
        ))
      }
        <RightArrow onClick={handleRightClick} className={currentPage===totalPages ? `${styles.disabled} ${styles.arrow}` : styles.arrow}/>
      </div>
      <table>
      <thead>
        <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Duration</th>
        </tr>

      </thead>
      <tbody>
       {data.slice(startIndex,lastIndex).map(ele=>{
        return (
            <tr key={ele.id}>
                
                <td className={styles.title}><img src={ele.image} alt={ele.title} width="59px" height="64px" style={{borderRadius:"5px"}}/>{ele.title}</td>
                <td>{ele.artists[0]}</td>
                <td>{Math.floor((ele.durationInMs/1000/60))}:{Math.floor((ele.durationInMs/1000) % 60)}</td>
            </tr>
        )
       })}
       
      </tbody>
      </table>
    </div>
  )
}

export default SongList
