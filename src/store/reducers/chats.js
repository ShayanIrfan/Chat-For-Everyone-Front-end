import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "1203910239801923_89467584989823422": [
        {
            msg: "Hi",
            name: "Shayan Irfan",
            status: "seen"
        },
        {
            msg: "Hi",
            name: "Obaid Nadeem",
            status: "seen"
        },
        {
            msg: "Or suna",
            name: "Shayan Irfan",
            status: "seen"
        }
    ],
    "1029834023980233_1203910239801923": [
        {
            msg: "Hi",
            name: "Mohammad Hassan Raasheed",
            status: "seen"
        },
        {
            msg: "Hellooo",
            name: "Shayan Irfan",
            status: "seen"
        },
        {
            msg: "ki hal chaaal?",
            name: "Mohammad Hassan Raasheed",
            status: "unseen"
        }
    ],
    "0934850439580332_1203910239801923": [
        {
            msg: "Hi",
            name: "Muzammil Siddiqui",
            status: "seen"
        },
        {
            msg: "Hiiiiiii",
            name: "Shayan Irfan",
            status: "unseen"
        },
        {
            msg: "or bhaiiii",
            name: "Muzammil Siddiqui",
            status: "unseen"
        },
        {
            msg: "or bhaiiii",
            name: "Muzammil Siddiqui",
            status: "unseen"
        }
    ]
}

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        statusUdpate: (state, action) => {
            state[action.payload.room].map(v => {
                if (v.name !== action.payload.name) v.status = "seen";
            })
            return { ...state };
        },
        addMsg: (state, action) => {
            state[action.payload.session_id] === undefined ? state[action.payload.session_id] = [{ msg: action.payload.msg, name: action.payload.name, status: action.payload.action }]
                : state[action.payload.session_id] = [...state[action.payload.session_id], { msg: action.payload.msg, name: action.payload.name, status: action.payload.action }]
            return ({ ...state });
        }
    }
})

export const { statusUdpate, addMsg } = chatsSlice.actions;

export default chatsSlice.reducer;