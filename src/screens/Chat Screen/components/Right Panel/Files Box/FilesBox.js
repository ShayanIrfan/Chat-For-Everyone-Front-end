import React from 'react'
import Styles from "./FilesBox.module.css";

const FilesBox = () => {
    return (
        <div className={Styles.FilesBox__main} >
            <div className={Styles.MediaHead}>
                <h2>Files</h2>
            </div>

            <div className={Styles.Files__docMain}>
                <div className={Styles.Files__doc}>
                    <div><span className="iconify" data-icon="carbon:document" data-width="24"></span></div>
                    <div><p style={{fontSize: "15px", marginTop: "5px"}}>Documents name</p></div>
                    <div>
                        <p style={{fontSize: "11px"}}>12 sep</p>
                        <p style={{fontSize: "13px"}}>19 mb</p>
                    </div>
                </div>

                <div className={Styles.Files__doc}>
                    <div><span className="iconify" data-icon="carbon:document" data-width="24"></span></div>
                    <div><p style={{fontSize: "15px", marginTop: "5px"}}>Documents name</p></div>
                    <div>
                        <p style={{fontSize: "11px"}}>12 sep</p>
                        <p style={{fontSize: "13px"}}>19 mb</p>
                    </div>
                </div>

                <div className={Styles.Files__doc}>
                    <div><span className="iconify" data-icon="carbon:document" data-width="24"></span></div>
                    <div><p style={{fontSize: "15px", marginTop: "5px"}}>Documents name</p></div>
                    <div>
                        <p style={{fontSize: "11px"}}>12 sep</p>
                        <p style={{fontSize: "13px"}}>19 mb</p>
                    </div>
                </div>

                <div className={Styles.Files__doc}>
                    <div><span className="iconify" data-icon="carbon:document" data-width="24"></span></div>
                    <div><p style={{fontSize: "15px", marginTop: "5px"}}>Documents name</p></div>
                    <div>
                        <p style={{fontSize: "11px"}}>12 sep</p>
                        <p style={{fontSize: "13px"}}>19 mb</p>
                    </div>
                </div>

                <div className={Styles.Files__doc}>
                    <div><span className="iconify" data-icon="carbon:document" data-width="24"></span></div>
                    <div><p style={{fontSize: "15px", marginTop: "5px"}}>Documents name</p></div>
                    <div>
                        <p style={{fontSize: "11px"}}>12 sep</p>
                        <p style={{fontSize: "13px"}}>19 mb</p>
                    </div>
                </div>

                <div className={Styles.Files__doc}>
                    <div><span className="iconify" data-icon="carbon:document" data-width="24"></span></div>
                    <div><p style={{fontSize: "15px", marginTop: "5px"}}>Documents name</p></div>
                    <div>
                        <p style={{fontSize: "11px"}}>12 sep</p>
                        <p style={{fontSize: "13px"}}>19 mb</p>
                    </div>
                </div>
                
                <div className={Styles.Files__doc}>
                    <div><span className="iconify" data-icon="carbon:document" data-width="24"></span></div>
                    <div><p style={{fontSize: "15px", marginTop: "5px"}}>Documents name</p></div>
                    <div>
                        <p style={{fontSize: "11px"}}>12 sep</p>
                        <p style={{fontSize: "13px"}}>19 mb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilesBox
