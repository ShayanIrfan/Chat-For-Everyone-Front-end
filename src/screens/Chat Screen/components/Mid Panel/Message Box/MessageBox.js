import React from 'react';
import Styles from "./MessageBox.module.css";

const MessageBox = () => {
  return (
    <div className={Styles.MessageBox__main} >
      <div className={Styles.MessageBox__subMain}>
        <div style={{ width: '80%', alignItem: 'center', borderRadius: '25px', fontSize: "16px", height: "3.1em", backgroundColor: "#333333", color: "hsl(0, 0%, 100%)", padding: "0px 13px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <input type="text" className={Styles.inputText} />
          <button className={Styles.inputBtns}><span className={"iconify " + Styles.sendMsg} data-icon="carbon:send-alt-filled"></span></button>
        </div>
        <button className={Styles.inputBtns} style={{ marginLeft: 22 }}>
          <span className={"iconify " + Styles.attachFile} data-icon="carbon:attachment" data-rotate="90deg"></span>
        </button>
        <button className={Styles.inputBtns} style={{ marginLeft: 9 }}>
          <span className={"iconify " + Styles.mic} data-icon="carbon:microphone-filled"></span>
        </button>
      </div>
    </div>
  )
}

export default MessageBox;
