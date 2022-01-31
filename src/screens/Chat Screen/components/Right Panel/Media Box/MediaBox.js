import React from 'react'
import Styles from "./MediaBox.module.css";

const MediaBox = () => {
  return (
    <div className={Styles.MediaBox__main} >
      <div className={Styles.MediaHead}>
          <h2>Media</h2>
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
