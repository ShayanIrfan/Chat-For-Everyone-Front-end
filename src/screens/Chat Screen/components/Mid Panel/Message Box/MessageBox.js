import React from 'react';
import Styles from "./MessageBox.module.css";
import SendIcon from '@mui/icons-material/Send';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { InputAdornment, OutlinedInput} from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
const MessageBox = () => {
    return (
        <div className={Styles.MessageBox__main} >
            <div className={Styles.MessageBox__subMain}>
            
                
          <OutlinedInput
          style={{width:'100%',marginLeft:'5%',marginRight:'5%',alignItem:'center',borderRadius:'25px',fontSize:"20px"}}
            id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end"><SendIcon className={Styles.sendMsg} onClick={()=>{console.log("clock")}}/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
        
            }}
          />
          <UploadFileIcon className={Styles.uploadFile}style={{fontSize:'43px' }}/>
                <DescriptionOutlinedIcon className={Styles.uploadFile} style={{ fontSize: '43px' }} />
            </div>
        </div>
    )
}

export default MessageBox
