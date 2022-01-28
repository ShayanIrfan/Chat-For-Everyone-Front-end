import React from 'react'
import Styles from "./UserTitle.module.css";
import { useState} from 'react';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
const UserTitle = () => {
    let [username, setUsername] = useState('Rogers')
    let [onlineStatus, setonlineStatus] = useState(true)
    
    return (
        <div className={Styles.UserTitle__main}>
            <div className={Styles.UserTitle__name}>
{username}
            </div>
            <div className={Styles.UserTitle__status} >
                <span style={{marginRight:'1%'}}><PersonOutlineSharpIcon style={{ fontSize: '37px', color: `{${onlineStatus}?'green':'black'}`,}}/></span>
                <span>{onlineStatus?"Active Now":"Offline"}</span>
            </div>

        </div>
    )
}

export default UserTitle
