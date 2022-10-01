import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../features/blog/blogSlice';
import hallReducer from '../features/hall/hallSlice';
import loginReducer from '../features/login/loginSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        blog: blogReducer,
        hall: hallReducer,
    }
})