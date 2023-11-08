import React from 'react'
import styles from "./SongList.module.css"
const SongList = ({data}) => {
  return (
    <div className={styles.wrapper}>
      <table>
      <thead>
        <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Duration</th>
        </tr>

      </thead>
      <tbody>
       {data.map(ele=>{
        return (
            <tr>
                <td>{ele.title}</td>
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
