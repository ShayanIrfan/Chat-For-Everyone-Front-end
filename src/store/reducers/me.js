import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    firstName: "Shayan",
    lastName: "Irfan",
    id: "1203910239801923",
    image: "",
    email: "shayan@gmail.com",
    password: "DoNz2087"
}

const mySlice = createSlice({
    name: 'me',
    initialState,
    reducers: {
        removePass: (state, action) => ({...state, password: action.payload.password})
    },
})

export const { removePass } = mySlice.actions;

export default mySlice.reducer;