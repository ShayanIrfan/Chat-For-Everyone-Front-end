import React from 'react'
import Styles from "./FilesBox.module.css";

const FilesBox = () => {
    return (
        <div className={Styles.FilesBox__main} >
            <div className={Styles.MediaHead}>
                <h1>Files</h1>

                <p>View All</p>
            </div>

            <div>
                <div className={Styles.Files__doc}>
                    <div><span className="iconify" data-icon="carbon:document" data-width="25"></span></div>
                    <div><p style={{fontSize: "18px", marginTop: "5px"}}>Documents name</p></div>
                    <div>
                        <p style={{fontSize: "12px"}}>12 sep</p>
                        <p style={{fontSize: "14px"}}>19 mb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilesBox
