import React from 'react'
import Style from "../../../../app.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addMsg } from "../../../../store/reducers/chats";
import ChatMessages from './Chat Messages/ChatMessages';
import MessageBox from './Message Box/MessageBox';
import UserTitle from './User Title/UserTitle';
import NoUserOpened from'./No User Opened/NoUserOpened';

const MidPanel = ({ chatToShow }) => {
    const chats = useSelector(state => state.chats);
    const me = useSelector(state => state.me);
    const dispatch = useDispatch();

    const newChat = (val) => {
        const data = {
            session_id: chatToShow.session_id,
            msg: val,
            by: me.id,
            status: "unseen"
        }
        dispatch(addMsg(data));
    }

    return (
        <div className={Style.MidPanel__main} >
            {chatToShow ?
                <>
                    <UserTitle userName={chatToShow.userName} />
                    <ChatMessages chats={chats[chatToShow.session_id]} />
                    <MessageBox newChat={newChat} />
                </>
                :
                <>
                    <NoUserOpened />
                </>}
        </div>
    )
}

export default MidPanel
