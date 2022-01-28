import React from 'react'
import Style from "../../../../app.module.css"
import MyUser from './my_user/MyUser'
import UsersList from './Users List/UsersList'

const LeftPanel = () => {
    return (
        <div className={Style.LeftPanel__main} >
            <MyUser/>
            <UsersList/>
        </div>
    )
}

export default LeftPanel
