import React from 'react'
import Styles from "./MediaBox.module.css";

const MediaBox = () => {
  return (
    <div className={Styles.MediaBox__main} >
      <div className={Styles.MediaHead}>
          <h1>Media</h1>
      </div>

      <div className={Styles.Media__container}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default MediaBox
