import React from 'react';
import Styles from "./MessageBox.module.css";
import SendIcon from '@mui/icons-material/Send';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { InputAdornment, OutlinedInput } from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { color } from '@mui/system';
const MessageBox = () => {
  return (
    <div className={Styles.MessageBox__main} >
      <div className={Styles.MessageBox__subMain}>


        <OutlinedInput
          style={{ width: '100%', marginLeft: '5%', marginRight: '5%', alignItem: 'center', borderRadius: '25px', fontSize: "16px", height: "3.1em", backgroundColor: "#333333", color: "hsl(0, 0%, 100%)"   }}
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end"><SendIcon className={Styles.sendMsg} onClick={() => { console.log("clock") }} /></InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',

          }}
        />
        <UploadFileIcon className={Styles.uploadFile} style={{ fontSize: "29px", color: "hsl(191, 99%, 65%)" }} />
        <DescriptionOutlinedIcon className={Styles.uploadFile} style={{ fontSize: "29px", color: "hsl(191, 99%, 65%)" }} />
      </div>
    </div>
  )
}

export default MessageBox;
