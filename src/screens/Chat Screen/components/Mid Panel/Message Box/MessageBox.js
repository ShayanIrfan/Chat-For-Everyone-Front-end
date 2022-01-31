import React from 'react';
import Styles from "./MessageBox.module.css";
import { InputAdornment, OutlinedInput } from '@mui/material';
const MessageBox = () => {
  return (
    <div className={Styles.MessageBox__main} >
      <div className={Styles.MessageBox__subMain}>


        <OutlinedInput
          style={{ width: '80%', alignItem: 'center', borderRadius: '25px', fontSize: "16px", height: "3.1em", backgroundColor: "#333333", color: "hsl(0, 0%, 100%)" }}
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end"><button className={Styles.inputBtns}><span className={"iconify " + Styles.sendMsg} data-icon="carbon:send-alt-filled"></span></button></InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',

          }}
        />
        <button className={Styles.inputBtns} style={{ marginLeft: 23 }}>
          <span className={"iconify " + Styles.attachFile} data-icon="carbon:attachment" data-rotate="90deg"></span>
        </button>
        <button className={Styles.inputBtns} style={{ marginLeft: 8 }}>
          <span className={"iconify " + Styles.mic} data-icon="carbon:microphone-filled"></span>
        </button>
      </div>
    </div>
  )
}

export default MessageBox;
