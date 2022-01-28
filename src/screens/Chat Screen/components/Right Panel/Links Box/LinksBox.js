import React from 'react'
import Styles from "./LinksBox.module.css";

const LinksBox = () => {
    return (
        <div className={Styles.LinksBox__main} >
            <div className={Styles.MediaHead}>
                <h1>Links</h1>

                <p>View All</p>
            </div>

            <div>
                <div className={Styles.Files__doc}>
                    <div style={{width: "40px", height: "40px", backgroundColor: "black", borderRadius: "10px"}}></div>
                    <div style={{marginLeft: "15px", marginTop: "5px"}}>
                        <p style={{fontSize: "15px"}}>Link / Web title</p>
                        <p style={{fontSize: "12px"}}>Link url</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinksBox
