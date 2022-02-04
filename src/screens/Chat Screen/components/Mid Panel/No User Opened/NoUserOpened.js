import React, { useState } from 'react';
import Styles from "./NoUserOpened.module.css";
import logo from "../../../../../logo/Chat For Everyone.png"

const NoUserOpened = ({ newChat }) => {
  const [msg, setMsg] = useState("");

  return (
    <div className={Styles.main} >
        <div className={Styles.sub__main}>
        <img src={logo} alt="Chat For Everyone" />
        </div>
    </div>
  )
}

export default NoUserOpened;
