import React, { useState, useRef, useEffect } from 'react'
import Styles from "./ChatMessages.module.css";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Slide from '@mui/material/Slide'
const ChatMessages = () => {
    const [data, setData] = useState([
        {
            user: 1,
            name: "Shayan",
            msg: "hidfdfd"
        },

        {
            user: 2,
            name: "Muzammil",
            msg: "hifdfdfdfjahsdkldfdfdfdfdfdfdgggggggggfffffffffffffffffhjj"
        },
        {
            user: 2,
            name: "Muzammil",
            msg: "hifdfdfj"
        },
        {
            user: 1,
            name: "Muzammil",
            msg: "hifdfdfjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
        },
        {
            user: 1,
            name: "Muzammil",
            msg: "hifdfdfj"
        },
        {
            user: 2,
            name: "Muzammil",
            msg: "hello world!!!!!!!!!!!!!!!!!!!!!!!!!!!!",

        },
        {
            user: 2,
            name: "Muzammil",
            msg: "hello world!!!!!!!!!!!!!!!!!!!!!!!!!!!!",

        },
        {
            user: 2,
            name: "Muzammil",
            msg: "hello world!!!!!!!!!!!!!!!!!!!!!!!!!!!!",

        }
    ])

    useEffect(() => {
        chatBox.current?.scrollIntoView({ transition: "smooth" });
    }, [data])

    const chatBox = useRef();

    return (
        <div className={Styles.ChatMessages__main}>
            {data.map((dat, index) =>
            (
                <div className={dat.user == 1 ? Styles.Box1 : Styles.Box2} key={index} ref={chatBox}>
                    <h3>{dat.user == 2 ? "You" : dat.name}</h3>
                    <Card variant="outlined" className={Styles.msg}>
                        <CardContent>
                            <Typography variant="p" component="div" style={{ fontSize: "16px", marginTop: "5px" }}>
                                {dat.msg}
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