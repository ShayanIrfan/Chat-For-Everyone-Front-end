import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        firstName: "Obaid",
        lastName: "Nadeem",
        id: "8946758498982342",
        image: "",
        status: "online"
    },
    {
        firstName: "Mohammad Hassan",
        lastName: "Rasheed",
        id: "1029834023980233",
        image: "",
        status: "online"
    },
    {
        firstName: "Muzammil",
        lastName: "Siddiqui",
        id: "0934850439580332",
        image: "",
        status: "offline"
    },
    {
        firstName: "Umair ul",
        lastName: "Islam",
        id: "1209380921039812",
        image: "",
        status: "online"
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateStatusToOnline: (state, action) => {
            state.some(v => {
                if (v.id === action.payload.id) {
                    v.status = "online"
                    return true;
                }
            });
        },
        updateStatusToOffline: (state, action) => {
            state.some(v => {
                if (v.id === action.payload.id) {
                    v.status = "offline"
                    return true;
                }
            });
        },
        addUser: (state, action) => ([...state, action.payload]),
        removeUser: (state, action) => {
            state.some((v, i) => {
                if (v.id === action.payload.id) {
                    state.splice(i, 1);
                    return true;
                }
            })
        },
        updateName: (state, action) => {
            state.some(v => {
                if (v.id === action.payload.id) {
                    v.firstName = action.payload.firstName;
                    v.lastName = action.payload.lastName;
                    return true;
                }
            })
        }
    }
})

export const { updateStatusToOnline, updateStatusToOffline, addUser, removeUser, updateName } = usersSlice.actions;

export default usersSlice.reducer;