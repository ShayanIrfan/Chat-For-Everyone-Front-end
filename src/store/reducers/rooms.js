import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        createdBy: "Shayan Irfan",
        for: "Obaid Nadeem",
        manual_id: "1203910239801923_89467584989823422"
    },
    {
        createdBy: "Mohammad Hassan Rasheed",
        for: "Shayan Irfan",
        manual_id: "1029834023980233_1203910239801923"
    },
    {
        createdBy: "Muzammil Siddiqui",
        for: "Shayan Irfan",
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