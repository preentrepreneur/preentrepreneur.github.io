import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './LoginReducer'

export default configureStore({
    reducer: {
        User : LoginReducer,
    },
})