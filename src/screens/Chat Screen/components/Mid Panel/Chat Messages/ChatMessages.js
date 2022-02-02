import React, { useState, useRef, useEffect } from 'react'
import Styles from "./ChatMessages.module.css";
import { useSelector } from "react-redux";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Slide from '@mui/material/Slide'

const ChatMessages = ({ chats }) => {
    const [classs, setClasss] = useState(false);
    const me = useSelector(state => state.me)

    useEffect(() => {
        chatBox.current?.scrollIntoView({ transition: "smooth" });
    }, [chats])

    console.log((me.firstName + " " + me.lastName))
    const chatBox = useRef();

    return (
        <div className={Styles.ChatMessages__main}>
            {chats.map((data, index) =>
            (
                <div className={(data.name === (me.firstName + " " + me.lastName)) ? Styles.Box2 : Styles.Box1} key={index} ref={chatBox}>
                    <Card variant="outlined" className={Styles.msg}>
                        <CardContent style={{ padding: "11px 10px" }}>
                            <Typography variant="p" component="div" style={{ fontSize: "15px" }}>
                                {data.msg}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )
            )}
        </div>
    )
}

export default ChatMessages
