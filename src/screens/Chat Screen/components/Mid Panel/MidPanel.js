import React from 'react'
import Style from "../../../../app.module.css";
import ChatMessages from './Chat Messages/ChatMessages';
import MessageBox from './Message Box/MessageBox';
import UserTitle from './User Title/UserTitle';

const MidPanel = () => {
    return (
        <div className={Style.MidPanel__main} >
            <UserTitle/>
            <ChatMessages/>
            <MessageBox/>
        </div>
    )
}

export default MidPanel
