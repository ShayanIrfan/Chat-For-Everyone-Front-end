import React from 'react'
import Styles from "./UsersList.module.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Style } from '@material-ui/icons';

const UsersList = () => {
    return (
        <div className={Styles.UsersList__main} >
            <div className={Styles.ChatHead}>
                <div>
                    <h1>Chats</h1>
                </div>
                <div className={Styles.icons}>
                    <span className="iconify" data-icon="carbon:add-comment" data-width="22"></span>
                    <span className={"iconify " + Styles.searchIcon} data-icon="carbon:search" data-width="21"></span>
                </div>
            </div>


            <div className={Styles.chatMembers}>
                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>

                <div className={Styles.individualMember}>
                    <div className={Styles.profile}>
                        <span className="iconify" data-icon="carbon:user-avatar-filled" style={{color: "#5ae0fe"}} data-width="55"></span>
                    </div>

                    <div className={Styles.chatMembersInfo}>
                        <p style={{fontSize: "17px"}}>Rogers</p>
                        <p style={{fontSize: "13px"}}>Latest message...</p>
                    </div>

                    <div style={{marginLeft: "auto", marginRight: "5px"}}>
                        <p style={{fontSize: "12px"}}>0:12 Pst</p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default UsersList
