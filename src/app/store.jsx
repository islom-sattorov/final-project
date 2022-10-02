import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../features/blog/blogSlice';
import hallReducer from '../features/hall/hallSlice';
import loginReducer from '../features/login/loginSlice';
import menuReducer from '../features/menu/menuSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        blog: blogReducer,
        hall: hallReducer,
        menu: menuReducer,
    }
})