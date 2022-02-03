import React from 'react'
import Styles from "./UsersList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { statusUdpate } from "../../../../../store/reducers/chats"

const UsersList = ({ setChat }) => {
    const rooms = useSelector(state => state.rooms)
    const users = useSelector(state => state.users)
    const me = useSelector(state => state.me);
    const chats = useSelector(state => state.chats);

    const dispatch = useDispatch()

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
                        users.some(v => {
                            if ((v.firstName + " " + v.lastName) === val.for) {
                                userToShow = v;
                                return true;
                            }
                        });
                    } else {
                        users.some(v => {
                            if ((v.firstName + " " + v.lastName) === val.createdBy) {
                                userToShow = v;
                                return true;
                            }
                        });
                    }

                    let name;
                    if (userToShow) {
                        name = (userToShow.firstName + " " + userToShow.lastName).split(" ");
                    } else {
                        name = ["User", "deleted"];
                    }

                    
                    const msgToshow = chats[val.manual_id][(chats[val.manual_id].length) - 1].msg;

                    let count = 0;
                    chats[val.manual_id].slice(0).reverse().some(v => {
                        if (v.name !== me.firstName + " " + me.lastName && v.status !== "seen") {
                            count++;
                        } else {
                            return true;
                        }
                    })

                    return (
                        <div className={Styles.individualMember} key={index} onClick={() => {
                            dispatch(statusUdpate({ session_id: val.manual_id, userName: (userToShow.firstName + " " + userToShow.lastName) }));
                            setChat({ session_id: val.manual_id, userName: name })
                        }}>
                            <div className={Styles.profile}>
                                {userToShow && userToShow.image.length !== 0 ?
                                    <img src={userToShow.img} />
                                    :
                                    <span className="iconify" data-icon="carbon:user-avatar-filled" style={{ color: "rgb(120 120 120)" }} data-width="55"></span>}

                            </div>
                            <div className={`${Styles.chatMembersInfo} ${count !== 0 && Styles.chatMembersInfoNoti}`}>
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
