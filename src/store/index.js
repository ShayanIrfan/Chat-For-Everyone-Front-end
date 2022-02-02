import { configureStore } from '@reduxjs/toolkit'
import myReducer from './reducers/me'
import usersReducer from './reducers/users'
import roomsReducer from './reducers/rooms'
import chatsReducer from './reducers/chats'

const store = configureStore({
  reducer: {
    me: myReducer,
    users: usersReducer,
    rooms: roomsReducer,
    chats: chatsReducer
  },
})

export default store