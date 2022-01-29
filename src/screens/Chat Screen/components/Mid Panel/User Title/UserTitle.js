import React from 'react'
import Styles from "./UserTitle.module.css";
import { useState } from 'react';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
const UserTitle = () => {
    let [username, setUsername] = useState('Rogers')
    let [onlineStatus, setonlineStatus] = useState(false)

    return (
        <div className={Styles.UserTitle__main}>
            <h4>
            <div className={Styles.UserTitle__name}>
                {username}
            </div>
            <div className={Styles.UserTitle__status} >
                    <span><PersonOutlineSharpIcon style={{ fontSize: '35px', color: onlineStatus ? '#41CA00' : 'hsl(0, 0%, 20%)' }} /></span>
                    <span style={{ marginLeft: 3 }}>{onlineStatus ? "Active Now" : "Offline"}</span>
            </div>
            </h4>
        </div>
    )
}

export default UserTitle
