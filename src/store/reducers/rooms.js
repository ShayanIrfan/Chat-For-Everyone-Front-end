import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        createdBy: "1203910239801923",
        for: "8946758498982342",
        manual_id: "1203910239801923_8946758498982342"
    },
    {
        createdBy: "1029834023980233",
        for: "1203910239801923",
        manual_id: "1029834023980233_1203910239801923"
    },
    {
        createdBy: "0934850439580332",
        for: "1203910239801923",
        manual_id: "0934850439580332_1203910239801923"
    }
]

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        addRoom: (state, action) => ([...state, action.payload]),
        delRoom: (state) => {
            state.pop();
            return [...state]
        }
    },
})

export const { addRoom, delRoom } = roomsSlice.actions;

export default roomsSlice.reducer;