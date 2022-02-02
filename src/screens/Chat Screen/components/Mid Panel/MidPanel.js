import React from 'react'
import Style from "../../../../app.module.css";
import { useSelector } from "react-redux";
import ChatMessages from './Chat Messages/ChatMessages';
import MessageBox from './Message Box/MessageBox';
import UserTitle from './User Title/UserTitle';

const MidPanel = ({ chatToShow }) => {
    const chats = useSelector(state => state.chats);

    return (
        <div className={Style.MidPanel__main} >
            {chatToShow ?
            <>
            <UserTitle userName={chatToShow.userName} />
            <ChatMessages chats={chats[chatToShow.session_id]} />
            <MessageBox />
            </>
            :
            <>
                Hi
            </>}
        </div>
    )
}

export default MidPanel
