import { configureStore } from "@reduxjs/toolkit";
import authorReducer from '../features/authors/authorsSlice';
import blogReducer from '../features/blog/blogSlice';
import loginReducer from '../features/login/loginSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        blog: blogReducer,
        authors: authorReducer,
    }
})