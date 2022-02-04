import React from 'react'
import Styles from "./UserTitle.module.css";
import { useState } from 'react';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';

const UserTitle = ({ userName }) => {
    let [onlineStatus, setonlineStatus] = useState(false)

    return (
        <div className={Styles.UserTitle__main}>
            <h4>
                <div className={Styles.UserTitle__name}>
                    {userName[0]} {userName[1]}
                </div>
                {userName[1] !== "deleted" &&
                    <div className={Styles.UserTitle__status} >
                        <span><PersonOutlineSharpIcon style={{ fontSize: '30px', color: onlineStatus ? '#41CA00' : 'hsl(0, 0%, 20%)' }} /></span>
                        <span style={{ marginLeft: 3, fontSize: 15 }}>{onlineStatus ? "Active Now" : "Offline"}</span>
                    </div>
                }
            </h4>
        </div>
    )
}

export default UserTitle
