import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        firstName: "Obaid",
        lastName: "Nadeem",
        id: "8946758498982342",
        image: ""
    },
    {
        firstName: "Mohammad Hassan",
        lastName: "Rasheed",
        id: "1029834023980233",
        image: ""
    },
    {
        firstName: "Muzammil",
        lastName: "Siddiqui",
        id: "0934850439580332",
        image: ""
    },
    {
        firstName: "Umair ul",
        lastName: "Islam",
        id: "1209380921039812",
        image: ""
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    },
})

export default usersSlice.reducer;