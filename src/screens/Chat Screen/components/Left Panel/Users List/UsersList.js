import React from 'react'
import Styles from "./UsersList.module.css";
import { useSelector } from "react-redux";

const UsersList = ({ setChat }) => {
    const rooms = useSelector(state => state.rooms)
    const users = useSelector(state => state.users)
    const me = useSelector(state => state.me);
    const chats = useSelector(state => state.chats);

    const userFinding = (val) => {
        let user;
        users.map(v => {
            if (v.firstName + " " + v.lastName === val) {
                user = v;
            }
        })
        return user
    }

    return (
        <div className={Styles.UsersList__main} >
            <div className={Styles.ChatHead}>
                <div>
                    <h2>Chats</h2>
                </div>
                <div className={Styles.icons}>
                    <span className={"iconify " + Styles.addComment} data-icon="carbon:add-comment" data-width="22"></span>
                    <span className={"iconify " + Styles.searchIcon} data-icon="carbon:search" data-width="21"></span>
                </div>
            </div>


            <div className={Styles.chatMembers}>

                {rooms.slice(0).reverse().map((val, index) => {
                    let userToShow;
                    if (val.createdBy === (me.firstName + " " + me.lastName)) {
                        userToShow = userFinding(val.for);
                    } else {
                        userToShow = userFinding(val.createdBy);
                    }
                    const name = (userToShow.firstName + " " + userToShow.lastName).split(" ");

                    const msgToshow = chats[val.manual_id][(chats[val.manual_id].length) - 1].msg;

                    return (
                        <div className={Styles.individualMember} key={index} onClick={() => setChat({session_id:val.manual_id, userName:name})}>
                            <div className={Styles.profile}>
                                {userToShow.image.length !== 0 ?
                                    <img src={userToShow.img} />
                                    :
                                    <span className="iconify" data-icon="carbon:user-avatar-filled" style={{ color: "rgb(120 120 120)" }} data-width="55"></span>}

                            </div>

                            <div className={Styles.chatMembersInfo}>
                                <p style={{ fontSize: "16px" }}>{name[0]} {name[1]}</p>
                                <p style={{ fontSize: "12px" }}>{msgToshow}</p>
                            </div>

                            <div style={{ marginLeft: "auto", marginRight: "5px" }}>
                                <p style={{ fontSize: "11px" }}>0:12 Pst</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div >
    )
}

export default UsersList
