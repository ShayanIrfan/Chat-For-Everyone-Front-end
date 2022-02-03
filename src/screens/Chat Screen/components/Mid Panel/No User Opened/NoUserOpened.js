import React, { useState } from 'react';
import Styles from "./NoUserOpened.module.css";

const NoUserOpened = ({ newChat }) => {
  const [msg, setMsg] = useState("");

  return (
    <div className={Styles.main} >
        <div className={Styles.sub__main}>
            HI
        </div>
    </div>
  )
}

export default NoUserOpened;
