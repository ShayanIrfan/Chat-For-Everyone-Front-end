import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "1203910239801923_8946758498982342": [
        {
            msg: "Hi",
            by: "1203910239801923",
            status: "seen"
        },
        {
            msg: "Hi",
            by: "89467584989823422",
            status: "seen"
        },
        {
            msg: "Or suna",
            by: "1203910239801923",
            status: "seen"
        }
    ],
    "1029834023980233_1203910239801923": [
        {
            msg: "Hi",
            by: "1029834023980233",
            status: "seen"
        },
        {
            msg: "Hellooo",
            by: "1203910239801923",
            status: "seen"
        },
        {
            msg: "ki hal chaaal?",
            by: "1029834023980233",
            status: "unseen"
        }
    ],
    "0934850439580332_1203910239801923": [
        {
            msg: "Hi",
            by: "0934850439580332",
            status: "seen"
        },
        {
            msg: "Hiiiiiii",
            by: "1203910239801923",
            status: "unseen"
        },
        {
            msg: "or bhaiiii",
            by: "0934850439580332",
            status: "unseen"
        },
        {
            msg: "or bhaiiii",
            by: "0934850439580332",
            status: "unseen"
        }
    ]
}

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        statusUdpate: (state, action) => {
            state[action.payload.session_id].slice(0).reverse().some(v => {
                if (v.by !== action.payload.my_id && v.status !== "seen") {
                    v.status = "seen"
                } else {
                    return true;
                }
            })
        },
        addMsg: (state, action) => {
            state[action.payload.session_id] === undefined ? state[action.payload.session_id] = [{ msg: action.payload.msg, by: action.payload.by, status: action.payload.action }]
                : state[action.payload.session_id] = [...state[action.payload.session_id], { msg: action.payload.msg, by: action.payload.by, status: action.payload.action }]
        }
    }
})

export const { statusUdpate, addMsg } = chatsSlice.actions;

export default chatsSlice.reducer;