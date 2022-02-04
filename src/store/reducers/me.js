import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: "Shayan",
    lastName: "Irfan",
    id: "1203910239801923",
    image: "",
    email: "shayan@gmail.com"
}

const mySlice = createSlice({
    name: 'me',
    initialState,
    reducers: {
        fillUpState: (state, action) => ({ ...action.payload }),
        fillOutState: (state) => ({}),
        updateName: (state, action) => ({ ...state, firstName: action.payload.firstName, lastName: action.payload.lastName })
    },
})

export const { fillUpState, fillOutState, updateName } = mySlice.actions;

export default mySlice.reducer;